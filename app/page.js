"use client";

import { supabase } from "@/app/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const { data } = await supabase.from("cars").select("*");
      setCars(data || []);
    }

    loadCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const fullName = `${car.brand} ${car.model}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-cyan-400 font-semibold mb-4">
            BurnRate
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Policz realny koszt auta
          </h1>

          <p className="text-slate-400 text-2xl max-w-2xl mb-10">
            Kalkulatory kosztów paliwa, OC, trasy, EV i całkowitego utrzymania samochodu.
          </p>

          <Link
            href="/kalkulator"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 transition text-slate-950 font-bold px-8 py-5 rounded-2xl text-xl"
          >
            Oblicz koszt swojego auta
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-4">
            Kalkulatory BurnRate
          </h2>

          <p className="text-slate-400 text-xl mb-12">
            Najważniejsze narzędzia do liczenia kosztów auta w jednym miejscu.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CalculatorCard
              href="/kalkulator"
              label="Koszt auta"
              title="Kalkulator utrzymania"
              text="Oblicz miesięczny, roczny i kilometrowy koszt posiadania auta."
            />

            <CalculatorCard
              href="/oc"
              label="Ubezpieczenie"
              title="Kalkulator OC"
              text="Oszacuj orientacyjną składkę OC na podstawie historii kierowcy."
            />

            <CalculatorCard
              href="/ev"
              label="EV"
              title="EV vs spalinowe"
              text="Porównaj koszt jazdy autem elektrycznym i spalinowym."
            />

            <CalculatorCard
              href="/trasa"
              label="Podróż"
              title="Kalkulator trasy"
              text="Oblicz koszt przejazdu, koszt na osobę i podróż w obie strony."
            />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">
            Przykładowe modele
          </h2>

          <p className="text-slate-400 text-lg mb-8">
            Mała baza demonstracyjna — głównym celem BurnRate są kalkulatory.
          </p>

          <input
            type="text"
            placeholder="Szukaj przykładowego auta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xl mb-10"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <Link
                key={car.slug}
                href={`/koszt/${car.slug}`}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">
                    {car.brand}
                  </h3>

                  <span className="text-sm bg-slate-800 px-3 py-1 rounded-full">
                    {car.fuel}
                  </span>
                </div>

                <p className="text-slate-300 text-lg mb-6">
                  {car.model}
                </p>

                <div className="space-y-3 text-slate-400">
                  <div className="flex justify-between">
                    <span>⛽ Spalanie</span>
                    <span>{car.fuelConsumption} l/100km</span>
                  </div>

                  <div className="flex justify-between">
                    <span>⭐ Awaryjność</span>
                    <span>{car.reliability}/10</span>
                  </div>

                  <div className="flex justify-between">
                    <span>💰 Koszt</span>
                    <span>{car.totalMonthlyCost} zł</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="text-slate-500 text-xl mt-8">
              Brak aut pasujących do wyszukiwania.
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center font-bold text-slate-950">
                  BR
                </div>

                <div>
                  <p className="font-bold text-xl">
                    BurnRate
                  </p>

                  <p className="text-slate-500 text-sm">
                    Real costs of cars
                  </p>
                </div>
              </div>

              <p className="text-slate-500 max-w-md">
                Kalkulatory i narzędzia do liczenia realnych kosztów posiadania auta.
              </p>
            </div>

            <div className="flex gap-10 text-slate-400">
              <div>
                <p className="font-semibold text-white mb-3">
                  Narzędzia
                </p>

                <div className="space-y-2">
                  <FooterLink href="/kalkulator" text="Kalkulator kosztu auta" />
                  <FooterLink href="/oc" text="Kalkulator OC" />
                  <FooterLink href="/ev" text="Kalkulator EV" />
                  <FooterLink href="/trasa" text="Kalkulator trasy" />
                </div>
              </div>

              <div>
                <p className="font-semibold text-white mb-3">
                  BurnRate
                </p>

                <div className="space-y-2">
                  <FooterLink href="/blog" text="Blog" />
                  <FooterLink href="/metodologia" text="Metodologia" />
                  <FooterLink href="/o-projekcie" text="O projekcie" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 text-slate-600 text-sm">
            © 2026 BurnRate. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function CalculatorCard({ href, label, title, text }) {
  return (
    <Link
      href={href}
      className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-8"
    >
      <p className="text-cyan-400 mb-3">
        {label}
      </p>

      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-400 text-lg">
        {text}
      </p>
    </Link>
  );
}

function FooterLink({ href, text }) {
  return (
    <Link
      href={href}
      className="block hover:text-cyan-400 transition"
    >
      {text}
    </Link>
  );
}