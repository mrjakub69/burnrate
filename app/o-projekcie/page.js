export const metadata = {
  title: "O projekcie | BurnRate",

  description:
    "Dowiedz się, czym jest BurnRate i jak pomaga liczyć realne koszty posiadania samochodu.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-cyan-400 font-semibold mb-4">
          O projekcie
        </p>

        <h1 className="text-5xl font-bold mb-10 leading-tight">
          Czym jest BurnRate?
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="space-y-8 text-lg text-slate-300 leading-8">
            <p>
              BurnRate to projekt pomagający obliczyć realne koszty
              posiadania i użytkowania samochodu.
            </p>

            <p>
              Celem BurnRate jest pokazanie, że koszt auta to nie tylko
              paliwo. Do realnych wydatków trzeba doliczyć także OC,
              serwis, naprawy, utratę wartości, koszt trasy oraz sposób
              użytkowania samochodu.
            </p>

            <p>
              Projekt opiera się na prostych kalkulatorach, które pokazują
              użytkownikowi, skąd bierze się wynik. Dzięki temu można łatwiej
              porównać różne scenariusze i sprawdzić, ile samochód naprawdę
              kosztuje miesięcznie lub rocznie.
            </p>

            <p>
              BurnRate nie jest ofertą ubezpieczeniową ani oficjalną wyceną
              pojazdu. Wyniki mają charakter orientacyjny i zależą od danych
              wpisanych przez użytkownika.
            </p>

            <p>
              Projekt jest rozwijany jako centrum kalkulatorów motoryzacyjnych:
              kosztu auta, OC, porównania EV z autem spalinowym oraz kosztu
              trasy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}