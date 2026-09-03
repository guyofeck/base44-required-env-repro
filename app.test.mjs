import assert from "node:assert/strict";
import test from "node:test";

import { REQUIRED_ENV_NAMES, readRequiredEnvironment } from "./config.mjs";

test("startup fails when required environment variables are missing", () => {
  assert.throws(
    () => readRequiredEnvironment({}),
    /REQUIRED_EXTERNAL_API_KEY, DATABASE_URL, EMAIL_PROVIDER_API_KEY, WEBHOOK_SIGNING_SECRET must be present/,
  );
});

test("non-empty development placeholders satisfy startup", () => {
  const placeholders = Object.fromEntries(
    REQUIRED_ENV_NAMES.map((name) => [name, "generated-placeholder"]),
  );

  assert.deepEqual(readRequiredEnvironment(placeholders), placeholders);
});
