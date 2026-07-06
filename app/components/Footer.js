import Link from "next/link";

const calculators = [
  {
    label: "Koszt auta",
    href: "/kalkulator",
  },
  {
    label: "OC",
    href: "/oc",
  },
  {
    label: "EV vs spalinowe",
    href: "/ev",
  },
  {
    label: "Koszt trasy",
    href: "/trasa",
  },
];

const pages = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Metodologia",
    href: "/metodologia",
  },
  {
    label: "O projekcie",
    href: "/o-projekcie",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center font-bold text-slate-950">
                BR
              </div>

              <div>
                <p className="font-bold text-xl text-white">
                  BurnRate
                </p>

                <p className="text-slate-500 text-sm">
                  Car cost calculators
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-7">
              Kalkulatory pomagające oszacować realne koszty posiadania
              i użytkowania samochodu.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              Kalkulatory
            </h3>

            <div className="space-y-3">
              {calculators.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 hover:text-cyan-400 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              Strony
            </h3>

            <div className="space-y-3">
              {pages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 hover:text-cyan-400 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BurnRate. Wszystkie wyniki mają
            charakter orientacyjny.
          </p>

          <p className="text-slate-500 text-sm">
            Nie jest to oferta ubezpieczeniowa ani oficjalna wycena pojazdu.
          </p>
        </div>
      </div>
    </footer>
  );
}