# AGENTS.md

## Overview
Dependency-free Node.js HTTP server that requires 4 environment variables to start. It only checks for presence (non-empty strings) — the actual values don't matter.

## Required environment variables
- `REQUIRED_EXTERNAL_API_KEY`
- `DATABASE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `WEBHOOK_SIGNING_SECRET`

All are checked at startup in `config.mjs`. The app throws and exits if any are missing or empty.

## Endpoints
- `GET /` — HTML page confirming the backend is running
- `GET /health` — JSON health check (`{"status":"ok","requiredEnvironmentVariables":4}`)

## Running locally
```bash
docker compose -f docker-compose.base44.yml up -d
```

## Tests
```bash
docker compose -f docker-compose.base44.yml exec app node --test
```
