import { Hash } from "../../utils/classes/Hash";

test("Hash Class test", () => {
  var h = new Hash<number, number>();

  h.set(1, 1);
  h.set(2, 3);
  h.set(5, 6);

  expect(h.toArray()).toEqual([
    [1, 1],
    [2, 3],
    [5, 6],
  ]);
});
