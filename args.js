import { parseArgs } from "util";
import { parseHours } from "./prompts.js";

const validatePositiveInt = (value, name) => {
  const num = Number(value);
  if (!Number.isInteger(num) || num < 1) {
    throw new Error(`Invalid --${name} value "${value}", expected a positive integer`);
  }
  return num;
};

const validateHours = (value) => {
  const parsed = parseHours(value);
  if (!parsed) throw new Error(`Invalid --hours value "${value}", expected e.g. 9-18`);
  return parsed;
};

export const parseFlags = () => {
  try {
    const flags = parseArgs({
      options: {
        count: { type: "string", short: "n" },
        "include-weekends": { type: "boolean", default: false },
        hours: { type: "string" },
        intensity: { type: "string" },
      },
    }).values;

    return {
      count: flags.count !== undefined ? validatePositiveInt(flags.count, "count") : undefined,
      "include-weekends": flags["include-weekends"],
      hours: flags.hours !== undefined ? validateHours(flags.hours) : undefined,
      intensity: flags.intensity !== undefined ? validatePositiveInt(flags.intensity, "intensity") : undefined,
    };
  } catch (error) {
    console.error(error.message);
    console.error(
      "Usage: node index.js [--count <n>] [--include-weekends] [--hours <start>-<end>] [--intensity <n>]"
    );
    process.exit(1);
  }
};
