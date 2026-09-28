from pydantic import BaseModel


class VehicleCreate(BaseModel):
    vehicle_type: str
    fuel_type: str
    vehicle_age: str
    kilometers: int
    last_service: str
    vehicle_issue: str