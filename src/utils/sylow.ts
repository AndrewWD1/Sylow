import { divisors } from "./divisors";
import { factor } from "./factor";

const sylowAnalysis = (prime: number, remaining: number) =>
  divisors(remaining).map((x) => [x, x % prime]);

export const sylow = (input: string) => {
  if (input.includes(".")) return "must be an integer";

  const num = Number(input);

  let sylowed = factor(num).map((x) => [x[0], sylowAnalysis(x[0], num / x[0])]);

  return Number.isNaN(num) ? " must be an integer" : sylowed;
};
