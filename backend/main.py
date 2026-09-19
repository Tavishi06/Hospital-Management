from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, get_db
from models.patient import Patient
from schemas.patient import PatientCreate

Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="QueueLess API",
    description="Intelligent Hospital Queue & Patient Flow System",
    version="1.0.0"
)

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


@app.get("/")
def home():
    return {
        "message": "QueueLess API is running",
        "status": "success"
    }


@app.post("/patients")
def create_patient(
    patient: PatientCreate,
    db: Session = Depends(get_db)
):
    last_patient = (
        db.query(Patient)
        .filter(Patient.department == patient.department)
        .order_by(Patient.token_number.desc())
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


@app.get("/patients")
def get_patients(
    department: str | None = None,
    db: Session = Depends(get_db)
):
    query = db.query(Patient)

    if department:
        query = query.filter(Patient.department == department)

    patients = query.order_by(Patient.token_number.asc()).all()

    return patients
    patients = db.query(Patient).all()

    return patients


@app.put("/patients/{patient_id}/call")
def call_patient(
    patient_id: int,
    db: Session = Depends(get_db)
):
    patient = db.query(Patient).filter(Patient.id == patient_id).first()

    if not patient:
        return {"message": "Patient not found"}

    patient.status = "called"

    db.commit()
    db.refresh(patient)

    return patient

PRIORITY_ORDER = {
    "emergency": 1,
    "elderly": 2,
    "pregnant": 2,
    "follow_up": 3,
    "regular": 4
}

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
        return {"message": "No waiting patients"}

    patients.sort(
        key=lambda patient: (
            PRIORITY_ORDER.get(patient.priority, 4),
            patient.token_number
        )
    )

    patient = patients[0]

    patient.status = "called"

    db.commit()
    db.refresh(patient)

    return patient