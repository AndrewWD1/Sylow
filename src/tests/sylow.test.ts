import { sylowFactors } from "../utils/sylow";

test("Sylow of 5", () => {
  let exp = [{ primeFactor: 5, sylowFactors: [[1, 1]] }];

  expect(sylowFactors("5")).toEqual(exp);
});

test("Sylow of 10", () => {
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
