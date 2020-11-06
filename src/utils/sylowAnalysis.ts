import { ISylowFactors } from "./sylow";

const removeTrailingComma = (str: string) => {
  if (str[str.length - 1] === ",") return str.slice(0, str.length - 1);
  return str;
};

const stringifySylowAnalysis = (list: number[]) =>
  removeTrailingComma(
    `Groups of this order have normal subgroups of order: ${list.reduce(
      (a, c) => a + c + ", ",
      ""
    )}`.trimEnd()
  );

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
