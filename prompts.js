import { createInterface } from "readline";

const lineQueue = [];
const lineWaiters = [];
const EOF = Symbol("EOF");
const rl = createInterface({ input: process.stdin });
rl.on("line", (line) => {
  const waiter = lineWaiters.shift();
  if (waiter) waiter(line);
  else lineQueue.push(line);
});
rl.on("close", () => {
  while (lineWaiters.length) lineWaiters.shift()(EOF);
});

const nextLine = () =>
  new Promise((resolve) => {
    if (lineQueue.length) resolve(lineQueue.shift());
    else lineWaiters.push(resolve);
  });

const ask = async (question, fallback) => {
  while (true) {
    process.stdout.write(`${question} [${fallback}]: `);
    const value = await nextLine();
    if (value === EOF) {
      console.log();
      process.exit(0);
    }
    const trimmed = value.trim();
    if (trimmed === "") return fallback;
    return trimmed;
  }
};

export const parseHours = (value) => {
  const match = /^(\d{1,2})-(\d{1,2})$/.exec(value);
  const start = match ? Number(match[1]) : NaN;
  const end = match ? Number(match[2]) : NaN;
  if (isNaN(start) || isNaN(end) || start < 0 || end > 23 || start >= end) return null;
  return [start, end];
};

export const askNumber = async (question, fallback) => {
  while (true) {
    const answer = await ask(question, fallback);
    const num = Number(answer);
    if (Number.isInteger(num) && num >= 1) return num;
    console.log(`  Invalid input, expected a positive integer.`);
  }
};

export const askYesNo = async (question, fallback) => {
  while (true) {
    const answer = (await ask(question, fallback ? "y" : "n")).toLowerCase();
    if (answer === "y" || answer === "yes") return true;
    if (answer === "n" || answer === "no") return false;
    console.log(`  Invalid input, expected y/n.`);
  }
};

export const askHours = async (question, fallback) => {
  while (true) {
    const answer = await ask(question, fallback.join("-"));
    const parsed = parseHours(answer);
    if (parsed) return parsed;
    console.log(`  Invalid input, expected e.g. 9-18.`);
  }
};
