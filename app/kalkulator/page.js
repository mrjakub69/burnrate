"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";
import ResultSummary from "@/app/components/calculators/ResultSummary";

import { calculateCarCost } from "@/app/lib/calculators/carCost";
import { formatPLN } from "@/app/lib/formatters";

function getBiggestOperatingCost(result) {
  const costs = [
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

  return costs.reduce((biggest, current) => {
    if (current.value > biggest.value) {
      return current;
    }

    return biggest;
  });
}

export default function CarCostPage() {
  const [monthlyDistance, setMonthlyDistance] = useState(1500);
  const [fuelConsumption, setFuelConsumption] = useState(7);
  const [fuelPrice, setFuelPrice] = useState(6.7);

  const [yearlyInsurance, setYearlyInsurance] = useState(1200);
  const [yearlyService, setYearlyService] = useState(1800);
  const [yearlyRepairs, setYearlyRepairs] = useState(1200);

  const [purchasePrice, setPurchasePrice] = useState(40000);
  const [resaleValue, setResaleValue] = useState(28000);
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

  const biggestOperatingCost = getBiggestOperatingCost(result);

  return (
    <CalculatorLayout
      title="Kalkulator kosztu utrzymania auta"
      description="Oblicz miesięczne i roczne koszty użytkowania samochodu. Utrata wartości auta jest pokazana osobno jako koszt ekonomiczny."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">
          Dane użytkowania
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
            Koszty roczne
          </h2>

          <div className="space-y-6">
            <CalculatorInput
              label="OC rocznie"
              value={yearlyInsurance}
              setValue={setYearlyInsurance}
              step="0.01"
              suffix="zł"
            />

            <CalculatorInput
              label="Serwis rocznie"
              value={yearlyService}
              setValue={setYearlyService}
              step="0.01"
              suffix="zł"
            />

            <CalculatorInput
              label="Naprawy rocznie"
              value={yearlyRepairs}
              setValue={setYearlyRepairs}
              step="0.01"
              suffix="zł"
            />
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-3">
            Utrata wartości
          </h2>

          <p className="text-slate-500 text-sm leading-6 mb-6">
            Ta część nie jest bieżącym wydatkiem z portfela, ale pokazuje,
            ile auto traci na wartości w czasie posiadania.
          </p>

          <div className="space-y-6">
            <CalculatorInput
              label="Cena zakupu auta"
              value={purchasePrice}
              setValue={setPurchasePrice}
              step="0.01"
              suffix="zł"
            />

            <CalculatorInput
              label="Szacowana cena sprzedaży"
              value={resaleValue}
              setValue={setResaleValue}
              step="0.01"
              suffix="zł"
            />

            <CalculatorInput
              label="Okres posiadania"
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
          value={formatPLN(result.monthlyOperatingCost)}
          description="To suma paliwa, OC, serwisu i napraw. Utrata wartości auta jest pokazana niżej osobno."
        />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Średni koszt roczny
            </p>

            <p className="text-2xl font-bold">
              {formatPLN(result.yearlyOperatingCost)}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Koszt 1 km
            </p>

            <p className="text-2xl font-bold">
              {formatPLN(result.operatingCostPerKm)}
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Największy bieżący koszt
          </p>

          <p className="text-2xl font-bold text-cyan-400">
            {biggestOperatingCost.label}
          </p>

          <p className="text-slate-400 mt-3 leading-7">
            Ten element ma największy udział w miesięcznych kosztach
            użytkowania auta.
          </p>
        </div>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Paliwo miesięcznie"
            value={formatPLN(result.monthlyFuelCost)}
          />

          <ResultRow
            label="OC miesięcznie"
            value={formatPLN(result.monthlyInsurance)}
          />

          <ResultRow
            label="Serwis miesięcznie"
            value={formatPLN(result.monthlyService)}
          />

          <ResultRow
            label="Naprawy miesięcznie"
            value={formatPLN(result.monthlyRepairs)}
          />
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Szacowana utrata wartości
          </p>

          <p className="text-2xl font-bold text-cyan-400 mb-3">
            {formatPLN(result.totalDepreciation)}
          </p>

          <p className="text-slate-400 leading-7">
            Przy tych danych auto traci średnio{" "}
            <span className="text-white font-semibold">
              {formatPLN(result.monthlyDepreciation)}
            </span>{" "}
            miesięcznie na wartości.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Pełny koszt ekonomiczny
          </p>

          <p className="text-2xl font-bold text-cyan-400 mb-3">
            {formatPLN(result.economicMonthlyCost)}
          </p>

          <p className="text-slate-400 leading-7">
            To koszt użytkowania auta razem z utratą wartości. Jest przydatny,
            gdy chcesz policzyć, ile auto naprawdę kosztuje w dłuższym czasie.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}