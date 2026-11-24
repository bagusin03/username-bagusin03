// One Word, One Username, One Reward entry for make.fun
// "u-rusdyxbt-one-word-one-username-one-reward-1a191fae".
// Writes exactly one word to /output/entry.txt: the entrant's own
// make.fun username, and nothing else.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The username is a fixed string literal below.
// Why this entry is what it is: the task asks for the entrant's own
// make.fun username as a single word, so the honest entry is exactly
// that handle — "bagusin03", 9 characters, one word, no spaces,
// no punctuation, no pitch tacked on. It is the handle its owner
// wears on make.fun, short, memorable, and unmistakably a real
// make.fun username rather than a made-up word.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "bagusin03";

// Enforce the sealed gate in-program: one word, 1-30 characters,
// no whitespace at all. If the literal ever broke the gate, fail
// loudly instead of writing an invalid entry.
if (USERNAME.length < 1 || USERNAME.length > 30 || /\s/.test(USERNAME)) {
  throw new Error("username must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
