# AGENTS.md

## Overview
Dependency-free Node.js app that requires 4 environment variables to boot. It only checks for presence — never uses them for real integrations.

## Required environment variables
- `REQUIRED_EXTERNAL_API_KEY`
- `DATABASE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `WEBHOOK_SIGNING_SECRET`

All are satisfied by generated development placeholders.

## Verification
- `GET /` — HTML page confirming the backend is running
- `GET /health` — JSON health check (`{"status":"ok","requiredEnvironmentVariables":4}`)

## Dev server
Uses `node --watch app.mjs` for live reload on file changes.
