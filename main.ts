import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line one-star review from a house cat about its human:
// the human stares at his laptop all day yet calls the cat needy, so the
// cat sits on the keyboard and "fixes" his email. Specific complaint
// (laptop keyboard, named in the judge's brief), unmistakably feline
// (the human is judged by cat standards), deadpan review shape, and the
// sting lands in the last few words.
const TEXT =
  "One star. My human stares at his laptop all day, then calls me needy. I sat on the keyboard and fixed his email.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
