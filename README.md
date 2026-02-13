# Affirm Nation

A full-stack AI web app that generates personalized therapeutic affirmations based on a user's name and current feeling. Built with FastAPI and React.

**Live:** [Frontend](https://mp-mood-architect.vercel.app/) | [Backend](https://mpmood-architect-production.up.railway.app)

## Project Structure (Mono Repo)

```
mp_mood-architect/
├── backend/       # FastAPI + OpenAI
├── web-client/    # React + Vite + Tailwind
```

## How It Works

1. User enters their name and selects how they feel
2. Frontend sends a POST request to `/api/affirmation`
3. Backend constructs a prompt with safety guardrails and sends it to OpenAI
4. A personalized affirmation is returned and displayed

## Running Locally

Each project has its own README with detailed setup instructions:

- [Backend README](./backend/README.md) -- Poetry, Docker, environment config
- [Web Client README](./web-client/README.md) -- pnpm, Vite dev server

## Environment Variables

Both services require environment configuration. See each project's `.env.example` for reference.

Screenshot of hosting provider env var settings (values hidden):

![Environment Variables Backend](./env-vars-screenshot01.png)
![Environment Variables Frontend](./env-vars-screenshot02.png)

## Deployment

### Backend (Railway)

1. Create a new project on [Railway](https://railway.app/) and connect your GitHub repo
2. Set the root directory to `backend`
3. Railway will detect the Dockerfile automatically
4. Add environment variables in the Railway dashboard:
   - `OPENAI_API_KEY`
   - `ENVIRONMENT`
   - `ALLOWED_ORIGINS` -- set to your frontend's production URL

### Frontend (Vercel)

1. Import the repo on [Vercel](https://vercel.com/)
2. Set the root directory to `web-client`
3. Vercel will detect the Vite framework automatically
4. Add the environment variable in the Vercel dashboard:
   - `VITE_API_URL` -- set to your backend's production URL

## Next Steps / Improvements

- Add agent evaluation using [Opik](https://www.comet.com/site/products/opik/)
- Introduce rate limiting on the affirmation endpoint to prevent abuse
- Add unit and integration tests for both backend services and frontend components.
