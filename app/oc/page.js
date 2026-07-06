"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";

import { calculateOC } from "@/app/lib/calculators/oc";

export default function OCPage() {
  const [age, setAge] = useState(30);
  const [yearsInsured, setYearsInsured] = useState(5);
  const [claims, setClaims] = useState(0);
  const [citySize, setCitySize] = useState("medium");
  const [engine, setEngine] = useState(1.8);
  const [yearlyMileage, setYearlyMileage] = useState(15000);
  const [usageType, setUsageType] = useState("private");

  const result = calculateOC({
    age,
    yearsInsured,
    claims,
    citySize,
    engine,
    yearlyMileage,
    usageType,
  });

  return (
    <CalculatorLayout
      title="Kalkulator OC"
      description="Oszacuj orientacyjną składkę OC na podstawie wieku kierowcy, historii ubezpieczenia, szkód, miasta i parametrów auta."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">
          Kierowca
        </h2>

        <CalculatorInput
          label="Wiek kierowcy"
          value={age}
          setValue={setAge}
          min={18}
          max={99}
          suffix="lat"
        />

        <CalculatorInput
          label="Lata historii OC"
          value={yearsInsured}
          setValue={setYearsInsured}
          min={0}
          max={60}
          suffix="lat"
        />

        <CalculatorInput
          label="Liczba szkód"
          value={claims}
          setValue={setClaims}
          min={0}
          max={10}
          suffix="szt."
        />

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Auto i użytkowanie
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2">
                Wielkość miasta
              </label>

              <select
                value={citySize}
                onChange={(e) => setCitySize(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
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

            <CalculatorInput
              label="Pojemność silnika"
              value={engine}
              setValue={setEngine}
              step="0.1"
              min={0.6}
              max={8}
              suffix="l"
            />

            <CalculatorInput
              label="Roczny przebieg"
              value={yearlyMileage}
              setValue={setYearlyMileage}
              step="500"
              min={0}
              max={100000}
              suffix="km"
            />

            <div>
              <label className="block text-slate-400 mb-2">
                Sposób użytkowania
              </label>

              <select
                value={usageType}
                onChange={(e) => setUsageType(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
              >
                <option value="private">
                  Prywatnie
                </option>

                <option value="business">
                  Firmowo / intensywnie
                </option>
              </select>
            </div>
          </div>
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
            label="Składka bazowa"
            value={`${result.basePremium.toFixed(0)} zł`}
          />

          <ResultRow
            label="Wiek kierowcy"
            value={`${result.ageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Historia OC"
            value={`${result.historyFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Szkody"
            value={`${result.claimsFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Miasto"
            value={`${result.cityFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Pojemność silnika"
            value={`${result.engineFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Roczny przebieg"
            value={`${result.mileageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Użytkowanie"
            value={`${result.usageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Łączny mnożnik"
            value={`${result.totalFactor.toFixed(2)}x`}
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            Kalkulator OC pokazuje orientacyjny wpływ wybranych czynników na
            składkę. Nie jest to oferta ubezpieczeniowa. Rzeczywista cena OC
            zależy od ubezpieczyciela, historii kierowcy, pojazdu, miejsca
            zamieszkania oraz aktualnych taryf.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}