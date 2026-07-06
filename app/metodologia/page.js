export const metadata = {
  title: "Metodologia | BurnRate",

  description:
    "Sprawdź, jak BurnRate oblicza koszt auta, koszt trasy, OC oraz porównanie auta elektrycznego ze spalinowym.",
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-cyan-400 font-semibold mb-4">
          Metodologia
        </p>

        <h1 className="text-5xl font-bold mb-10 leading-tight">
          Jak BurnRate liczy koszty?
        </h1>

        <div className="space-y-10 text-lg text-slate-300 leading-8">
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Główna zasada
            </h2>

            <p>
              BurnRate nie podaje jednej losowej kwoty. Kalkulatory rozbijają
              koszt auta na konkretne elementy, takie jak paliwo, OC, serwis,
              naprawy, utrata wartości, koszt prądu, straty ładowania oraz
              dodatkowe opłaty związane z trasą.
            </p>

            <p className="mt-4">
              Dzięki temu użytkownik widzi, skąd bierze się wynik i może
              samodzielnie zmienić założenia.
            </p>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Kalkulator kosztu auta
            </h2>

            <p>
              Całkowity koszt miesięczny auta jest liczony jako suma kilku
              składników:
            </p>

            <ul className="space-y-3 mt-5">
              <li>⛽ paliwo miesięcznie,</li>
              <li>📄 OC miesięcznie,</li>
              <li>🛠️ serwis miesięcznie,</li>
              <li>🔧 naprawy miesięcznie,</li>
              <li>📉 utrata wartości miesięcznie.</li>
            </ul>

            <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <p className="text-slate-400">
                Paliwo miesięcznie = przebieg miesięczny / 100 × spalanie ×
                cena paliwa
              </p>

              <p className="text-slate-400 mt-3">
                Utrata wartości = cena zakupu auta - przewidywana wartość przy
                sprzedaży
              </p>

              <p className="text-slate-400 mt-3">
                Utrata wartości miesięcznie = utrata wartości / liczba miesięcy
                posiadania auta
              </p>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              EV vs auto spalinowe
            </h2>

            <p>
              Porównanie auta elektrycznego i spalinowego uwzględnia nie tylko
              cenę prądu i paliwa, ale także straty ładowania.
            </p>

            <p className="mt-4">
              Auto elektryczne zużywa określoną ilość energii podczas jazdy,
              ale z gniazdka zwykle trzeba pobrać więcej energii. Dlatego
              BurnRate pozwala wybrać sposób ładowania, np. wallbox, zwykłe
              gniazdko albo szybką ładowarkę DC.
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <p className="text-slate-400">
                Koszt EV = energia pobrana z gniazdka × cena prądu
              </p>

              <p className="text-slate-400 mt-3">
                Koszt auta spalinowego = przebieg / 100 × spalanie × cena
                paliwa
              </p>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Kalkulator kosztu trasy
            </h2>

            <p>
              Kalkulator trasy liczy koszt przejazdu na podstawie dystansu,
              spalania, ceny paliwa, liczby osób oraz dodatkowych kosztów,
              takich jak autostrady, parkingi albo promy.
            </p>

            <p className="mt-4">
              Jeżeli użytkownik wybierze podróż w obie strony, dystans jest
              automatycznie mnożony przez 2.
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <p className="text-slate-400">
                Koszt paliwa = dystans / 100 × spalanie × cena paliwa
              </p>

              <p className="text-slate-400 mt-3">
                Koszt na osobę = całkowity koszt podróży / liczba osób
              </p>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Kalkulator OC
            </h2>

            <p>
              Kalkulator OC pokazuje orientacyjny wpływ wybranych czynników na
              wysokość składki. Uwzględnia między innymi wiek kierowcy, lata
              historii OC, liczbę szkód, wielkość miasta oraz pojemność
              silnika.
            </p>

            <p className="mt-4">
              Wynik nie jest ofertą ubezpieczeniową. Rzeczywista cena OC może
              różnić się w zależności od ubezpieczyciela, historii kierowcy,
              pojazdu i aktualnych taryf.
            </p>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Charakter wyników
            </h2>

            <p>
              Wyniki BurnRate mają charakter orientacyjny. Ich dokładność zależy
              od danych wpisanych przez użytkownika, takich jak realne spalanie,
              cena paliwa, cena prądu, koszty serwisu, wartość auta oraz okres
              posiadania.
            </p>

            <p className="mt-4">
              Celem projektu nie jest podanie jednej idealnej kwoty, ale
              pokazanie użytkownikowi, które elementy najmocniej wpływają na
              koszt posiadania i użytkowania samochodu.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}