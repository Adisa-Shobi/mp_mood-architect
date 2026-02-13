from fastapi import FastAPI

from app.core.config import config
from app.core.exceptions import register_exception_handlers
from app.core.logging import setup_logging
from app.api import affirmation

setup_logging()

app = FastAPI(title=config.app_name)

register_exception_handlers(app)

# Register routes
app.include_router(affirmation.router, prefix="/api")