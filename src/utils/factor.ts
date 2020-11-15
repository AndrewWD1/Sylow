import { Hash } from "./classes/Hash";

export const factor: (int: number) => [number, number][] = (int) => {
  if (int.toString().includes(".")) return [[NaN, NaN]];
  if (int < 1) return [[NaN, NaN]];

  let i = 2;
  let curr = int;

  let hash = new Hash<number, number>();

  while (i <= curr) {
    if (curr % i === 0) {
      if (hash.has(i)) {
        hash.set(i, (hash.get(i) as any) + 1);
      } else {
        hash.set(i, 1);
      }
      curr /= i;
    } else {
      i += 1;
    }
  }

  return hash.toArray();
};
