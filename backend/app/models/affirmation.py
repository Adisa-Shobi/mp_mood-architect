from pydantic import BaseModel, Field

class AffirmationRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=50)
    feeling: str = Field(..., min_length=1, max_length=500)

class AffirmationResponse(BaseModel):
    affirmation: str