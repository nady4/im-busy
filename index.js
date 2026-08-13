import { parseFlags } from "./args.js";
import { askNumber, askYesNo, askHours } from "./prompts.js";
import { createDatePicker } from "./dates.js";
import { generateCommits } from "./git.js";

const flags = parseFlags();

let count = flags.count ?? null;
let includeWeekends = flags["include-weekends"] ?? false;
let hours = flags.hours ?? null;
let intensity = flags.intensity ?? null;

count = await askNumber("How many commits?", count ?? 100);
includeWeekends = await askYesNo("Include weekends?", includeWeekends);
hours = await askHours("Commit hours range?", hours ?? [9, 18]);
intensity = await askNumber("Max commits per day?", intensity ?? 3);

const pickDate = createDatePicker({ includeWeekends, hours, intensity });

console.log(
  `\nCommits: ${count} | Weekends: ${includeWeekends ? "yes" : "no"} | Hours: ${hours.join("-")} | Max per day: ${intensity}`
);
const confirmed = await askYesNo("Start?", true);

if (confirmed) generateCommits(count, pickDate);
else console.log("Aborted.");
