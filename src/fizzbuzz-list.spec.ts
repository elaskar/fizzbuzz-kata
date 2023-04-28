import { NegativeMaxValueError } from "./NegativeMaxValueError";
import { NullMaxValueError } from "./NullMaxValueError";
import { fizzbuzzList } from "./fizzbuzzList";

describe("Fizzbuzz list", () => {
  it("should print fizzbuzz from 1 to 5", () => {
    const consoleSpy = jest.spyOn(console, "log");
    fizzbuzzList(5);
    expect(consoleSpy).toBeCalledTimes(5);
    expect(consoleSpy).toHaveBeenCalledWith("1");
    expect(consoleSpy).toHaveBeenCalledWith("2");
    expect(consoleSpy).toHaveBeenCalledWith("Fizz");
    expect(consoleSpy).toHaveBeenCalledWith("4");
    expect(consoleSpy).toHaveBeenCalledWith("Buzz");
  });

  it("should throw if maxValue is zero", () => {
    expect(() => fizzbuzzList(0)).toThrow(NullMaxValueError);
  });
  it("should throw if maxValue is megative", () => {
    expect(() => fizzbuzzList(-3)).toThrow(NegativeMaxValueError);
  });
});
