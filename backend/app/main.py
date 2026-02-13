from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import config
from app.core.exceptions import register_exception_handlers
from app.core.logging import setup_logging
from app.api import affirmation

setup_logging()

app = FastAPI(title=config.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.allowed_origins,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type"],
)

register_exception_handlers(app)

# Register routes
app.include_router(affirmation.router, prefix="/api")