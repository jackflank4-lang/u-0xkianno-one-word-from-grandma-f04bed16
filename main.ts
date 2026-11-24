import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word grandma would text about AI.
// Grandma meant to type ROBOT, but her finger slipped one key over:
// on a keyboard U sits right next to O, so ROBOT came out ROBUT.
const WORD = "ROBUT";

// Guard: the gate wants one word, 1-30 characters, not only whitespace.
if (!WORD || !WORD.trim() || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
