from fastapi import APIRouter, Depends, HTTPException
from openai import OpenAIError

from app.services.affirmation_service import AffirmationService
from app.models.affirmation import AffirmationRequest, AffirmationResponse

router = APIRouter()


def get_affirmation_service() -> AffirmationService:
    return AffirmationService()


@router.post("/affirmation", response_model=AffirmationResponse)
def generate_affirmation(
    data: AffirmationRequest,
    service: AffirmationService = Depends(get_affirmation_service),
):
    try:
        return service.generate_affirmation(
            feeling=data.feeling,
            name=data.name,
        )
    except OpenAIError:
        raise HTTPException(
            status_code=502,
            detail="Unable to generate affirmation. Please try again later.",
        )
