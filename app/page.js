import Link from "next/link";

const calculators = [
  {
    title: "Kalkulator kosztu auta",
    description:
      "Policz miesięczny i roczny koszt samochodu: paliwo, OC, serwis, naprawy i utratę wartości.",
    href: "/kalkulator",
    label: "Koszt auta",
  },
  {
    title: "Kalkulator OC",
    description:
      "Oszacuj orientacyjną składkę OC na podstawie wieku, historii ubezpieczenia, szkód i parametrów auta.",
    href: "/oc",
    label: "OC",
  },
  {
    title: "EV vs spalinowe",
    description:
      "Porównaj koszt jazdy autem elektrycznym i spalinowym z uwzględnieniem strat ładowania.",
    href: "/ev",
    label: "EV",
  },
  {
    title: "Kalkulator kosztu trasy",
    description:
      "Oblicz koszt przejazdu, koszt paliwa, koszt na osobę i dodatkowe opłaty.",
    href: "/trasa",
    label: "Trasa",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <p className="text-cyan-400 font-semibold mb-4">
            BurnRate
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Oblicz realny koszt posiadania samochodu
          </h1>

          <p className="text-slate-400 text-xl leading-8 mb-10 max-w-3xl">
            BurnRate pomaga sprawdzić, ile naprawdę kosztuje auto:
            paliwo, OC, serwis, naprawy, utrata wartości, koszt trasy
            oraz różnica między autem elektrycznym i spalinowym.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/kalkulator"
              className="
                inline-flex
                items-center
                justify-center
                bg-cyan-400
                hover:bg-cyan-300
                text-slate-950
                font-bold
                text-xl
                px-10
                py-6
                rounded-3xl
                shadow-lg
                shadow-cyan-400/20
                transition
                hover:-translate-y-0.5
              "
            >
              Oblicz koszt auta →
            </Link>

            <Link
              href="/metodologia"
              className="
                inline-flex
                items-center
                justify-center
                bg-slate-900
                border
                border-slate-700
                hover:border-cyan-400
                hover:bg-slate-800
                text-white
                font-bold
                text-xl
                px-10
                py-6
                rounded-3xl
                transition
                hover:-translate-y-0.5
              "
            >
              Zobacz metodologię
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-3">
            Kalkulatory
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Wybierz, co chcesz policzyć
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl">
            Zamiast zgadywać koszty, wpisz własne dane i zobacz,
            z czego składa się wynik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="group bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-8"
            >
              <p className="text-cyan-400 font-semibold mb-3">
                {calculator.label}
              </p>

              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {calculator.title}
              </h3>

              <p className="text-slate-400 text-lg leading-8">
                {calculator.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-cyan-400 font-semibold mb-3">
                Dlaczego BurnRate?
              </p>

              <h2 className="text-4xl font-bold mb-5">
                Koszt auta to więcej niż paliwo
              </h2>

              <p className="text-slate-400 text-lg leading-8">
                Samo spalanie nie pokazuje pełnego obrazu. Realny koszt
                samochodu zależy też od OC, serwisu, napraw, utraty wartości,
                sposobu użytkowania oraz przebiegu.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/blog"
                className="block bg-slate-950 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Blog
                </h3>

                <p className="text-slate-400">
                  Poradniki o kosztach auta, OC, EV i trasach.
                </p>
              </Link>

              <Link
                href="/o-projekcie"
                className="block bg-slate-950 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">
                  O projekcie
                </h3>

                <p className="text-slate-400">
                  Sprawdź, czym jest BurnRate i do czego służy.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}