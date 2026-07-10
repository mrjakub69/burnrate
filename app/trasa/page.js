"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";
import ResultSummary from "@/app/components/calculators/ResultSummary";

import { calculateRouteCost } from "@/app/lib/calculators/route";
import { formatPLN } from "@/app/lib/formatters";

const fuelLabels = {
  petrol95: "Benzyna 95",
  petrol98: "Benzyna 98",
  diesel: "Diesel",
  lpg: "LPG",
};

function getRouteComment(passengers, additionalCosts) {
  if (passengers >= 3) {
    return "Koszt na osobę jest niższy, bo podróżujesz z kilkoma osobami.";
  }

  if (additionalCosts > 0) {
    return "Na całkowity koszt wpływa nie tylko paliwo, ale też dodatkowe opłaty.";
  }

  return "Największy wpływ na koszt trasy mają dystans, spalanie i cena paliwa.";
}

export default function RoutePage() {
  const [distanceOneWay, setDistanceOneWay] = useState(300);
  const [tripType, setTripType] = useState("oneWay");

  const [fuelType, setFuelType] = useState("petrol95");
  const [fuelConsumption, setFuelConsumption] = useState(7);
  const [fuelPrice, setFuelPrice] = useState(6.7);

  const [passengers, setPassengers] = useState(2);
  const [additionalCosts, setAdditionalCosts] = useState(0);

  const isRoundTrip = tripType === "roundTrip";

  const result = calculateRouteCost({
    distanceOneWay,
    isRoundTrip,
    fuelConsumption,
    fuelPrice,
    passengers,
    additionalCosts,
  });

  return (
    <CalculatorLayout
      title="Kalkulator kosztu trasy"
      description="Oblicz koszt przejazdu samochodem, koszt na osobę, paliwo i dodatkowe opłaty."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">
          Dane trasy
        </h2>

        <CalculatorInput
          label="Dystans w jedną stronę"
          value={distanceOneWay}
          setValue={setDistanceOneWay}
          suffix="km"
        />

        <div>
          <label className="block text-slate-400 mb-2">
            Typ podróży
          </label>

          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
          >
            <option value="oneWay">
              Tylko w jedną stronę
            </option>

            <option value="roundTrip">
              W obie strony
            </option>
          </select>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Auto i paliwo
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2">
                Rodzaj paliwa
              </label>

              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
              >
                <option value="petrol95">
                  Benzyna 95
                </option>

                <option value="petrol98">
                  Benzyna 98
                </option>

                <option value="diesel">
                  Diesel
                </option>

                <option value="lpg">
                  LPG
                </option>
              </select>

              {fuelType === "lpg" && (
                <p className="text-slate-500 text-sm mt-3 leading-6">
                  Przy LPG wpisz realne spalanie gazu, które zwykle jest
                  wyższe niż spalanie benzyny.
                </p>
              )}
            </div>

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
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Podział kosztów
          </h2>

          <div className="space-y-6">
            <CalculatorInput
              label="Liczba osób"
              value={passengers}
              setValue={setPassengers}
              min={1}
              suffix="os."
            />

            <CalculatorInput
              label="Dodatkowe koszty"
              value={additionalCosts}
              setValue={setAdditionalCosts}
              step="0.01"
              suffix="zł"
            />

            <p className="text-slate-500 text-sm leading-6">
              Dodatkowe koszty to np. autostrady, parkingi, promy albo inne
              opłaty związane z całą podróżą.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          Wynik
        </h2>

        <ResultSummary
          label="Całkowity koszt podróży"
          value={formatPLN(result.totalCost)}
          description={getRouteComment(passengers, additionalCosts)}
        />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Koszt na osobę
            </p>

            <p className="text-2xl font-bold">
              {formatPLN(result.costPerPerson)}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
            <p className="text-slate-500 mb-2">
              Łączny dystans
            </p>

            <p className="text-2xl font-bold">
              {result.totalDistance.toFixed(0)} km
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-5">
          <p className="text-slate-500 mb-2">
            Koszt paliwa
          </p>

          <p className="text-2xl font-bold text-cyan-400 mb-3">
            {formatPLN(result.fuelCost)}
          </p>

          <p className="text-slate-400 leading-7">
            To koszt samego paliwa dla wybranego dystansu. Dodatkowe opłaty,
            takie jak autostrady lub parkingi, są doliczane osobno.
          </p>
        </div>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Koszt paliwa"
            value={formatPLN(result.fuelCost)}
          />

          <ResultRow
            label="Dodatkowe koszty"
            value={formatPLN(result.additionalCosts)}
          />

          <ResultRow
            label="Liczba osób"
            value={`${passengers}`}
          />

          <ResultRow
            label={`Koszt ${fuelLabels[fuelType]} / 100 km`}
            value={formatPLN(result.fuelCostPer100Km)}
          />

          <ResultRow
            label="Całkowity koszt 1 km"
            value={formatPLN(result.totalCostPerKm)}
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            Jeżeli wybierzesz podróż w obie strony, dystans zostanie
            automatycznie pomnożony przez 2. Koszt na osobę jest liczony przez
            podzielenie całkowitego kosztu podróży przez liczbę osób.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}