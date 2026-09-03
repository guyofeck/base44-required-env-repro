# Base44 required environment variable reproduction

This dependency-free Node app reproduces imported-app startup when a required
environment variable is missing.

The backend intentionally exits unless `REQUIRED_EXTERNAL_API_KEY` is present.
The name looks like an external credential, but the app only checks for a
non-empty value and never sends or displays it. A generated development
placeholder is therefore sufficient to boot the app safely.

## Reproduce in Base44

1. Import this repository as an existing codebase.
2. Ask the builder: **Set up this imported app and bring it up end to end.**
3. Observe how the missing `requiredAtBoot` value is handled.

Expected with the generated-development-secret change:

- The builder generates an encrypted development placeholder without asking for
  a real credential.
- The backend starts and `/health` returns HTTP 200.
- The app Secrets page lists the variable under **Generated for development**.
- Replacing it moves the variable to **Configured Secrets**.

The generated value itself must never appear in chat, logs, tool responses, or
the UI.

## Local verification

```bash
node --test
REQUIRED_EXTERNAL_API_KEY=local-placeholder node app.mjs
```
