import Link from "next/link";

import { blogPosts } from "@/app/lib/blogPosts";

export const metadata = {
  title: "Blog o kosztach samochodu | BurnRate",
  description:
    "Poradniki o kosztach utrzymania auta, utracie wartości, OC, kosztach trasy oraz porównaniu EV z autem spalinowym.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <section className="mb-14">
          <p className="text-cyan-400 font-semibold mb-4">
            Blog BurnRate
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
            Proste poradniki o realnych kosztach samochodu
          </h1>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl">
            Zobacz, ile naprawdę kosztuje utrzymanie auta, trasa samochodem,
            ubezpieczenie OC oraz jazda autem elektrycznym w porównaniu z
            autem spalinowym.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-400 transition"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <span className="text-sm text-slate-500">
                  {post.readingTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {post.title}
              </h2>

              <p className="text-slate-400 leading-7 mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex justify-center rounded-xl bg-cyan-400 text-slate-950 font-bold px-5 py-3 hover:bg-cyan-300 transition"
                >
                  Czytaj artykuł
                </Link>

                {post.calculatorHref && (
                  <Link
                    href={post.calculatorHref}
                    className="inline-flex justify-center rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-semibold px-5 py-3 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {post.calculatorLabel}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Chcesz szybko policzyć własne koszty?
          </h2>

          <p className="text-slate-400 leading-7 mb-6 max-w-3xl">
            Artykuły pokazują przykłady i sposób liczenia, ale najdokładniejszy
            wynik uzyskasz po wpisaniu własnych danych w kalkulatorach.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/kalkulator"
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-cyan-400 transition"
            >
              <p className="font-bold mb-2">
                Koszt auta
              </p>

              <p className="text-sm text-slate-500">
                Paliwo, OC, serwis, naprawy i utrata wartości.
              </p>
            </Link>

            <Link
              href="/oc"
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-cyan-400 transition"
            >
              <p className="font-bold mb-2">
                OC
              </p>

              <p className="text-sm text-slate-500">
                Orientacyjna składka OC na podstawie danych kierowcy.
              </p>
            </Link>

            <Link
              href="/ev"
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-cyan-400 transition"
            >
              <p className="font-bold mb-2">
                EV vs spalinowe
              </p>

              <p className="text-sm text-slate-500">
                Porównanie kosztu jazdy prądem i paliwem.
              </p>
            </Link>

            <Link
              href="/trasa"
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-cyan-400 transition"
            >
              <p className="font-bold mb-2">
                Koszt trasy
              </p>

              <p className="text-sm text-slate-500">
                Koszt paliwa, opłat i przejazdu na osobę.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}