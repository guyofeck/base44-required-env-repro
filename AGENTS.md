# AGENTS.md

## Overview
Dependency-free Node.js app that requires `REQUIRED_EXTERNAL_API_KEY` to start. The variable is only checked for presence — a generated development placeholder is sufficient.

## Verification
- `GET /health` → 200 JSON `{"status":"ok","requiredEnvironmentVariable":"present"}`
- `GET /` → HTML page confirming the backend is running

## Quirks
- The app exits immediately if `REQUIRED_EXTERNAL_API_KEY` is empty or missing.
- No `package.json` — no dependencies to install; runs with plain Node.
- `node --watch app.mjs` provides live reload on file changes.
