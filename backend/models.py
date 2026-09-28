from sqlalchemy import Column, Integer, String
from database import Base


class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)

    vehicle_type = Column(String, nullable=False)
    fuel_type = Column(String, nullable=False)
    vehicle_age = Column(String, nullable=False)
    kilometers = Column(Integer, nullable=False)

    last_service = Column(String, nullable=False)
    vehicle_issue = Column(String, nullable=False)