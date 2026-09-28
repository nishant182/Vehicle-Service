from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import engine, Base, get_db
from models import Vehicle
from schemas import VehicleCreate

from fastapi import FastAPI

from database import engine, Base
from models import Vehicle


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="AI Vehicle Service API",
    description="Backend API for AI Vehicle Service",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "AI Vehicle Service API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
    
    
@app.post("/vehicles")
def create_vehicle(
    vehicle: VehicleCreate,
    db: Session = Depends(get_db)
):
    new_vehicle = Vehicle(
        vehicle_type=vehicle.vehicle_type,
        fuel_type=vehicle.fuel_type,
        vehicle_age=vehicle.vehicle_age,
        kilometers=vehicle.kilometers,
        last_service=vehicle.last_service,
        vehicle_issue=vehicle.vehicle_issue
    )

    db.add(new_vehicle)
    db.commit()
    db.refresh(new_vehicle)

    return {
        "message": "Vehicle added successfully",
        "vehicle_id": new_vehicle.id
    }
    
    
@app.get("/vehicles")
def get_vehicles(db: Session = Depends(get_db)):
    vehicles = db.query(Vehicle).all()

    return vehicles