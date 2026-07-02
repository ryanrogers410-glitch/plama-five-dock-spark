#!/usr/bin/env node
// Post-build: generate a static index.html shell for SPA hosting (Netlify).
// The Lovable-managed Nitro build outputs an SSR-only worker plus client
// assets. For pure static hosts (Netlify) we synthesize an HTML entry that
// loads the client bundle and lets TanStack Router hydrate on the client.
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const CLIENT_DIR = "dist/client";
const ASSETS_DIR = join(CLIENT_DIR, "assets");

if (!existsSync(ASSETS_DIR)) {
  console.error(`[postbuild] ${ASSETS_DIR} not found — skipping`);
  process.exit(0);
}

const files = readdirSync(ASSETS_DIR);
const entryJs = files.find((f) => /^index-.*\.js$/.test(f));
const entryCss = files.find((f) => /^styles-.*\.css$/.test(f));

if (!entryJs) {
  console.error("[postbuild] No client entry JS found in dist/client/assets");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plama Projects — Multidisciplinary Engineering Consultancy</title>
    <meta name="description" content="Plama Projects is a Sydney-based multidisciplinary engineering consultancy delivering premium design across ten disciplines." />
    <meta property="og:title" content="Plama Projects — Multidisciplinary Engineering Consultancy" />
    <meta property="og:description" content="Sydney-based engineering consultancy delivering premium multidisciplinary design." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    ${entryCss ? `<link rel="stylesheet" href="/assets/${entryCss}" />` : ""}
    <link rel="modulepreload" href="/assets/${entryJs}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryJs}"></script>
  </body>
</html>
`;

writeFileSync(join(CLIENT_DIR, "index.html"), html);
console.log(`[postbuild] Wrote ${CLIENT_DIR}/index.html (entry: ${entryJs})`);
