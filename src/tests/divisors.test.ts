import { divisors } from "../utils/divisors";

test("divisors of 12", () => {
  expect(divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

test("divisors of 6", () => {
  expect(divisors(6)).toEqual([1, 2, 3, 6]);
});

test("divisors of 1", () => {
  expect(divisors(1)).toEqual([1]);
});

test("divisors of 13", () => {
  expect(divisors(13)).toEqual([1, 13]);
});
