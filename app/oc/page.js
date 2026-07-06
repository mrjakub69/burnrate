"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";

import { calculateOC } from "@/app/lib/calculators/oc";

export default function OCPage() {
  const [age, setAge] =
    useState(30);

  const [yearsInsured, setYearsInsured] =
    useState(5);

  const [claims, setClaims] =
    useState(0);

  const [city, setCity] =
    useState("medium");

  const [engine, setEngine] =
    useState(2.0);

  const result = calculateOC({
    age,
    yearsInsured,
    claims,
    city,
    engine,
  });

  return (
    <CalculatorLayout
      title="Kalkulator OC"
      description="Oszacuj orientacyjną składkę OC na podstawie wieku, historii ubezpieczenia, szkód i parametrów auta."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <CalculatorInput
          label="Wiek kierowcy"
          value={age}
          setValue={setAge}
        />

        <CalculatorInput
          label="Lata opłacania OC"
          value={yearsInsured}
          setValue={setYearsInsured}
        />

        <CalculatorInput
          label="Liczba szkód w ostatnich latach"
          value={claims}
          setValue={setClaims}
        />

        <CalculatorInput
          label="Pojemność silnika (l)"
          value={engine}
          setValue={setEngine}
          step="0.1"
        />

        <div>
          <label className="block text-slate-400 mb-2">
            Wielkość miasta
          </label>

          <select
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          >
            <option value="small">
              Małe miasto / wieś
            </option>

            <option value="medium">
              Średnie miasto
            </option>

            <option value="big">
              Duże miasto
            </option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          Szacunkowa składka
        </h2>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="OC miesięcznie"
            value={`${result.monthlyOC.toFixed(0)} zł`}
            strong
          />

          <ResultRow
            label="OC rocznie"
            value={`${result.yearlyOC.toFixed(0)} zł`}
          />

          <ResultRow
            label="Poziom ryzyka"
            value={result.riskLevel}
          />

          <ResultRow
            label="Mnożnik składki"
            value={`${result.multiplier.toFixed(2)}x`}
          />

          <ResultRow
            label="Lata opłacania OC"
            value={`${yearsInsured} lat`}
          />

          <ResultRow
            label="Szkody"
            value={`${claims}`}
          />
        </div>

        <p className="text-slate-500 mt-8 leading-7">
          Wynik jest orientacyjny. Rzeczywista składka zależy od konkretnego
          ubezpieczyciela, historii kierowcy, miejsca zamieszkania, auta oraz
          aktualnych taryf.
        </p>
      </div>
    </CalculatorLayout>
  );
}