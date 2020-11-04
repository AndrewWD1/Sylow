import { divisors } from "./divisors";
import { factor } from "./factor";

export interface ISylowResult {
  primeFactor: number;
  sylowAnalysis: number[][];
}

const sylowAnalysis = (prime: number, remaining: number) =>
  divisors(remaining).map((x) => [x, x % prime]);

export const sylow: (input: string) => ISylowResult[] | string = (input) => {
  if (input.includes(".")) return "must be an integer";

  const num = Number(input);

  let sylowed = factor(num).map((x) => ({
    primeFactor: x[0],
    sylowAnalysis: sylowAnalysis(x[0], num / x[0] ** x[1]),
  }));

  return Number.isNaN(num) ? "must be an integer" : sylowed;
};
