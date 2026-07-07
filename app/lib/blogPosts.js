export const blogPosts = [
  {
    slug: "ile-kosztuje-utrzymanie-samochodu",

    title: "Ile naprawdę kosztuje utrzymanie samochodu miesięcznie?",

    excerpt:
      "Konkretny przykład obliczenia kosztu auta: paliwo, OC, serwis, naprawy i utrata wartości.",

    category: "Koszt auta",

    readingTime: "5 min czytania",

    calculatorHref: "/kalkulator",

    calculatorLabel: "Policz własny koszt auta",

    content: [
      {
        type: "paragraph",
        text:
          "Sam koszt paliwa nie pokazuje, ile naprawdę kosztuje samochód. W praktyce do miesięcznych wydatków trzeba doliczyć także OC, serwis, naprawy i utratę wartości auta.",
      },
      {
        type: "paragraph",
        text:
          "Dla wielu kierowców największym zaskoczeniem jest utrata wartości. To koszt, którego nie płaci się co miesiąc przelewem, ale realnie traci się go przy sprzedaży samochodu.",
      },
      {
        type: "heading",
        text: "Przykładowe założenia",
      },
      {
        type: "list",
        items: [
          "cena zakupu auta: 50 000 zł",
          "przewidywana wartość po 3 latach: 35 000 zł",
          "przebieg miesięczny: 1500 km",
          "spalanie: 7 l/100 km",
          "cena paliwa: 6,70 zł/l",
          "OC: 1800 zł rocznie",
          "serwis: 2500 zł rocznie",
          "naprawy: 2000 zł rocznie",
        ],
      },
      {
        type: "heading",
        text: "Koszt paliwa",
      },
      {
        type: "paragraph",
        text:
          "Koszt paliwa liczymy na podstawie przebiegu, spalania i ceny paliwa.",
      },
      {
        type: "calculation",
        text:
          "1500 / 100 × 7 × 6,70 = 703,50 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie samo paliwo kosztuje około 704 zł miesięcznie.",
      },
      {
        type: "heading",
        text: "OC, serwis i naprawy",
      },
      {
        type: "paragraph",
        text:
          "Koszty podawane rocznie warto przeliczyć na koszt miesięczny, bo dopiero wtedy widać realny koszt posiadania auta.",
      },
      {
        type: "calculation",
        text:
          "OC: 1800 / 12 = 150 zł miesięcznie\nSerwis: 2500 / 12 = około 208 zł miesięcznie\nNaprawy: 2000 / 12 = około 167 zł miesięcznie",
      },
      {
        type: "heading",
        text: "Utrata wartości",
      },
      {
        type: "paragraph",
        text:
          "Jeżeli auto kupione za 50 000 zł po 3 latach zostanie sprzedane za 35 000 zł, to realna utrata wartości wynosi 15 000 zł.",
      },
      {
        type: "calculation",
        text:
          "50 000 - 35 000 = 15 000 zł\n15 000 / 3 lata = 5000 zł rocznie\n5000 / 12 = około 417 zł miesięcznie",
      },
      {
        type: "heading",
        text: "Całkowity koszt miesięczny",
      },
      {
        type: "list",
        items: [
          "paliwo: około 704 zł",
          "OC: 150 zł",
          "serwis: około 208 zł",
          "naprawy: około 167 zł",
          "utrata wartości: około 417 zł",
        ],
      },
      {
        type: "calculation",
        text:
          "704 + 150 + 208 + 167 + 417 = 1646 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie samochód kosztuje około 1650 zł miesięcznie, mimo że samo paliwo to około 700 zł. To pokazuje, dlaczego warto liczyć pełny koszt, a nie tylko spalanie.",
      },
      {
        type: "heading",
        text: "Kiedy wynik może być inny?",
      },
      {
        type: "paragraph",
        text:
          "Wynik będzie inny, jeśli auto ma inne spalanie, większy lub mniejszy przebieg, droższy serwis, inną składkę OC albo szybciej traci wartość. Dlatego najlepsze obliczenie to takie, które opiera się na własnych danych użytkownika.",
      },
    ],
  },
{
  slug: "jak-obliczyc-utrate-wartosci-samochodu",

  title: "Jak obliczyć utratę wartości samochodu?",

  excerpt:
    "Prosty sposób na policzenie, ile auto realnie traci na wartości i jak wpływa to na miesięczny koszt posiadania.",

  category: "Utrata wartości",

  readingTime: "4 min czytania",

  calculatorHref: "/kalkulator",

  calculatorLabel: "Policz koszt auta z utratą wartości",

  content: [
    {
      type: "paragraph",
      text:
        "Utrata wartości to jeden z największych kosztów posiadania samochodu. Problem polega na tym, że wielu kierowców jej nie zauważa, bo nie płaci się jej co miesiąc tak jak paliwa, OC albo serwisu.",
    },
    {
      type: "paragraph",
      text:
        "Ten koszt pojawia się dopiero przy sprzedaży auta. Jeżeli samochód został kupiony za określoną kwotę, a po kilku latach sprzedajesz go taniej, różnica między tymi kwotami jest właśnie utratą wartości.",
    },
    {
      type: "heading",
      text: "Podstawowy wzór",
    },
    {
      type: "calculation",
      text:
        "Utrata wartości = cena zakupu auta - przewidywana cena sprzedaży",
    },
    {
      type: "paragraph",
      text:
        "Jeżeli chcesz policzyć, ile auto traci miesięcznie, musisz jeszcze podzielić tę kwotę przez czas posiadania samochodu.",
    },
    {
      type: "calculation",
      text:
        "Utrata wartości miesięcznie = utrata wartości / liczba miesięcy posiadania auta",
    },
    {
      type: "heading",
      text: "Przykład obliczenia",
    },
    {
      type: "paragraph",
      text:
        "Załóżmy, że kupujesz samochód za 50 000 zł i planujesz sprzedać go po 3 latach za 35 000 zł.",
    },
    {
      type: "calculation",
      text:
        "50 000 - 35 000 = 15 000 zł utraty wartości",
    },
    {
      type: "paragraph",
      text:
        "To oznacza, że przez cały okres posiadania auta tracisz 15 000 zł. Teraz trzeba przeliczyć to na koszt roczny i miesięczny.",
    },
    {
      type: "calculation",
      text:
        "15 000 / 3 lata = 5000 zł rocznie\n5000 / 12 = około 417 zł miesięcznie",
    },
    {
      type: "paragraph",
      text:
        "W tym przykładzie samochód kosztuje około 417 zł miesięcznie tylko z powodu utraty wartości. To koszt, którego nie widać na co dzień, ale realnie wpływa na opłacalność posiadania auta.",
    },
    {
      type: "heading",
      text: "Dlaczego to ważne?",
    },
    {
      type: "paragraph",
      text:
        "Dwa samochody mogą mieć podobne spalanie i podobne koszty serwisu, ale bardzo różną utratę wartości. Auto, które wolniej traci wartość, może być tańsze w posiadaniu, nawet jeśli kosztuje więcej przy zakupie.",
    },
    {
      type: "heading",
      text: "Przykład porównania dwóch aut",
    },
    {
      type: "list",
      items: [
        "Auto A: zakup 50 000 zł, sprzedaż po 3 latach za 35 000 zł",
        "Auto B: zakup 50 000 zł, sprzedaż po 3 latach za 28 000 zł",
      ],
    },
    {
      type: "calculation",
      text:
        "Auto A: 50 000 - 35 000 = 15 000 zł utraty wartości\nAuto B: 50 000 - 28 000 = 22 000 zł utraty wartości",
    },
    {
      type: "paragraph",
      text:
        "Różnica wynosi 7000 zł. To oznacza, że Auto B może być realnie droższe w posiadaniu, nawet jeśli na początku kosztowało tyle samo.",
    },
    {
      type: "heading",
      text: "Co wpływa na utratę wartości?",
    },
    {
      type: "list",
      items: [
        "marka i model samochodu",
        "wiek auta",
        "przebieg",
        "stan techniczny",
        "historia serwisowa",
        "popularność danego modelu na rynku wtórnym",
        "rodzaj silnika i paliwa",
        "wyposażenie",
      ],
    },
    {
      type: "paragraph",
      text:
        "Nie da się przewidzieć przyszłej ceny sprzedaży idealnie, ale można przyjąć rozsądne założenie. W kalkulatorze BurnRate użytkownik sam wpisuje cenę zakupu, przewidywaną cenę sprzedaży i okres posiadania auta.",
    },
    {
      type: "heading",
      text: "Najczęstszy błąd",
    },
    {
      type: "paragraph",
      text:
        "Najczęstszy błąd to liczenie tylko paliwa i serwisu. Wtedy samochód może wyglądać na tani, mimo że w rzeczywistości szybko traci wartość i kosztuje znacznie więcej, niż się wydaje.",
    },
    {
      type: "paragraph",
      text:
        "Dlatego BurnRate dolicza utratę wartości do miesięcznego kosztu auta. Dzięki temu wynik jest bliższy realnym kosztom posiadania samochodu.",
    },
  ],
}
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}