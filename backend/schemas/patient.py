from pydantic import BaseModel


class PatientCreate(BaseModel):
    name: str
    age: int
    phone: str
    department: str
    symptoms: str | None = None