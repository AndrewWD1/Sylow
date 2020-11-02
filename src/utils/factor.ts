export const factor: (int: number) => [number, number][] = (int) => {
  if (int.toString().includes(".")) return [[NaN, NaN]];
  if (int < 1) return [[NaN, NaN]];

  let i = 2;
  let curr = int;

  let arr: [number, number][] = [];

  while (i <= curr) {
    if (curr % i == 0) {
      if (arr.map((x) => x[0]).includes(i)) {
        arr[arr.findIndex((x) => x[0] === i)][1] += 1;
      } else {
        arr.push([i, 1]);
      }
      curr /= i;
    } else {
      i += 1;
    }
  }

  return arr;
};
