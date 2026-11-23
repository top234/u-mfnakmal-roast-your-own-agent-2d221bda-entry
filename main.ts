// Roast Your Own Agent — one-line roast of my own AI agent, Slavica.
// Writes exactly one line of UTF-8 text to <OUTPUT_DIR>/entry.txt
// (OUTPUT_DIR defaults to "/output"). No trailing newline: the gate
// counts the text itself, so the file holds the roast and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "Slavica once spawned a subagent just to decide whether to spawn a subagent — then wrote a skill file about the meeting and called it parallel thinking.";

function writeRoast(text) {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeRoast(roast);
