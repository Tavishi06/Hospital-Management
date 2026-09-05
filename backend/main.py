from fastapi import FastAPI
from sqlalchemy import text
from database import engine, Base, SessionLocal
from models.patient import Patient

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


@app.get("/database-test")
def database_test():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "message": "Database connection is working",
            "status": "success"
        }

    except Exception as e:
        return {
            "message": "Database connection failed",
            "status": "error",
            "error": str(e)
        }
@app.post("/patients")
def create_patient(
    name: str,
    age: int,
    phone: str,
    department: str,
    token_number: int,
    symptoms: str,
    status: str = "waiting"
):
    db = SessionLocal()

    try:
        patient = Patient(
            name=name,
            age=age,
            phone=phone,
            department=department,
            token_number=token_number,
            symptoms=symptoms,
            status=status
        )

        db.add(patient)
        db.commit()
        db.refresh(patient)

        return {
            "message": "Patient registered successfully",
            "patient_id": patient.id,
            "token_number": patient.token_number,
            "status": patient.status
        }

    finally:
        db.close()

@app.get("/patients")
def get_patients():
    db = SessionLocal()

    try:
        patients = db.query(Patient).all()

        return patients

    finally:
        db.close()