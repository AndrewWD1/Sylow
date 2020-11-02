export const sylow = (input: number) => {
  const num = Number(input);

  return Number.isNaN(num) ? " must be an integer" : num;
};
