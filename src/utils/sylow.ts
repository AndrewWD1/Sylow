export const sylow = (input: string) => {
  if (input.includes(".")) return "must be an inte";

  const num = Number(input);

  return Number.isNaN(num) ? " must be an integer" : num;
};
