import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, spoken in the elevator's own voice. No trailing newline.
const line = "Pressing all the buttons doesn't make me faster, it just makes me judge you on every floor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
