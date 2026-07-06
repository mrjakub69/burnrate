const posts = [
  {
    slug: "ile-kosztuje-utrzymanie-samochodu",

    title: "Ile naprawdę kosztuje utrzymanie samochodu?",

    content: `
Koszt samochodu to nie tylko paliwo.

Realny koszt utrzymania auta składa się z kilku elementów:
- paliwa,
- ubezpieczenia OC,
- serwisu,
- napraw,
- utraty wartości,
- dodatkowych kosztów eksploatacyjnych.

Dlatego samo pytanie „ile pali auto?” nie wystarcza, żeby ocenić, czy samochód jest tani w utrzymaniu.

Przykład:
Jeżeli auto spala niewiele paliwa, ale szybko traci wartość albo często wymaga napraw, jego realny koszt może być wyższy niż w przypadku auta z większym spalaniem.

Najważniejsze elementy kosztu auta:

1. Paliwo

Koszt paliwa zależy od:
- miesięcznego przebiegu,
- spalania,
- ceny paliwa.

Wzór jest prosty:

koszt paliwa = przebieg / 100 × spalanie × cena paliwa

2. Ubezpieczenie OC

OC zwykle liczy się rocznie, ale w realnym koszcie auta warto przeliczyć je na koszt miesięczny.

3. Serwis i naprawy

Do kosztów eksploatacji warto doliczyć:
- wymianę oleju,
- filtry,
- hamulce,
- opony,
- zawieszenie,
- drobne naprawy.

4. Utrata wartości

To bardzo ważny koszt, który często jest pomijany.

Jeżeli kupisz auto za 50 000 zł, a po 3 latach sprzedasz je za 35 000 zł, to realnie straciłeś 15 000 zł.

W takim przypadku utrata wartości wynosi:
15 000 zł / 3 lata = 5 000 zł rocznie
czyli około 417 zł miesięcznie.

Właśnie dlatego BurnRate liczy koszt auta jako sumę kilku elementów, a nie tylko jako koszt paliwa.
    `,
  },

  {
    slug: "ev-czy-spalinowe-co-tansze",

    title: "EV czy auto spalinowe — co jest tańsze w użytkowaniu?",

    content: `
Porównanie auta elektrycznego i spalinowego nie powinno opierać się tylko na cenie paliwa albo prądu.

W aucie spalinowym podstawowy koszt jazdy zależy od:
- spalania w litrach na 100 km,
- ceny paliwa,
- miesięcznego przebiegu.

W aucie elektrycznym koszt jazdy zależy od:
- zużycia energii w kWh/100 km,
- ceny prądu,
- miesięcznego przebiegu,
- strat ładowania.

Straty ładowania są ważne, bo auto elektryczne nie wykorzystuje idealnie całej energii pobranej z gniazdka.

Przykład:
Jeżeli auto zużywa 18 kWh/100 km, a straty ładowania wynoszą 10%, to realnie z gniazdka trzeba pobrać więcej energii niż 18 kWh.

Dlatego BurnRate uwzględnia sposób ładowania:
- wallbox / ładowanie domowe,
- zwykłe gniazdko 230 V,
- szybka ładowarka DC,
- własna wartość strat.

Dzięki temu wynik jest bardziej logiczny dla zwykłego użytkownika.

Auto elektryczne może być tańsze w codziennej jeździe, szczególnie przy ładowaniu w domu. Jednak pełne porównanie powinno też uwzględniać koszt zakupu, utratę wartości, serwis, ubezpieczenie i sposób ładowania.
    `,
  },

  {
    slug: "jak-obliczyc-koszt-trasy",

    title: "Jak obliczyć koszt trasy samochodem?",

    content: `
Koszt trasy samochodem można policzyć dość prosto, ale trzeba uwzględnić więcej niż samo spalanie.

Podstawowe dane potrzebne do obliczenia kosztu trasy:
- dystans w jedną stronę,
- informacja, czy podróż jest w jedną czy w obie strony,
- spalanie auta,
- cena paliwa,
- liczba osób,
- dodatkowe koszty.

Podstawowy wzór na koszt paliwa:

koszt paliwa = dystans / 100 × spalanie × cena paliwa

Jeżeli podróż jest w obie strony, dystans należy pomnożyć przez 2.

Przykład:
Trasa ma 300 km w jedną stronę.
Auto spala 7 l/100 km.
Cena paliwa wynosi 6,70 zł/l.

Koszt w jedną stronę:
300 / 100 × 7 × 6,70 = 140,70 zł

Koszt w obie strony:
140,70 × 2 = 281,40 zł

Do tego można doliczyć:
- autostrady,
- parking,
- prom,
- inne opłaty drogowe.

Jeżeli podróżuje kilka osób, całkowity koszt można podzielić przez liczbę pasażerów.

Dlatego kalkulator trasy BurnRate liczy:
- koszt paliwa,
- dodatkowe koszty,
- koszt całkowity,
- koszt na osobę,
- koszt 1 km,
- koszt 100 km.
    `,
  },

  {
    slug: "co-wplywa-na-cene-oc",

    title: "Co wpływa na cenę OC?",

    content: `
Cena OC nie jest taka sama dla każdego kierowcy.

Ubezpieczyciele biorą pod uwagę wiele czynników, dlatego dwie osoby z takim samym samochodem mogą dostać zupełnie inną składkę.

Na cenę OC wpływają między innymi:

1. Wiek kierowcy

Młodzi kierowcy zwykle płacą więcej, ponieważ statystycznie są uznawani za bardziej ryzykowną grupę.

2. Historia ubezpieczenia

Im dłużej kierowca jeździ bez szkód, tym większa szansa na niższą składkę.

3. Liczba szkód

Szkody z ostatnich lat mogą znacząco podnieść cenę OC.

4. Miejsce zamieszkania

W dużych miastach składki często są wyższe, ponieważ jest większy ruch i większe ryzyko kolizji.

5. Pojemność silnika

Samochody z większym silnikiem często mają wyższą składkę, ponieważ mogą być uznawane za bardziej ryzykowne.

6. Samochód

Znaczenie mogą mieć również:
- marka,
- model,
- rocznik,
- wartość auta,
- przeznaczenie pojazdu.

Kalkulator OC BurnRate nie jest ofertą ubezpieczeniową. Jego celem jest pokazanie orientacyjnego wpływu najważniejszych czynników na wysokość składki.
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artykuł nie istnieje | BurnRate",
      description: "Ten artykuł nie istnieje lub został usunięty.",
    };
  }

  return {
    title: `${post.title} | BurnRate`,
    description: post.content.trim().slice(0, 140),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">
            Blog BurnRate
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Artykuł nie istnieje
          </h1>

          <p className="text-slate-400 text-xl">
            Ten artykuł został usunięty albo adres jest nieprawidłowy.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <article className="max-w-4xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-4">
          Blog BurnRate
        </p>

        <h1 className="text-5xl font-bold mb-10 leading-tight">
          {post.title}
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="text-slate-300 text-xl leading-10 whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}