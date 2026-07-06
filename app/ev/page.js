"use client";

import { useState } from "react";

import CalculatorLayout from "@/app/components/calculators/CalculatorLayout";
import CalculatorInput from "@/app/components/calculators/CalculatorInput";
import ResultRow from "@/app/components/calculators/ResultRow";

import { calculateEV } from "@/app/lib/calculators/ev";
import {
  chargingMethods,
  getChargingMethod,
} from "@/app/lib/chargingMethods";

const fuelLabels = {
  petrol95: "Benzyna 95",
  petrol98: "Benzyna 98",
  diesel: "Diesel",
  lpg: "LPG",
};

export default function EVPage() {
  const [monthlyDistance, setMonthlyDistance] =
    useState(1500);

  const [evConsumption, setEvConsumption] =
    useState(18);

  const [chargingMethod, setChargingMethod] =
    useState("wallbox");

  const [chargingLossPercent, setChargingLossPercent] =
    useState(8);

  const [electricityPrice, setElectricityPrice] =
    useState(0.9);

  const [fuelType, setFuelType] =
    useState("petrol95");

  const [fuelConsumption, setFuelConsumption] =
    useState(7);

  const [fuelPrice, setFuelPrice] =
    useState(6.7);

  const selectedChargingMethod =
    getChargingMethod(chargingMethod);

  function handleChargingMethodChange(e) {
    const nextMethodValue = e.target.value;
    const nextMethod =
      getChargingMethod(nextMethodValue);

    setChargingMethod(nextMethodValue);

    if (nextMethod.lossPercent !== null) {
      setChargingLossPercent(nextMethod.lossPercent);
    }
  }

  const result = calculateEV({
    monthlyDistance,
    evConsumption,
    chargingLossPercent,
    electricityPrice,
    fuelConsumption,
    fuelPrice,
  });

  return (
    <CalculatorLayout
      title="EV vs auto spalinowe"
      description="Porównaj koszt jazdy autem elektrycznym i spalinowym z uwzględnieniem strat ładowania."
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">
          Auto elektryczne
        </h2>

        <CalculatorInput
          label="Przebieg miesięczny"
          value={monthlyDistance}
          setValue={setMonthlyDistance}
          suffix="km"
        />

        <CalculatorInput
          label="Zużycie energii EV"
          value={evConsumption}
          setValue={setEvConsumption}
          step="0.1"
          suffix="kWh/100 km"
        />

        <div>
          <label className="block text-slate-400 mb-2">
            Sposób ładowania
          </label>

          <select
            value={chargingMethod}
            onChange={handleChargingMethodChange}
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
          >
            {chargingMethods.map((method) => (
              <option
                key={method.value}
                value={method.value}
              >
                {method.label}
              </option>
            ))}
          </select>

          <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <p className="text-slate-400 text-sm leading-6">
              {selectedChargingMethod.description}
            </p>

            {selectedChargingMethod.lossPercent !== null && (
              <p className="text-cyan-400 text-sm mt-2">
                Przyjęta wartość:{" "}
                {selectedChargingMethod.lossPercent}% strat ładowania.
              </p>
            )}
          </div>
        </div>

        <CalculatorInput
          label="Straty ładowania"
          value={chargingLossPercent}
          setValue={setChargingLossPercent}
          min={0}
          max={30}
          suffix="%"
        />

        <CalculatorInput
          label="Cena prądu"
          value={electricityPrice}
          setValue={setElectricityPrice}
          step="0.01"
          suffix="zł/kWh"
        />

        <div className="border-t border-slate-800 pt-6">
          <h2 className="text-2xl font-bold mb-6">
            Auto spalinowe
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
              label="Spalanie auta spalinowego"
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
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          Porównanie kosztów
        </h2>

        <div className="space-y-5 text-xl">
          <ResultRow
            label="EV miesięcznie"
            value={`${result.evMonthlyCost.toFixed(0)} zł`}
            strong
          />

          <ResultRow
            label={`${fuelLabels[fuelType]} miesięcznie`}
            value={`${result.fuelMonthlyCost.toFixed(0)} zł`}
          />

          <ResultRow
            label="Różnica miesięczna"
            value={`${result.monthlyDifference.toFixed(0)} zł`}
          />

          <ResultRow
            label="Różnica roczna"
            value={`${result.yearlyDifference.toFixed(0)} zł`}
          />

          <ResultRow
            label="Energia zużyta przez auto"
            value={`${result.batteryEnergyMonthly.toFixed(0)} kWh`}
          />

          <ResultRow
            label="Energia pobrana z gniazdka"
            value={`${result.gridEnergyMonthly.toFixed(0)} kWh`}
          />

          <ResultRow
            label="Straty ładowania miesięcznie"
            value={`${result.chargingLossEnergyMonthly.toFixed(0)} kWh`}
          />

          <ResultRow
            label="Koszt EV / 100 km"
            value={`${result.evCostPer100Km.toFixed(2)} zł`}
          />

          <ResultRow
            label={`Koszt ${fuelLabels[fuelType]} / 100 km`}
            value={`${result.fuelCostPer100Km.toFixed(2)} zł`}
          />
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 leading-7">
            Kalkulator nie zakłada, że cała energia pobrana z gniazdka trafia
            bez strat do akumulatora. Dlatego użytkownik wybiera sposób
            ładowania, a kalkulator podstawia sugerowaną stratę. Wartość można
            ręcznie zmienić, jeżeli użytkownik zna dokładniejsze dane.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}