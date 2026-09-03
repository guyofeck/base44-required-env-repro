export const REQUIRED_ENV_NAMES = [
  "REQUIRED_EXTERNAL_API_KEY",
  "DATABASE_URL",
  "EMAIL_PROVIDER_API_KEY",
  "WEBHOOK_SIGNING_SECRET",
];

export function readRequiredEnvironment(environment = process.env) {
  const missingNames = REQUIRED_ENV_NAMES.filter((name) => {
    const value = environment[name];
    return typeof value !== "string" || value.trim() === "";
  });

  if (missingNames.length > 0) {
    throw new Error(
      `${missingNames.join(", ")} must be present before the backend can start`,
    );
  }

  return Object.fromEntries(
    REQUIRED_ENV_NAMES.map((name) => [name, environment[name]]),
  );
}
