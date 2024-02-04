export const getValue = (value: string | undefined | null) => {
  return !value ? "-" : value;
};
