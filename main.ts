import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original one-line joke, written for this bounty.
const LINE =
  "I told the taxi driver to take the scenic route; he took me to his cousin's wedding.";

// Gate guards: the entry must be 1-140 characters (counted as code points,
// so multi-byte characters are measured the way a reader sees them),
// a single line, and more than whitespace.
const length = [...LINE].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${length}`);
}
if (/\r|\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the one line.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
