function toNumber(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  return numberValue;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function calculateScore(car) {
  const monthlyCost = toNumber(car?.totalMonthlyCost);
  const fuelConsumption = toNumber(car?.fuelConsumption);
  const reliability = toNumber(car?.reliability);

  let costScore = 50;

  if (monthlyCost > 0) {
    costScore = 100 - monthlyCost / 20;
  }

  let fuelScore = 50;

  if (fuelConsumption > 0) {
    fuelScore = 100 - fuelConsumption * 8;
  }

  const reliabilityScore =
    reliability > 0
      ? reliability * 10
      : 50;

  const finalScore =
    costScore * 0.45 +
    reliabilityScore * 0.35 +
    fuelScore * 0.2;

  return Math.round(
    clamp(finalScore, 0, 100)
  );
}