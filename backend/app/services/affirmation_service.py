class AffirmationService:
    def __init__(self) -> None:
        pass
    
    def generate_affirmation(self, name: str, feeling: str):
        return {"affirmation": f"Hello {name}, this is a test affirmation."}