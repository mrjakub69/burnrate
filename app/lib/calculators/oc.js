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

function getAgeFactor(age) {
  if (age < 22) return 1.8;
  if (age < 26) return 1.45;
  if (age > 65) return 1.1;

  return 1;
}

function getHistoryFactor(yearsInsured) {
  if (yearsInsured >= 10) return 0.65;
  if (yearsInsured >= 5) return 0.75;
  if (yearsInsured >= 3) return 0.9;
  if (yearsInsured < 1) return 1.25;

  return 1;
}

function getClaimsFactor(claims) {
  return clamp(1 + claims * 0.25, 1, 2);
}

function getCityFactor(citySize) {
  if (citySize === "small") return 0.9;
  if (citySize === "big") return 1.2;

  return 1;
}

function getEngineFactor(engine) {
  if (engine <= 1.2) return 0.9;
  if (engine <= 1.6) return 0.95;
  if (engine <= 2.0) return 1;
  if (engine <= 3.0) return 1.15;

  return 1.25;
}

function getMileageFactor(yearlyMileage) {
  if (yearlyMileage <= 5000) return 0.9;
  if (yearlyMileage <= 15000) return 1;
  if (yearlyMileage <= 30000) return 1.15;

  return 1.3;
}

function getUsageFactor(usageType) {
  if (usageType === "business") return 1.25;

  return 1;
}

export function calculateOC({
  age,
  yearsInsured,
  claims,
  citySize,
  engine,
  yearlyMileage,
  usageType,
}) {
  const basePremium = 1000;

  const driverAge = toNumber(age);
  const insuranceYears = toNumber(yearsInsured);
  const claimCount = toNumber(claims);
  const engineSize = toNumber(engine);
  const mileage = toNumber(yearlyMileage);

  const ageFactor = getAgeFactor(driverAge);
  const historyFactor = getHistoryFactor(insuranceYears);
  const claimsFactor = getClaimsFactor(claimCount);
  const cityFactor = getCityFactor(citySize);
  const engineFactor = getEngineFactor(engineSize);
  const mileageFactor = getMileageFactor(mileage);
  const usageFactor = getUsageFactor(usageType);

  const totalFactor =
    ageFactor *
    historyFactor *
    claimsFactor *
    cityFactor *
    engineFactor *
    mileageFactor *
    usageFactor;

  const yearlyOC = clamp(
    basePremium * totalFactor,
    450,
    6000
  );

  const monthlyOC = yearlyOC / 12;

  let riskLevel = "Średnie";

  if (totalFactor < 0.85) {
    riskLevel = "Niskie";
  }

  if (totalFactor > 1.3) {
    riskLevel = "Wysokie";
  }

  return {
    basePremium,

    ageFactor,
    historyFactor,
    claimsFactor,
    cityFactor,
    engineFactor,
    mileageFactor,
    usageFactor,
    totalFactor,

    yearlyOC,
    monthlyOC,
    riskLevel,
  };
}