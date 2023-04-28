import { fizzbuzz } from "./fizzbuzz";
import { NegativeMaxValueError } from "./NegativeMaxValueError";
import { NullMaxValueError } from "./NullMaxValueError";

export function fizzbuzzList(maxValue: number) {
  if (maxValue === 0) {
    throw new NullMaxValueError();
  }
  if (maxValue < 0) {
    throw new NegativeMaxValueError();
  }
  for (let i = 1; i <= maxValue; i++) {
    console.log(fizzbuzz(i));
  }
}
