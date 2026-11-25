// Roast Your Fridge — one line, one laugh.
// Writes a single roast line about the fridge to /output/entry.txt.
// Chosen line (from the design spec): the fridge has exactly one job —
// staying cold — and it treats that job like a side hustle. A direct,
// third-person roast: short, specific, one twist, reads cleanly aloud.
import { mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The roast. One line, well inside the 200-character gate.
const LINE =
  "My fridge has one job \u2014 stay cold \u2014 and it treats it like a side hustle.";

function clearOutputContents(dir: string): void {
  // Clear only the CONTENTS of /output. Never remove /output itself:
  // on the grader it is a mount point and removing it fails the run.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function validateLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`Roast line must be 1-200 characters, got ${trimmed.length}.`);
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("Roast line must be a single line.");
  }
  if (!/fridge|phone/i.test(trimmed)) {
    throw new Error("Roast line must roast a fridge or a phone.");
  }
  if (trimmed !== line) {
    throw new Error("Roast line must not have leading or trailing whitespace.");
  }
  return trimmed;
}

function selfCheck(file: string, expectedLine: string): void {
  // Re-read what was written and verify it byte-for-byte, so a silent
  // write failure or stray character can never slip through to the judge.
  const written = readFileSync(file, "utf8");
  const lines = written.split("\n");
  if (lines.length !== 2 || lines[1] !== "" || lines[0] !== expectedLine) {
    throw new Error("Self-check failed: file does not hold exactly the roast line.");
  }
  const chars = [...expectedLine].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Self-check failed: line is ${chars} characters.`);
  }
  console.log(`Self-check passed: ${chars} characters, 1 line, exact match.`);
}

function main(): void {
  const line = validateLine(LINE);
  clearOutputContents(OUTPUT_DIR);
  writeFileSync(OUTPUT_FILE, line + "\n", "utf8");
  selfCheck(OUTPUT_FILE, line);
  console.log(`Wrote ${[...line].length} characters to ${OUTPUT_FILE}`);
}

main();
