import { divisors } from "./divisors";
import { factor } from "./factor";

export interface ISylowFactors {
  primeFactor: number;
  sylowFactors: number[][];
}

const divisorAnalysis = (prime: number, remaining: number) =>
  divisors(remaining).map((x) => [x, x % prime]);

export const sylowFactors: (input: string) => ISylowFactors[] | string = (
  input
) => {
  if (input.includes(".")) return "must be an integer";

  const num = Number(input);

  let sylowed = factor(num).map((x) => ({
    primeFactor: x[0],
    sylowFactors: divisorAnalysis(x[0], num / x[0] ** x[1]),
  }));

  return Number.isNaN(num) ? "must be an integer" : sylowed;
};
