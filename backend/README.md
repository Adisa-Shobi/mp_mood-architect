# Affirm Nation - Backend

FastAPI backend that generates personalized affirmations using OpenAI.

## Folder Structure

```
backend/
├── app/
│   ├── main.py                  # FastAPI app, middleware, route registration
│   ├── api/
│   │   └── affirmation.py       # Route handlers
│   ├── core/
│   │   ├── config.py            # App configuration from environment
│   │   ├── exceptions.py        # Global exception handlers
│   │   └── logging.py           # Logging setup
│   ├── integrations/
│   │   └── openai_client.py     # OpenAI client instance
│   ├── models/
│   │   └── affirmation.py       # Pydantic request/response schemas
│   └── services/
│       └── affirmation_service.py  # Business logic, prompt engineering
├── Dockerfile
├── docker-compose.yml
├── run_develop.sh
├── pyproject.toml
└── .env.example
```

## Prerequisites

- Python 3.12+
- [Poetry](https://python-poetry.org/) for dependency management
- Docker (optional, for containerised development)

### Installing Poetry

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

Verify the installation:

```bash
poetry --version
```

## Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

The `.env.example` contains:

```
OPENAI_API_KEY=""
ENVIRONMENT="development"
ALLOWED_ORIGINS="http://localhost:5173"
```

| Variable | Description |
|---|---|
| `OPENAI_API_KEY` | Your OpenAI API key |
| `ENVIRONMENT` | Set to `development` for debug mode |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins |

## Running Locally

### Without Docker

Install dependencies:

```bash
poetry install
```

Start the dev server:

```bash
poetry run uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### With Docker

Use the development script which builds the image and starts the container with hot-reload:

```bash
./run_develop.sh
```

This runs `docker compose up --build --watch`, which:
- Builds the image from the Dockerfile
- Mounts `./app` for live code reloading
- Rebuilds automatically when `pyproject.toml` changes

Alternatively, run the commands directly:

```bash
docker compose up --build        # production-like
docker compose up --build --watch # development with hot-reload
```

## API

### `POST /api/affirmation`

Generate a personalised affirmation.

**Request:**

```json
{
  "name": "Alex",
  "feeling": "anxious"
}
```

**Response:**

```json
{
  "affirmation": "Alex, it takes real courage to acknowledge how you feel. You are not alone in this, and every breath you take is a quiet reminder of your strength."
}
```

**Error (502):** Returned when the OpenAI API is unreachable.

```json
{
  "detail": "Unable to generate affirmation. Please try again later."
}
```
