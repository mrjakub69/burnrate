export const metadata = {
  title: "Polityka prywatności | BurnRate",

  description:
    "Polityka prywatności serwisu BurnRate.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-cyan-400 font-semibold mb-4">
          Polityka prywatności
        </p>

        <h1 className="text-5xl font-bold mb-10 leading-tight">
          Polityka prywatności BurnRate
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="space-y-8 text-lg text-slate-300 leading-8">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                1. Informacje ogólne
              </h2>

              <p>
                BurnRate to serwis udostępniający kalkulatory pomagające
                oszacować koszty posiadania i użytkowania samochodu.
              </p>

              <p className="mt-4">
                Wyniki kalkulatorów mają charakter orientacyjny i zależą od
                danych wpisanych przez użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                2. Dane wpisywane w kalkulatorach
              </h2>

              <p>
                Dane wpisywane w kalkulatorach, takie jak przebieg, spalanie,
                cena paliwa, koszty serwisu, wiek kierowcy czy liczba szkód,
                służą wyłącznie do wykonania obliczeń po stronie użytkownika.
              </p>

              <p className="mt-4">
                BurnRate nie wymaga zakładania konta i nie zbiera tych danych
                jako danych osobowych.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                3. Pliki cookies i analityka
              </h2>

              <p>
                W przyszłości serwis może korzystać z plików cookies oraz
                narzędzi analitycznych, aby mierzyć odwiedziny strony i
                poprawiać jej działanie.
              </p>

              <p className="mt-4">
                Jeżeli takie narzędzia zostaną wdrożone, polityka prywatności
                zostanie odpowiednio uzupełniona.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                4. Reklamy
              </h2>

              <p>
                W przyszłości BurnRate może wyświetlać reklamy, np. za pomocą
                zewnętrznych systemów reklamowych.
              </p>

              <p className="mt-4">
                Zewnętrzni dostawcy reklam mogą korzystać z plików cookies lub
                podobnych technologii zgodnie z własnymi zasadami prywatności.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                5. Charakter informacji
              </h2>

              <p>
                BurnRate nie jest doradcą finansowym, ubezpieczeniowym ani
                rzeczoznawcą samochodowym.
              </p>

              <p className="mt-4">
                Informacje i wyniki prezentowane w serwisie mają charakter
                edukacyjny i orientacyjny.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                6. Zmiany polityki prywatności
              </h2>

              <p>
                Polityka prywatności może być aktualizowana wraz z rozwojem
                serwisu, dodaniem analityki, reklam lub nowych funkcji.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}