"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function ManageCarsPage() {

  const [cars, setCars] = useState([]);

  async function loadCars() {

    const { data } =
      await supabase
        .from("cars")
        .select("*")
        .order("brand");

    setCars(data || []);

  }

  async function deleteCar(id) {

    const confirmed =
      confirm("Usunąć auto?");

    if (!confirmed) return;

    await supabase
      .from("cars")
      .delete()
      .eq("id", id);

    loadCars();

  }

  useEffect(() => {

    loadCars();

  }, []);

  return (

    <main className="min-h-screen bg-zinc-950 text-white p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Zarządzanie autami
        </h1>

        <div className="space-y-4">

          {cars.map((car) => (

            <div
              key={car.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between"
            >

              <div>

                <h2 className="text-2xl font-bold">

                  {car.brand} {car.model}

                </h2>

                <p className="text-zinc-500">

                  {car.totalMonthlyCost} zł

                </p>

              </div>

              <button
                onClick={() =>
                  deleteCar(car.id)
                }
                className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-bold"
              >

                Usuń

              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
