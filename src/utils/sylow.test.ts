import { sylow } from "../utils/sylow";

test("Sylow of 5", () => {
  let exp = [[5, [[1, 1]]]];

  expect(sylow("5")).toEqual(exp);
});

test("Sylow of 10", () => {
  let exp = [
    [
      2,
      [
        [1, 1],
        [5, 1],
      ],
    ],
    [
      5,
      [
        [1, 1],
        [2, 2],
      ],
    ],
  ];

  expect(sylow("10")).toEqual(exp);
});
