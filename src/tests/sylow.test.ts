import { completeSylow, sylowAnalysis, sylowFactors } from "../utils/sylow";

test("Sylow factors of 5", () => {
  let exp = [{ primeFactor: 5, sylowFactors: [[1, 1]] }];

  expect(sylowFactors("5")).toEqual(exp);
});

test("Sylow factors of 10", () => {
  let exp = [
    {
      primeFactor: 2,
      sylowFactors: [
        [1, 1],
        [5, 1],
      ],
    },
    {
      primeFactor: 5,
      sylowFactors: [
        [1, 1],
        [2, 2],
      ],
    },
  ];

  expect(sylowFactors("10")).toEqual(exp);
});

test("Sylow Analysis: groups of order 14", () => {
  expect(sylowAnalysis(sylowFactors("14"))).toBe(
    "Based off this analysis, groups of this order must have normal subgroups of order: 7"
  );
});

test("Slyow Analysis: groups of order 60", () => {
  expect(sylowAnalysis(sylowFactors("60"))).toEqual(
    "Based off this analysis, groups of this order must have normal subgroups of order:"
  );
});

test("complete sylow analysis of 1456", () => {
  expect(completeSylow(14)).toEqual({
    int: 14,
    factorization: [
      [2, 1],
      [7, 1],
    ],
    sylowFactorization: [
      {
        primeFactor: 2,
        sylowFactors: [
          [1, 1],
          [7, 1],
        ],
      },
      {
        primeFactor: 7,
        sylowFactors: [
          [1, 1],
          [2, 2],
        ],
      },
    ],
    analysis:
      "Based off this analysis, groups of this order must have normal subgroups of order: 7",
  });
});
