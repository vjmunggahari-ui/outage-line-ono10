import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Every server is down. My status checks run on those same servers, so the only honest update I can give you is: I do not know yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry length ${LINE.length} outside gate 1-160`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is whitespace only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
const byteLen = Buffer.byteLength(LINE, "utf8");
if (byteLen !== LINE.length) {
  throw new Error(`entry is not pure ASCII: ${byteLen} bytes vs ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
