from dotenv import load_dotenv
import os
import logging
from pydantic_settings import BaseSettings

load_dotenv()


class Config(BaseSettings):
    app_name: str = "MoodArchitect"
    debug: bool = os.environ.get("ENVIRONMENT", "production") == "development"

    @property
    def allowed_origins(self) -> list[str]:
        origins = os.environ.get("ALLOWED_ORIGINS", "")
        return [o.strip() for o in origins.split(",") if o.strip()]

    @property
    def openai_api_key(self):
        openai_api_key = os.environ.get("OPENAI_API_KEY", "")
        if not openai_api_key and self.debug:
            logging.warning("OPENAI_API_KEY is not set in environment variables.")
        return openai_api_key
        


config = Config()