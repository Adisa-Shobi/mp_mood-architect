from openai import OpenAI

from app.core.config import config

client = OpenAI(api_key=config.openai_api_key)
