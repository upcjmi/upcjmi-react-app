export const dateFormatter = (str: string) => {
  const date = new Date(str);
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
};
