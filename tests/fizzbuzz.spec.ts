import { fizzbuzz } from "../src/fizzbuzz";

describe("Fizzbuzz", () => {
  it("should return the number if not divisible by 3 or 5", () => {
    const result = fizzbuzz(1);
    expect(result).toBe("1");
  });

  it("should return Fizz if number is divisible by 3", () => {
    const result = fizzbuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if number is divisible by 5", () => {
    const result = fizzbuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return Fizzbuzz if number is divisible by 3 and 5", () => {
    const result = fizzbuzz(15);
    expect(result).toBe("Fizzbuzz");
  });
});
