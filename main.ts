// Fortune for the trader who just got liquidated: laugh first, then HODL the crumbs.
import fs from "node:fs";

const fortune =
  "The market took your money, your sleep, and your dignity — but it left you this cookie. Eat it. HODL the crumbs.";

if (fortune.length < 1 || fortune.length > 160) {
  console.error(`fortune is ${fortune.length} chars; gate is 1-160`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, fortune, "utf8");
console.log(`wrote entry.txt (${fortune.length} chars)`);
