"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";

import { calculateRouteCost } from "@/app/lib/calculators/route";

const fuelLabels = {
  petrol95: "Benzyna 95",
  petrol98: "Benzyna 98",
  diesel: "Diesel",
  lpg: "LPG",
};

export default function RoutePage() {
  const [distanceOneWay, setDistanceOneWay] =
    useState(300);

  const [tripType, setTripType] =
    useState("oneWay");

  const [fuelType, setFuelType] =
    useState("petrol95");

  const [fuelConsumption, setFuelConsumption] =
    useState(7);

  const [fuelPrice, setFuelPrice] =
    useState(6.7);

  const [passengers, setPassengers] =
    useState(2);

  const [additionalCosts, setAdditionalCosts] =
    useState(0);

  const isRoundTrip =
    tripType === "roundTrip";

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
      description="Oblicz koszt przejazdu autem, koszt na osobę oraz koszt całej podróży z dodatkowymi opłatami."
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
            onChange={(e) =>
              setTripType(e.target.value)
            }
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
                onChange={(e) =>
                  setFuelType(e.target.value)
                }
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

        <div className="space-y-5 text-xl">
          <ResultRow
            label="Całkowity koszt podróży"
            value={`${result.totalCost.toFixed(0)} zł`}
            strong
          />

          <ResultRow
            label="Koszt na osobę"
            value={`${result.costPerPerson.toFixed(0)} zł`}
          />

          <ResultRow
            label="Koszt paliwa"
            value={`${result.fuelCost.toFixed(0)} zł`}
          />

          <ResultRow
            label="Dodatkowe koszty"
            value={`${result.additionalCosts.toFixed(0)} zł`}
          />

          <ResultRow
            label="Łączny dystans"
            value={`${result.totalDistance.toFixed(0)} km`}
          />

          <ResultRow
            label={`Koszt ${fuelLabels[fuelType]} / 100 km`}
            value={`${result.fuelCostPer100Km.toFixed(2)} zł`}
          />

          <ResultRow
            label="Całkowity koszt 1 km"
            value={`${result.totalCostPerKm.toFixed(2)} zł`}
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            Kalkulator liczy koszt trasy na podstawie dystansu, spalania,
            ceny paliwa i dodatkowych kosztów. Jeżeli wybierzesz podróż w obie
            strony, dystans zostanie automatycznie pomnożony przez 2.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}