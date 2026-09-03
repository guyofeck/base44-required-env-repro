import assert from "node:assert/strict";
import test from "node:test";

import { REQUIRED_ENV_NAME, readRequiredEnvironment } from "./config.mjs";

test("startup fails when the required environment variable is missing", () => {
  assert.throws(
    () => readRequiredEnvironment({}),
    new RegExp(`${REQUIRED_ENV_NAME} is required`),
  );
});

test("any non-empty development placeholder satisfies startup", () => {
  assert.equal(
    readRequiredEnvironment({ [REQUIRED_ENV_NAME]: "generated-placeholder" }),
    "generated-placeholder",
  );
});
