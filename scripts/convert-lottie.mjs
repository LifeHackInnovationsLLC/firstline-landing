#!/usr/bin/env node
// Bundle every .json Lottie under public/animations into a sibling .lottie file
// (compressed ZIP with a manifest). Run: node scripts/convert-lottie.mjs
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { DotLottie } from "@dotlottie/dotlottie-js";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..", "public", "animations");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && extname(entry.name) === ".json") out.push(full);
  }
  return out;
}

const jsonFiles = await walk(ROOT);
if (jsonFiles.length === 0) {
  console.log("No .json Lottie files found under", ROOT);
  process.exit(0);
}

for (const jsonPath of jsonFiles) {
  const id = basename(jsonPath, ".json");
  const data = JSON.parse(await readFile(jsonPath, "utf8"));

  const dotLottie = new DotLottie();
  dotLottie.addAnimation({ id, data });
  await dotLottie.build();

  const buffer = await dotLottie.toArrayBuffer();
  const outPath = jsonPath.replace(/\.json$/, ".lottie");
  await writeFile(outPath, Buffer.from(buffer));
  console.log(`  ${jsonPath.replace(ROOT, "")} → ${outPath.replace(ROOT, "")}`);
}

console.log(`\nConverted ${jsonFiles.length} file(s).`);
