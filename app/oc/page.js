"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";
import ResultSummary from "@/app/components/calculators/ResultSummary";

import { calculateOC } from "@/app/lib/calculators/oc";
import { formatPLN } from "@/app/lib/formatters";

function getRiskDescription(riskLevel) {
  if (riskLevel === "Niskie") {
    return "Przy tych danych kierowca ma stosunkowo niski profil ryzyka, więc szacowana składka OC jest niższa.";
  }

  if (riskLevel === "Wysokie") {
    return "Przy tych danych kierowca ma podwyższony profil ryzyka, więc szacowana składka OC jest wyższa.";
  }

  return "Przy tych danych kierowca ma średni profil ryzyka, więc szacowana składka OC jest umiarkowana.";
}

export default function OCPage() {
  const [age, setAge] = useState(30);
  const [yearsInsured, setYearsInsured] = useState(5);
  const [claims, setClaims] = useState(0);

  const [citySize, setCitySize] = useState("medium");
  const [engine, setEngine] = useState(1.6);
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
      description="Oszacuj orientacyjny koszt ubezpieczenia OC na podstawie wieku kierowcy, historii ubezpieczenia, auta i sposobu użytkowania."
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
          suffix="lat"
        />

        <CalculatorInput
          label="Lata ubezpieczenia bez przerwy"
          value={yearsInsured}
          setValue={setYearsInsured}
          min={0}
          suffix="lat"
        />

        <CalculatorInput
          label="Liczba szkód"
          value={claims}
          setValue={setClaims}
          min={0}
          suffix="szt."
        />

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Auto i użytkowanie
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2">
                Wielkość miejscowości
              </label>

              <select
                value={citySize}
                onChange={(e) => setCitySize(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
              >
                <option value="small">
                  Mała miejscowość
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
              min={0.5}
              suffix="l"
            />

            <CalculatorInput
              label="Przebieg roczny"
              value={yearlyMileage}
              setValue={setYearlyMileage}
              min={0}
              suffix="km"
            />

            <div>
              <label className="block text-slate-400 mb-2">
                Sposób użytkowania auta
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
                  Firmowo
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          Wynik
        </h2>

        <ResultSummary
          label="Szacowana składka OC rocznie"
          value={formatPLN(result.yearlyOC)}
          description={getRiskDescription(result.riskLevel)}
        />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Miesięcznie
            </p>

            <p className="text-2xl font-bold">
              {formatPLN(result.monthlyOC)}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Poziom ryzyka
            </p>

            <p className="text-2xl font-bold text-cyan-400">
              {result.riskLevel}
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Kwota bazowa
          </p>

          <p className="text-2xl font-bold text-cyan-400 mb-3">
            {formatPLN(result.basePremium)}
          </p>

          <p className="text-slate-400 leading-7">
            Kalkulator zaczyna od kwoty bazowej, a następnie koryguje ją przez
            współczynniki związane z kierowcą, autem i sposobem użytkowania.
          </p>
        </div>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Współczynnik wieku"
            value={`${result.ageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik historii OC"
            value={`${result.historyFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik szkód"
            value={`${result.claimsFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik miejscowości"
            value={`${result.cityFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik silnika"
            value={`${result.engineFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik przebiegu"
            value={`${result.mileageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Współczynnik użytkowania"
            value={`${result.usageFactor.toFixed(2)}x`}
          />

          <ResultRow
            label="Łączny mnożnik"
            value={`${result.totalFactor.toFixed(2)}x`}
            strong
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            To jest wynik orientacyjny, a nie rzeczywista oferta
            ubezpieczeniowa. Prawdziwa cena OC zależy też od konkretnego
            ubezpieczyciela, historii kierowcy, miejsca zamieszkania,
            parametrów auta i aktualnych warunków rynkowych.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}