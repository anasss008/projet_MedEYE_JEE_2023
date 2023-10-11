from fastapi import FastAPI
from pydantic import BaseModel
from app.model.model import predict_pipeline


app = FastAPI()


class ImgIn(BaseModel):
    url: str


class PredictionOut(BaseModel):
    classification: float


@app.get("/")
def home():
    return {"health_check": "OK"}


@app.post("/predict", response_model=PredictionOut)
def predict(payload: ImgIn):
    prediction = predict_pipeline(payload.url)
    return {"prediction": prediction}