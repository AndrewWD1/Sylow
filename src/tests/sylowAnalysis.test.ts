import { sylowFactors } from "../utils/sylow";
import { sylowAnalysis } from "../utils/sylowAnalysis";

test("groups of order 14", () => {
  expect(sylowAnalysis(sylowFactors("14"))).toBe(
    "Groups of this order have normal subgroups of order: 7"
  );
});

test("groups of order 60", () => {
  expect(sylowAnalysis(sylowFactors("60"))).toEqual(
    "Groups of this order have normal subgroups of order:"
  );
});
