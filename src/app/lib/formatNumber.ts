export const formatNumber = (
  number: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(number);
};
