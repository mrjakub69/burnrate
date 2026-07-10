"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";
import ResultSummary from "@/app/components/calculators/ResultSummary";

import { calculateCarCost } from "@/app/lib/calculators/carCost";

function getCostComment(monthlyOperatingCost) {
  if (monthlyOperatingCost < 1000) {
    return "To niski miesięczny koszt użytkowania auta.";
  }

  if (monthlyOperatingCost <= 2000) {
    return "To typowy miesięczny koszt użytkowania samochodu.";
  }

  return "To wysoki miesięczny koszt użytkowania auta.";
}

export default function CalculatorPage() {
  const [monthlyDistance, setMonthlyDistance] = useState(1500);
  const [fuelConsumption, setFuelConsumption] = useState(7);
  const [fuelPrice, setFuelPrice] = useState(6.7);

  const [yearlyInsurance, setYearlyInsurance] = useState(1800);
  const [yearlyService, setYearlyService] = useState(2500);
  const [yearlyRepairs, setYearlyRepairs] = useState(2000);

  const [purchasePrice, setPurchasePrice] = useState(50000);
  const [resaleValue, setResaleValue] = useState(35000);
  const [ownershipYears, setOwnershipYears] = useState(3);

  const result = calculateCarCost({
    monthlyDistance,
    fuelConsumption,
    fuelPrice,
    yearlyInsurance,
    yearlyService,
    yearlyRepairs,
    purchasePrice,
    resaleValue,
    ownershipYears,
  });

  const costParts = [
    {
      label: "Paliwo",
      value: result.monthlyFuelCost,
    },
    {
      label: "OC",
      value: result.monthlyInsurance,
    },
    {
      label: "Serwis",
      value: result.monthlyService,
    },
    {
      label: "Naprawy",
      value: result.monthlyRepairs,
    },
  ];

  const biggestCost = costParts.reduce((highest, current) =>
    current.value > highest.value ? current : highest
  );

  return (
    <CalculatorLayout
      title="Kalkulator kosztu auta"
      description="Oblicz średni koszt użytkowania samochodu: paliwo, OC, serwis i naprawy. Utrata wartości jest pokazana osobno jako koszt ekonomiczny."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">
          Dane eksploatacyjne
        </h2>

        <CalculatorInput
          label="Przebieg miesięczny"
          value={monthlyDistance}
          setValue={setMonthlyDistance}
          suffix="km"
        />

        <CalculatorInput
          label="Spalanie"
          value={fuelConsumption}
          setValue={setFuelConsumption}
          step="0.1"
          suffix="l/100 km"
        />

        <CalculatorInput
          label="Cena paliwa"
          value={fuelPrice}
          setValue={setFuelPrice}
          step="0.01"
          suffix="zł/l"
        />

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Roczne wydatki na auto
          </h2>

          <p className="text-slate-500 text-sm leading-6 mb-6">
            Te koszty oznaczają pieniądze, które kierowca średnio wydaje
            na samochód w ciągu roku: OC, serwis i naprawy.
          </p>

          <div className="space-y-6">
            <CalculatorInput
              label="OC rocznie"
              value={yearlyInsurance}
              setValue={setYearlyInsurance}
              suffix="zł"
            />

            <CalculatorInput
              label="Serwis rocznie"
              value={yearlyService}
              setValue={setYearlyService}
              suffix="zł"
            />

            <CalculatorInput
              label="Naprawy rocznie"
              value={yearlyRepairs}
              setValue={setYearlyRepairs}
              suffix="zł"
            />
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-3">
            Szacowana utrata wartości
          </h2>

          <p className="text-slate-500 text-sm leading-6 mb-6">
            Te dane nie są doliczane do rocznych wydatków na auto.
            Pokazują osobno, ile samochód może stracić na wartości przez
            okres posiadania.
          </p>

          <div className="space-y-6">
            <CalculatorInput
              label="Za ile kupujesz auto?"
              value={purchasePrice}
              setValue={setPurchasePrice}
              suffix="zł"
            />

            <CalculatorInput
              label="Za ile planujesz je sprzedać?"
              value={resaleValue}
              setValue={setResaleValue}
              suffix="zł"
            />

            <CalculatorInput
              label="Ile lat będziesz je mieć?"
              value={ownershipYears}
              setValue={setOwnershipYears}
              min={1}
              suffix="lat"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          Wynik
        </h2>

        <ResultSummary
          label="Średni miesięczny koszt użytkowania"
          value={`${result.monthlyOperatingCost.toFixed(0)} zł`}
          description={getCostComment(result.monthlyOperatingCost)}
        />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Średni koszt roczny
            </p>

            <p className="text-2xl font-bold">
              {result.yearlyOperatingCost.toFixed(0)} zł
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Koszt 1 km
            </p>

            <p className="text-2xl font-bold">
              {result.operatingCostPerKm.toFixed(2)} zł
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Największy bieżący koszt
          </p>

          <p className="text-2xl font-bold text-cyan-400">
            {biggestCost.label} — {biggestCost.value.toFixed(0)} zł miesięcznie
          </p>
        </div>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Paliwo miesięcznie"
            value={`${result.monthlyFuelCost.toFixed(0)} zł`}
          />

          <ResultRow
            label="OC miesięcznie"
            value={`${result.monthlyInsurance.toFixed(0)} zł`}
          />

          <ResultRow
            label="Serwis miesięcznie"
            value={`${result.monthlyService.toFixed(0)} zł`}
          />

          <ResultRow
            label="Naprawy miesięcznie"
            value={`${result.monthlyRepairs.toFixed(0)} zł`}
          />
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Szacowana utrata wartości
          </p>

          <p className="text-2xl font-bold text-cyan-400 mb-3">
            {result.totalDepreciation.toFixed(0)} zł przez {ownershipYears} lat
          </p>

          <p className="text-slate-400 leading-7">
            To oznacza około {result.monthlyDepreciation.toFixed(0)} zł
            miesięcznie kosztu ekonomicznego. Nie jest to jednak bieżący
            wydatek taki jak paliwo, OC, serwis albo naprawy.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Pełny koszt ekonomiczny
          </p>

          <p className="text-2xl font-bold mb-3">
            {result.economicMonthlyCost.toFixed(0)} zł miesięcznie
          </p>

          <p className="text-slate-400 leading-7">
            To suma bieżących wydatków oraz szacowanej utraty wartości.
            Ten wynik pokazuje pełniejszy obraz kosztu posiadania auta,
            ale nie oznacza, że tyle pieniędzy trzeba faktycznie wydać
            każdego miesiąca.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}