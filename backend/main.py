from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, get_db
from models.patient import Patient
from schemas.patient import PatientCreate


# --------------------------------------------------
# DATABASE
# --------------------------------------------------

Base.metadata.create_all(bind=engine)


# --------------------------------------------------
# FASTAPI APP
# --------------------------------------------------

app = FastAPI(
    title="QueueLess API",
    description="Intelligent Hospital Queue & Patient Flow System",
    version="1.0.0"
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# CONSTANTS
# --------------------------------------------------

AVERAGE_CONSULTATION_TIME = 8

PRIORITY_ORDER = {
    "emergency": 1,
    "elderly": 2,
    "pregnant": 2,
    "follow_up": 3,
    "regular": 4
}


# --------------------------------------------------
# HOME
# --------------------------------------------------

@app.get("/")
def home():
    return {
        "message": "QueueLess API is running",
        "status": "success"
    }


# --------------------------------------------------
# CREATE PATIENT
# --------------------------------------------------

@app.post("/patients")
def create_patient(
    patient: PatientCreate,
    db: Session = Depends(get_db)
):

    last_patient = (
        db.query(Patient)
        .filter(
            Patient.department == patient.department
        )
        .order_by(
            Patient.token_number.desc()
        )
        .first()
    )

    if last_patient:
        next_token = last_patient.token_number + 1
    else:
        next_token = 1

    new_patient = Patient(
        name=patient.name,
        age=patient.age,
        phone=patient.phone,
        department=patient.department,
        token_number=next_token,
        status="waiting",
        symptoms=patient.symptoms,
        priority=patient.priority
    )

    db.add(new_patient)
    db.commit()
    db.refresh(new_patient)

    return new_patient


# --------------------------------------------------
# GET ALL PATIENTS
# --------------------------------------------------

@app.get("/patients")
def get_patients(
    department: str | None = None,
    db: Session = Depends(get_db)
):

    query = db.query(Patient)

    if department:
        query = query.filter(
            Patient.department == department
        )

    patients = (
        query
        .order_by(Patient.token_number.asc())
        .all()
    )

    return patients


# --------------------------------------------------
# FIND PATIENT BY PHONE
# --------------------------------------------------

@app.get("/patients/by-phone/{phone}")
def get_patient_by_phone(
    phone: str,
    db: Session = Depends(get_db)
):

    patient = (
        db.query(Patient)
        .filter(Patient.phone == phone)
        .order_by(Patient.id.desc())
        .first()
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="No patient found with this mobile number"
        )

    return patient


# --------------------------------------------------
# GET SINGLE PATIENT
# --------------------------------------------------

@app.get("/patients/{patient_id}")
def get_patient(
    patient_id: int,
    db: Session = Depends(get_db)
):

    patient = (
        db.query(Patient)
        .filter(Patient.id == patient_id)
        .first()
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    return patient


# --------------------------------------------------
# CALL SPECIFIC PATIENT
# --------------------------------------------------

@app.put("/patients/{patient_id}/call")
def call_patient(
    patient_id: int,
    db: Session = Depends(get_db)
):

    patient = (
        db.query(Patient)
        .filter(Patient.id == patient_id)
        .first()
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    patient.status = "called"

    db.commit()
    db.refresh(patient)

    return patient


# --------------------------------------------------
# CALL NEXT PATIENT
# --------------------------------------------------

@app.put("/patients/call-next")
def call_next_patient(
    department: str,
    db: Session = Depends(get_db)
):

    patients = (
        db.query(Patient)
        .filter(
            Patient.department == department,
            Patient.status == "waiting"
        )
        .all()
    )

    if not patients:
        return {
            "message": "No waiting patients"
        }

    patients.sort(
        key=lambda patient: (
            PRIORITY_ORDER.get(
                patient.priority,
                4
            ),
            patient.token_number
        )
    )

    patient = patients[0]

    patient.status = "called"

    db.commit()
    db.refresh(patient)

    return patient


# --------------------------------------------------
# QUEUE STATUS
# --------------------------------------------------

@app.get("/patients/{patient_id}/queue-status")
def get_queue_status(
    patient_id: int,
    db: Session = Depends(get_db)
):

    patient = (
        db.query(Patient)
        .filter(Patient.id == patient_id)
        .first()
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    waiting_patients = (
        db.query(Patient)
        .filter(
            Patient.department == patient.department,
            Patient.status == "waiting"
        )
        .all()
    )

    waiting_patients.sort(
        key=lambda p: (
            PRIORITY_ORDER.get(
                p.priority,
                4
            ),
            p.token_number
        )
    )

    position = None

    for index, p in enumerate(waiting_patients):

        if p.id == patient.id:
            position = index + 1
            break

    if position is not None:
        patients_ahead = position - 1
    else:
        patients_ahead = 0

    estimated_wait = (
        patients_ahead *
        AVERAGE_CONSULTATION_TIME
    )

    current_patient = (
        db.query(Patient)
        .filter(
            Patient.department == patient.department,
            Patient.status == "called"
        )
        .order_by(
            Patient.token_number.desc()
        )
        .first()
    )

    current_token = (
        current_patient.token_number
        if current_patient
        else None
    )

    return {
        "patient_id": patient.id,
        "your_token": patient.token_number,
        "department": patient.department,
        "status": patient.status,
        "priority": patient.priority,
        "queue_position": position,
        "patients_ahead": patients_ahead,
        "current_token": current_token,
        "estimated_wait_minutes": estimated_wait
    }