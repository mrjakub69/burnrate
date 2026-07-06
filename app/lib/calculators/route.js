function toNumber(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  return numberValue;
}

export function calculateRouteCost({
  distanceOneWay,
  isRoundTrip,
  fuelConsumption,
  fuelPrice,
  passengers,
  additionalCosts,
}) {
  const distance = toNumber(distanceOneWay);
  const consumption = toNumber(fuelConsumption);
  const price = toNumber(fuelPrice);
  const people = Math.max(1, toNumber(passengers));
  const extras = toNumber(additionalCosts);

  const tripMultiplier = isRoundTrip ? 2 : 1;

  const totalDistance =
    distance * tripMultiplier;

  const fuelCost =
    (totalDistance / 100) *
    consumption *
    price;

  const totalCost =
    fuelCost + extras;

  const costPerPerson =
    totalCost / people;

  const fuelCostPer100Km =
    consumption * price;

  const totalCostPerKm =
    totalDistance > 0
      ? totalCost / totalDistance
      : 0;

  return {
    totalDistance,
    fuelCost,
    additionalCosts: extras,
    totalCost,
    costPerPerson,
    fuelCostPer100Km,
    totalCostPerKm,
  };
}