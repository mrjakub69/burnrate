import Link from "next/link";

const posts = [
  {
    slug: "ile-kosztuje-utrzymanie-samochodu",
    title: "Ile naprawdę kosztuje utrzymanie samochodu?",
    excerpt:
      "Paliwo, OC, serwis, naprawy i utrata wartości — sprawdź, z czego składa się realny koszt auta.",
    category: "Koszt auta",
  },

  {
    slug: "ev-czy-spalinowe-co-tansze",
    title: "EV czy auto spalinowe — co jest tańsze w użytkowaniu?",
    excerpt:
      "Porównanie kosztu jazdy autem elektrycznym i spalinowym z uwzględnieniem strat ładowania.",
    category: "EV",
  },

  {
    slug: "jak-obliczyc-koszt-trasy",
    title: "Jak obliczyć koszt trasy samochodem?",
    excerpt:
      "Prosty sposób na policzenie kosztu paliwa, podróży w obie strony, opłat dodatkowych i kosztu na osobę.",
    category: "Trasa",
  },

  {
    slug: "co-wplywa-na-cene-oc",
    title: "Co wpływa na cenę OC?",
    excerpt:
      "Wiek kierowcy, historia ubezpieczenia, szkody, miasto i pojemność silnika — zobacz, od czego zależy składka.",
    category: "OC",
  },
];

export const metadata = {
  title: "Blog | BurnRate",

  description:
    "Poradniki o kosztach posiadania samochodu, OC, EV, paliwie i planowaniu wydatków na auto.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">
          Blog
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Poradniki BurnRate
        </h1>

        <p className="text-slate-400 text-xl mb-12 max-w-3xl">
          Proste poradniki o realnych kosztach posiadania auta, paliwie,
          ubezpieczeniu, trasach i porównaniu samochodów elektrycznych ze
          spalinowymi.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-8"
            >
              <p className="text-cyan-400 mb-3 font-semibold">
                {post.category}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {post.title}
              </h2>

              <p className="text-slate-400 text-lg leading-8">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}