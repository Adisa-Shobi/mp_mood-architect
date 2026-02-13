from fastapi import APIRouter, Depends

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
    return service.generate_affirmation(
        feeling=data.feeling,
        name=data.name,
    )
