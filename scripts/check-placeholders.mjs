#!/usr/bin/env node
// Fails the build if any rendered HTML contains the literal
// placeholder marker. The marker stays in TODO.md and the content
// module; it must never reach the user.
import fs from "node:fs";
import path from "node:path";

const ROOTS = [".next/server/app", ".next/server/pages"];
const MARKER = "[[PLACEHOLDER";

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

let failures = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    if (!file.endsWith(".html") && !file.endsWith(".js") && !file.endsWith(".rsc")) continue;
    const content = fs.readFileSync(file, "utf8");
    if (content.includes(MARKER)) {
      console.error(`FAIL  ${file}  contains literal placeholder marker`);
      failures++;
    }
  }
}

if (failures === 0) {
  console.log("PASS  no literal placeholder markers in build output");
  process.exit(0);
} else {
  console.log(`\nFAIL  ${failures} files leaked placeholder markers into the build`);
  process.exit(1);
}
