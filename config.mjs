export const REQUIRED_ENV_NAME = "REQUIRED_EXTERNAL_API_KEY";

export function readRequiredEnvironment(environment = process.env) {
  const value = environment[REQUIRED_ENV_NAME];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `${REQUIRED_ENV_NAME} is required before the backend can start`,
    );
  }
  return value;
}
