# Affirm Nation - Web Client

React frontend for the Affirm Nation affirmation generator.

## Folder Structure

```
web-client/
├── src/
│   ├── components/    # UI components grouped by feature and layout
│   ├── hooks/         # React Query hooks for API calls
│   ├── lib/           # Axios instance and utilities
│   ├── providers/     # Context providers (React Query)
│   └── schemas/       # Zod validation schemas
├── public/            # Static assets
└── .env.example
```

## Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) as the package manager

### Installing pnpm

```bash
npm install -g pnpm
```

Verify:

```bash
pnpm --version
```

## Environment Setup

Copy the example env file:

```bash
cp .env.example .env
```

The `.env.example` contains:

```
VITE_API_URL=""
```

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL. Defaults to `http://localhost:8000` if left empty |

## Running Locally

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Other Commands

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Lint and format:

```bash
pnpm lint
npx @biomejs/biome check --write .
```
