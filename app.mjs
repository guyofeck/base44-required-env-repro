import { createServer } from "node:http";

import { REQUIRED_ENV_NAMES, readRequiredEnvironment } from "./config.mjs";

readRequiredEnvironment();

const port = Number(process.env.PORT ?? 3000);
const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(
      JSON.stringify({
        status: "ok",
        requiredEnvironmentVariables: REQUIRED_ENV_NAMES.length,
      }),
    );
    return;
  }

  if (request.url !== "/") {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Base44 required env reproduction</title>
    <style>
      body { font: 18px/1.5 system-ui, sans-serif; max-width: 720px; margin: 80px auto; padding: 0 24px; }
      code { background: #f2f2f2; border-radius: 6px; padding: 2px 6px; }
    </style>
  </head>
  <body>
    <h1>The backend is running</h1>
    <p>All <code>${REQUIRED_ENV_NAMES.length}</code> required environment variables are present.</p>
    <p>This reproduction app checks only for presence and never displays their values.</p>
  </body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(
    `Reproduction server listening on port ${port}; ${REQUIRED_ENV_NAMES.length} required environment variables are present`,
  );
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
