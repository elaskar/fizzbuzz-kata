#!/usr/bin/env node

import { fizzbuzzList } from "./src/fizzbuzzList";

function main() {
  if (process.argv.length < 4) {
    console.error("missing arguments");
    help();
    process.exit(1);
  }
  if (process.argv.length > 4) {
    console.error("too much arguments");
    help();
    process.exit(1);
  }
  if (process.argv[2] !== "fizzbuzz") {
    console.error("incorrect function name");
    help();
    process.exit(1);
  }
  const maxValue = Number(process.argv[3]);
  if (Number.isNaN(maxValue)) {
    console.error("Upper bound is not a number");
    help();
    process.exit(1);
  }
  try {
    fizzbuzzList(Number(maxValue));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
main();

function help() {
  console.log("## Program should be used by running : ");
  console.log("## npm exec fizzbuzz <upperBound>");
  console.log("## Upper bound should be a positive integer");
}
