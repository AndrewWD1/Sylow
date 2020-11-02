export const divisors: (int: number) => number[] = (int) => {
  const divisors: number[] = [1];

  for (let i = 2; i < int / 2 + 1; i++) {
    if (int % i === 0) divisors.push(i);
  }

  divisors.push(int);

  return divisors;
};
