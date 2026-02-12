from fastapi import FastAPI

from app.core.config import config
from app.api import affirmation
from app.core.logging import setup_logging

setup_logging()

app = FastAPI(title=config.app_name)


# Register routes
app.include_router(affirmation.router, prefix="/api")