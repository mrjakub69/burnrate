export function calculateOC({
  age,
  yearsInsured,
  claims,
  city,
  engine,
}) {
  const baseOC = 1800;

  let multiplier = 1;

  if (age < 26) {
    multiplier += 0.4;
  }

  if (age > 60) {
    multiplier += 0.1;
  }

  if (yearsInsured >= 10) {
    multiplier -= 0.45;
  } else if (yearsInsured >= 5) {
    multiplier -= 0.3;
  } else if (yearsInsured >= 3) {
    multiplier -= 0.15;
  } else if (yearsInsured < 1) {
    multiplier += 0.25;
  }

  multiplier += claims * 0.25;

  if (city === "big") {
    multiplier += 0.2;
  }

  if (city === "small") {
    multiplier -= 0.1;
  }

  if (engine >= 3.0) {
    multiplier += 0.15;
  }

  if (engine <= 1.2) {
    multiplier -= 0.1;
  }

  const yearlyOC = Math.max(
    500,
    baseOC * multiplier
  );

  const monthlyOC =
    yearlyOC / 12;

  let riskLevel = "Średnie";

  if (multiplier <= 0.8) {
    riskLevel = "Niskie";
  }

  if (multiplier >= 1.3) {
    riskLevel = "Wysokie";
  }

  return {
    yearlyOC,
    monthlyOC,
    multiplier,
    riskLevel,
  };
}