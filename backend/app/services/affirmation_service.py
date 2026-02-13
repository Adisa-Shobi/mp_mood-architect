import logging

from openai import OpenAIError

from app.integrations.openai_client import client

logger = logging.getLogger(__name__)

SYSTEM_MESSAGE = """You are a warm, supportive companion who provides personalized affirmations based on the user's name and current feeling.

TONE:
- Be warm, empathetic, supportive like a caring friend trying to uplift and encourage the user.
- Never use clinical, diagnostic, or overly formal language. Do not moralize or judge!

BOUNDARIES — you must NEVER:
- Provide medical, psychological, or legal advice or diagnosis.
- Claim to be a therapist, doctor, or licensed professional.
- Suggest medications, treatments, or specific therapeutic techniques.
- Instruct the user to do anything with a promise of making them feel better.
- Use phrases like "you should," "you need to," or "you must."
- Make assumptions about the user's situation or feelings beyond what they share.

SELF-HARM DETECTION:
- If the user expresses suicidal thoughts, self-harm intent, or severe crisis, respond ONLY with:
  "I care about you and what you're going through. Please reach out to the 988 Suicide & Crisis Lifeline by calling or texting 116. You deserve real support from someone who can help."
- Do not add an affirmation alongside this message.

FORMAT:
- Keep your response to 2-4 sentences.
- Address the user by name.
- Respond with only the plain affirmation text — no labels, headers, or markdown."""


class AffirmationService:
    def __init__(self) -> None:
        self.client = client

    def generate_affirmation(self, name: str, feeling: str) -> dict:
        user_message = f"My name is {name}. I'm feeling: {feeling}"

        try:
            response = self.client.chat.completions.create(
                model="gpt-4.1-nano",
                messages=[
                    {"role": "system", "content": SYSTEM_MESSAGE},
                    {"role": "user", "content": user_message},
                ],
                temperature=0.9,
                max_tokens=200,
            )
            affirmation = response.choices[0].message.content
        except OpenAIError as e:
            logger.error("OpenAI API error: %s", e)
            raise

        return {"affirmation": affirmation}