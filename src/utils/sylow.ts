import { divisors } from "./divisors";
import { factor } from "./factor";

export interface ISylowFactors {
  primeFactor: number;
  sylowFactors: number[][];
}

export interface ISylow {
  int: number;
  factorization: [number, number][];
  sylowFactorization: ISylowFactors[] | string;
  analysis: string;
}

const divisorAnalysis = (prime: number, remaining: number) =>
  divisors(remaining).map((x) => [x, x % prime]);

export const sylowAnalysis = (sylowFactorResult: ISylowFactors[] | string) => {
  if (typeof sylowFactorResult === "string") return "";

  const list: number[] = [];

  sylowFactorResult.forEach((x) => {
    for (let factor of x.sylowFactors.slice(1)) {
      if (factor[1] === 1) return false;
    }
    list.push(x.primeFactor);
  });

  return stringifySylowAnalysis(list);
};

const removeTrailingComma = (str: string) => {
  if (str[str.length - 1] === ",") return str.slice(0, str.length - 1);
  return str;
};

const stringifySylowAnalysis = (list: number[]) =>
  removeTrailingComma(
    `Based off this analysis, groups of this order must have normal subgroups of order: ${list.reduce(
      (a, c) => a + c + ", ",
      ""
    )}`.trimEnd()
  );

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

export const completeSylow = (int: number): ISylow => {
  const sylowFactorization = sylowFactors(int.toString());

  return {
    int: int,
    factorization: factor(int),
    sylowFactorization,
    analysis: sylowAnalysis(sylowFactorization),
  };
};
