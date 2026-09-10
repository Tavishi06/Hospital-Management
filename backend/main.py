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
    new_patient = Patient(
        name=patient.name,
        phone=patient.phone,
        age=patient.age
    )

    db.add(new_patient)
    db.commit()
    db.refresh(new_patient)

    return {
        "message": "Patient registered successfully",
        "patient": {
            "id": new_patient.id,
            "name": new_patient.name,
            "phone": new_patient.phone,
            "age": new_patient.age
        }
    }