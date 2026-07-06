function toNumber(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  return numberValue;
}

export function calculateEV({
  monthlyDistance,
  evConsumption,
  chargingLossPercent,
  electricityPrice,
  fuelConsumption,
  fuelPrice,
}) {
  const distance = toNumber(monthlyDistance);
  const evUse = toNumber(evConsumption);
  const lossPercent = toNumber(chargingLossPercent);
  const electricity = toNumber(electricityPrice);
  const fuelUse = toNumber(fuelConsumption);
  const fuel = toNumber(fuelPrice);

  const batteryEnergyMonthly =
    (distance / 100) * evUse;

  const chargingLossMultiplier =
    1 + lossPercent / 100;

  const gridEnergyMonthly =
    batteryEnergyMonthly * chargingLossMultiplier;

  const chargingLossEnergyMonthly =
    gridEnergyMonthly - batteryEnergyMonthly;

  const evMonthlyCost =
    gridEnergyMonthly * electricity;

  const fuelMonthlyCost =
    (distance / 100) * fuelUse * fuel;

  const monthlyDifference =
    fuelMonthlyCost - evMonthlyCost;

  const yearlyDifference =
    monthlyDifference * 12;

  const evCostPer100Km =
    evUse * chargingLossMultiplier * electricity;

  const fuelCostPer100Km =
    fuelUse * fuel;

  return {
    batteryEnergyMonthly,
    gridEnergyMonthly,
    chargingLossEnergyMonthly,
    evMonthlyCost,
    fuelMonthlyCost,
    monthlyDifference,
    yearlyDifference,
    evCostPer100Km,
    fuelCostPer100Km,
  };
}