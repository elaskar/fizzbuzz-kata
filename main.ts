#!/usr/bin/env node

import { Command } from "commander";
import { IllegalArgumentError } from "./src/IllegalArgumentError";
import { fizzbuzzList } from "./src/fizzbuzzList";

const program = new Command();

program
  .version("1.0.0")
  .description("Fizzbuzz")
  .addCommand(
    new Command("fizzbuzz")
      .argument("<maxValue>", "fizzbuzz upper bound")
      .action(async (upperBound) => {
        if (Number.isNaN(upperBound)) {
          throw new IllegalArgumentError("Upper bound is not a number");
        }
        try {
          fizzbuzzList(Number(upperBound));
        } catch (err) {
          console.error(err);
          process.exit(1);
        }
      })
  );

async function main() {
  await program.parseAsync();
}

main();
