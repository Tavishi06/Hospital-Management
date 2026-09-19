from pydantic import BaseModel, Field

from enum import Enum


class Department(str, Enum):
    dental = "dental"
    cardiology = "cardiology"
    gastro = "gastro"
    orthopedics = "orthopedics"
    neurology = "neurology"
    general = "general"

class PatientCreate(BaseModel):
    name: str
    age: int
    phone: str = Field(..., pattern=r"^[0-9]{10}$")
    department: Department
    symptoms: str | None = None
    priority: str | None = None