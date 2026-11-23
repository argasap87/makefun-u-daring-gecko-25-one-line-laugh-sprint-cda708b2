// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// Writes a single original funny line about everyday life to /output/entry.txt.
// The line is the whole entry: one line, at most 200 characters, UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Hook: a gentle alarm sound meant to make mornings peaceful, betrayed by
// what the sound actually suggests. The twist lands on the last word.
const LINE =
  "I set my alarm to ocean waves so I'd wake up peaceful, and now I start every morning checking whether the flat is flooding.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outFile}`);
