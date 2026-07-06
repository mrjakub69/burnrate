"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";

import { calculateCarCost } from "@/app/lib/calculators/carCost";

export default function CalculatorPage() {
  const [monthlyDistance, setMonthlyDistance] =
    useState(1500);

  const [fuelConsumption, setFuelConsumption] =
    useState(7);

  const [fuelPrice, setFuelPrice] =
    useState(6.7);

  const [yearlyInsurance, setYearlyInsurance] =
    useState(1800);

  const [yearlyService, setYearlyService] =
    useState(2500);

  const [yearlyRepairs, setYearlyRepairs] =
    useState(2000);

  const [purchasePrice, setPurchasePrice] =
    useState(50000);

  const [resaleValue, setResaleValue] =
    useState(35000);

  const [ownershipYears, setOwnershipYears] =
    useState(3);

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

  return (
    <CalculatorLayout
      title="Kalkulator kosztu auta"
      description="Oblicz realny koszt posiadania samochodu: paliwo, OC, serwis, naprawy i utratę wartości."
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
            Koszty roczne
          </h2>

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
          <h2 className="text-2xl font-bold mb-6">
            Utrata wartości
          </h2>

          <div className="space-y-6">
            <CalculatorInput
              label="Cena zakupu auta"
              value={purchasePrice}
              setValue={setPurchasePrice}
              suffix="zł"
            />

            <CalculatorInput
              label="Przewidywana wartość przy sprzedaży"
              value={resaleValue}
              setValue={setResaleValue}
              suffix="zł"
            />

            <CalculatorInput
              label="Okres posiadania auta"
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

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Całkowity koszt miesięczny"
            value={`${result.monthlyTotal.toFixed(0)} zł`}
            strong
          />

          <ResultRow
            label="Całkowity koszt roczny"
            value={`${result.yearlyTotal.toFixed(0)} zł`}
          />

          <ResultRow
            label="Koszt 1 km"
            value={`${result.costPerKm.toFixed(2)} zł`}
          />

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

          <ResultRow
            label="Utrata wartości miesięcznie"
            value={`${result.monthlyDepreciation.toFixed(0)} zł`}
          />

          <ResultRow
            label="Łączna utrata wartości"
            value={`${result.totalDepreciation.toFixed(0)} zł`}
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            Utrata wartości jest liczona jako różnica między ceną zakupu auta
            a przewidywaną wartością przy sprzedaży, podzielona przez okres
            posiadania. Dzięki temu wynik nie jest przypadkową wpisaną kwotą,
            tylko wynika z konkretnych założeń użytkownika.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}