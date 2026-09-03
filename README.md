# Base44 required environment variable reproduction

This dependency-free Node app reproduces imported-app startup when four required
environment variables are missing.

The backend intentionally exits unless all four values are present. Their names
look like external credentials and configuration, but the app only checks for
non-empty values and never sends or displays them. Generated development
placeholders are therefore sufficient to boot the app safely.

## Reproduce in Base44

1. Import this repository as an existing codebase.
2. Ask the builder: **Set up this imported app and bring it up end to end.**
3. Observe how the missing required-at-boot values are handled.

Expected with the generated-development-secret change:

- The builder generates encrypted development placeholders without asking for
  real credentials.
- The backend starts and `/health` returns HTTP 200.
- The app Secrets page lists all four variables under **Generated for development**.
- Replacing one moves that variable to **Configured secrets**.

The generated values themselves must never appear in chat, logs, tool responses,
or the UI.

## Local verification

```bash
node --test
REQUIRED_EXTERNAL_API_KEY=placeholder \
  DATABASE_URL=placeholder \
  EMAIL_PROVIDER_API_KEY=placeholder \
  WEBHOOK_SIGNING_SECRET=placeholder \
  node app.mjs
```
