export function fizzbuzz(n: number): string {
  if (n % 15 === 0) {
    return "Fizzbuzz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  return n.toString();
}
