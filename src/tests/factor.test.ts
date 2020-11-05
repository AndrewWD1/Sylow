import { factor } from "../utils/factor";

test("factor 5", () => {
  expect(factor(5)).toEqual([[5, 1]]);
});

test("factor 6", () => {
  expect(factor(6)).toEqual([
    [2, 1],
    [3, 1],
  ]);
});

test("factor 10", () => {
  expect(factor(10)).toEqual([
    [2, 1],
    [5, 1],
  ]);
});

test("factor 100", () => {
  expect(factor(100)).toEqual([
    [2, 2],
    [5, 2],
  ]);
});

test("factor 9555", () => {
  expect(factor(9555)).toEqual([
    [3, 1],
    [5, 1],
    [7, 2],
    [13, 1],
  ]);
});
