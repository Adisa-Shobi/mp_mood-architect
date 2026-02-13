from fastapi import FastAPI
from fastapi.responses import JSONResponse
from openai import OpenAIError


def register_exception_handlers(app: FastAPI) -> None:
    @app.exception_handler(OpenAIError)
    async def openai_exception_handler(request, exc):
        return JSONResponse(
            status_code=502,
            content={"detail": "Unable to generate affirmation. Please try again later."},
        )
