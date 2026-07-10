export function formatPLN(value) {
  const numberValue = Number(value);

  const safeValue = Number.isFinite(numberValue)
    ? numberValue
    : 0;

  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(safeValue);
}