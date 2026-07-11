import Link from "next/link";

const calculators = [
  {
    title: "Koszt auta",
    description:
      "Oblicz miesięczny koszt użytkowania samochodu: paliwo, OC, serwis, naprawy oraz utratę wartości.",
    href: "/kalkulator",
    label: "Policz koszt auta",
  },
  {
    title: "Kalkulator OC",
    description:
      "Oszacuj orientacyjny koszt OC na podstawie wieku kierowcy, historii ubezpieczenia i danych auta.",
    href: "/oc",
    label: "Sprawdź OC",
  },
  {
    title: "EV vs spalinowe",
    description:
      "Porównaj koszt jazdy autem elektrycznym i spalinowym przy własnym przebiegu.",
    href: "/ev",
    label: "Porównaj EV",
  },
  {
    title: "Koszt trasy",
    description:
      "Policz koszt paliwa, dodatkowe opłaty, koszt całej podróży i koszt na osobę.",
    href: "/trasa",
    label: "Policz trasę",
  },
];

export const metadata = {
  title: "BurnRate — kalkulatory kosztów samochodu",
  description:
    "Oblicz koszt użytkowania auta, OC, koszt trasy oraz porównanie EV z autem spalinowym.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <p className="text-cyan-400 font-semibold mb-4">
            BurnRate
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Ile naprawdę kosztuje auto?
          </h1>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mb-8">
            Sprawdź realny koszt użytkowania samochodu. Policz paliwo, OC,
            serwis, naprawy, koszt trasy albo porównaj auto elektryczne ze
            spalinowym.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kalkulator"
              className="inline-flex justify-center rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 hover:bg-cyan-300 transition"
            >
              Policz koszt auta
            </Link>

            <Link
              href="/blog"
              className="inline-flex justify-center rounded-2xl border border-slate-700 px-7 py-4 font-bold text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Zobacz poradniki
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">
              Kalkulatory
            </h2>

            <p className="text-slate-400 leading-7 max-w-3xl">
              Wybierz kalkulator i wpisz własne dane. Wynik pojawi się od razu,
              bez logowania i bez skomplikowanych ustawień.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {calculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-400 transition"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {calculator.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {calculator.description}
                </p>

                <span className="inline-flex rounded-xl bg-slate-950 border border-slate-800 px-5 py-3 font-semibold text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400 transition">
                  {calculator.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}