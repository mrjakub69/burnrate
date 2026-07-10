function toNumber(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  return numberValue;
}

export function calculateCarCost({
  monthlyDistance,
  fuelConsumption,
  fuelPrice,
  yearlyInsurance,
  yearlyService,
  yearlyRepairs,
  purchasePrice,
  resaleValue,
  ownershipYears,
}) {
  const distance = toNumber(monthlyDistance);
  const consumption = toNumber(fuelConsumption);
  const price = toNumber(fuelPrice);

  const insurance = toNumber(yearlyInsurance);
  const service = toNumber(yearlyService);
  const repairs = toNumber(yearlyRepairs);

  const purchase = toNumber(purchasePrice);
  const resale = toNumber(resaleValue);
  const years = toNumber(ownershipYears);

  const monthlyFuelCost =
    (distance / 100) * consumption * price;

  const yearlyFuelCost =
    monthlyFuelCost * 12;

  const monthlyInsurance =
    insurance / 12;

  const monthlyService =
    service / 12;

  const monthlyRepairs =
    repairs / 12;

  const monthlyOperatingCost =
    monthlyFuelCost +
    monthlyInsurance +
    monthlyService +
    monthlyRepairs;

  const yearlyOperatingCost =
    monthlyOperatingCost * 12;

  const yearlyDistance =
    distance * 12;

  const operatingCostPerKm =
    yearlyDistance > 0
      ? yearlyOperatingCost / yearlyDistance
      : 0;

  const totalDepreciation =
    Math.max(0, purchase - resale);

  const monthlyDepreciation =
    years > 0
      ? totalDepreciation / (years * 12)
      : 0;

  const yearlyDepreciation =
    monthlyDepreciation * 12;

  const economicMonthlyCost =
    monthlyOperatingCost + monthlyDepreciation;

  const economicYearlyCost =
    economicMonthlyCost * 12;

  return {
    monthlyFuelCost,
    yearlyFuelCost,

    monthlyInsurance,
    monthlyService,
    monthlyRepairs,

    monthlyOperatingCost,
    yearlyOperatingCost,
    operatingCostPerKm,

    totalDepreciation,
    monthlyDepreciation,
    yearlyDepreciation,

    economicMonthlyCost,
    economicYearlyCost,
    yearlyDistance,
  };
}