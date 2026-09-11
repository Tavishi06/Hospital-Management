from fastapi import FastAPI, Depends
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
        symptoms=patient.symptoms
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


@app.put("/patients/call-next")
def call_next_patient(
    department: str,
    db: Session = Depends(get_db)
):
    patient = (
        db.query(Patient)
        .filter(
            Patient.department == department,
            Patient.status == "waiting"
        )
        .order_by(Patient.token_number.asc())
        .first()
    )

    if not patient:
        return {"message": "No waiting patients"}

    patient.status = "called"

    db.commit()
    db.refresh(patient)

    return patient

