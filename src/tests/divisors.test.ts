import { divisors } from "../utils/divisors";

test("divisors of 12", () => {
  expect(divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
});
