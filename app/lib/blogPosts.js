export const blogPosts = [
  {
    slug: "ile-kosztuje-utrzymanie-samochodu",

    title: "Ile naprawdę kosztuje utrzymanie samochodu miesięcznie?",

    excerpt:
      "Konkretny przykład obliczenia kosztu auta: osobno koszt użytkowania i koszt ekonomiczny z utratą wartości.",

    category: "Koszt auta",

    readingTime: "5 min czytania",

    calculatorHref: "/kalkulator",

    calculatorLabel: "Policz własny koszt auta",

    content: [
      {
        type: "paragraph",
        text:
          "Sam koszt paliwa nie pokazuje, ile naprawdę kosztuje samochód. W praktyce do miesięcznych wydatków trzeba doliczyć także OC, serwis i naprawy.",
      },
      {
        type: "paragraph",
        text:
          "Osobno warto policzyć utratę wartości auta. To nie jest wydatek, który płaci się co miesiąc przelewem, ale jest realnym kosztem ekonomicznym, bo pojawia się przy sprzedaży samochodu.",
      },
      {
        type: "heading",
        text: "Koszt użytkowania a koszt ekonomiczny",
      },
      {
        type: "paragraph",
        text:
          "W BurnRate główny wynik kalkulatora pokazuje koszt użytkowania auta, czyli bieżące wydatki: paliwo, OC, serwis i naprawy. Utrata wartości jest pokazana niżej osobno jako koszt ekonomiczny.",
      },
      {
        type: "list",
        items: [
          "koszt użytkowania auta: paliwo + OC + serwis + naprawy",
          "koszt ekonomiczny: koszt użytkowania + utrata wartości",
        ],
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
          "W tym przykładzie samo paliwo kosztuje 703,50 zł miesięcznie.",
      },
      {
        type: "heading",
        text: "OC, serwis i naprawy",
      },
      {
        type: "paragraph",
        text:
          "Koszty podawane rocznie warto przeliczyć na koszt miesięczny, bo dopiero wtedy widać, ile średnio kosztuje użytkowanie auta w każdym miesiącu.",
      },
      {
        type: "calculation",
        text:
          "OC: 1800 / 12 = 150,00 zł miesięcznie\nSerwis: 2500 / 12 = 208,33 zł miesięcznie\nNaprawy: 2000 / 12 = 166,67 zł miesięcznie",
      },
      {
        type: "heading",
        text: "Miesięczny koszt użytkowania auta",
      },
      {
        type: "paragraph",
        text:
          "Teraz sumujemy bieżące koszty użytkowania auta, czyli paliwo, OC, serwis i naprawy. Na tym etapie nie doliczamy jeszcze utraty wartości.",
      },
      {
        type: "list",
        items: [
          "paliwo: 703,50 zł",
          "OC: 150,00 zł",
          "serwis: 208,33 zł",
          "naprawy: 166,67 zł",
        ],
      },
      {
        type: "calculation",
        text:
          "703,50 + 150,00 + 208,33 + 166,67 = 1228,50 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie bieżące użytkowanie auta kosztuje 1228,50 zł miesięcznie. To są koszty, które kierowca faktycznie odczuwa w codziennym użytkowaniu samochodu.",
      },
      {
        type: "heading",
        text: "Utrata wartości",
      },
      {
        type: "paragraph",
        text:
          "Jeżeli auto kupione za 50 000 zł po 3 latach zostanie sprzedane za 35 000 zł, to utrata wartości wynosi 15 000 zł.",
      },
      {
        type: "calculation",
        text:
          "50 000 - 35 000 = 15 000 zł\n15 000 / 3 lata = 5000 zł rocznie\n5000 / 12 = 416,67 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "To nie jest typowy miesięczny rachunek, ale pokazuje, ile auto średnio traci na wartości w czasie posiadania.",
      },
      {
        type: "heading",
        text: "Pełny koszt ekonomiczny",
      },
      {
        type: "paragraph",
        text:
          "Pełny koszt ekonomiczny pokazuje, ile auto naprawdę kosztuje w dłuższym czasie, jeśli do bieżących kosztów użytkowania doliczymy także utratę wartości.",
      },
      {
        type: "calculation",
        text:
          "1228,50 + 416,67 = 1645,17 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie samochód kosztuje 1228,50 zł miesięcznie w bieżącym użytkowaniu, ale jego pełny koszt ekonomiczny wynosi 1645,17 zł miesięcznie.",
      },
      {
        type: "heading",
        text: "Dlaczego warto rozdzielać te koszty?",
      },
      {
        type: "paragraph",
        text:
          "Rozdzielenie kosztu użytkowania i utraty wartości jest ważne, bo pomaga lepiej zrozumieć wynik. Paliwo, OC, serwis i naprawy to koszty, które zwykle pojawiają się na bieżąco. Utrata wartości jest mniej widoczna, ale może mocno wpływać na realną opłacalność posiadania auta.",
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
          "Dlatego BurnRate pokazuje utratę wartości osobno obok bieżących kosztów użytkowania auta. Dzięki temu łatwiej zobaczyć zarówno codzienne wydatki, jak i pełny koszt ekonomiczny posiadania samochodu.",
      },
    ],
  },
  {
    slug: "ev-czy-benzyna-kiedy-elektryk-sie-oplaca",

    title: "EV czy benzyna — kiedy elektryk faktycznie wychodzi taniej?",

    excerpt:
      "Porównanie kosztu jazdy autem elektrycznym i benzynowym na konkretnym przykładzie z uwzględnieniem strat ładowania.",

    category: "EV",

    readingTime: "5 min czytania",

    calculatorHref: "/ev",

    calculatorLabel: "Porównaj EV z autem spalinowym",

    content: [
      {
        type: "paragraph",
        text:
          "Auto elektryczne może być tańsze w codziennej jeździe, ale nie zawsze i nie w każdych warunkach. Największe znaczenie mają: cena prądu, sposób ładowania, zużycie energii, cena paliwa oraz miesięczny przebieg.",
      },
      {
        type: "paragraph",
        text:
          "Dlatego porównanie EV z autem benzynowym nie powinno opierać się tylko na stwierdzeniu, że prąd jest tańszy od paliwa. Trzeba policzyć realny koszt przejechania konkretnego dystansu.",
      },
      {
        type: "heading",
        text: "Przykładowe założenia",
      },
      {
        type: "list",
        items: [
          "miesięczny przebieg: 1500 km",
          "auto elektryczne: 18 kWh/100 km",
          "straty ładowania: 8%",
          "cena prądu: 0,90 zł/kWh",
          "auto benzynowe: 7 l/100 km",
          "cena benzyny: 6,70 zł/l",
        ],
      },
      {
        type: "heading",
        text: "Koszt jazdy autem elektrycznym",
      },
      {
        type: "paragraph",
        text:
          "Najpierw liczymy, ile energii auto zużyje podczas jazdy. Przy przebiegu 1500 km miesięcznie i zużyciu 18 kWh/100 km otrzymujemy:",
      },
      {
        type: "calculation",
        text:
          "1500 / 100 × 18 = 270 kWh miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "To jednak energia zużyta przez auto. Przy ładowaniu występują straty, więc z gniazdka trzeba pobrać trochę więcej energii.",
      },
      {
        type: "calculation",
        text:
          "270 × 1,08 = 291,6 kWh pobrane z gniazdka",
      },
      {
        type: "paragraph",
        text:
          "Teraz mnożymy energię pobraną z gniazdka przez cenę prądu.",
      },
      {
        type: "calculation",
        text:
          "291,6 × 0,90 = 262,44 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie koszt jazdy autem elektrycznym wynosi około 262 zł miesięcznie.",
      },
      {
        type: "heading",
        text: "Koszt jazdy autem benzynowym",
      },
      {
        type: "paragraph",
        text:
          "Dla auta benzynowego liczymy koszt paliwa na podstawie przebiegu, spalania i ceny benzyny.",
      },
      {
        type: "calculation",
        text:
          "1500 / 100 × 7 × 6,70 = 703,50 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie koszt jazdy autem benzynowym wynosi około 704 zł miesięcznie.",
      },
      {
        type: "heading",
        text: "Różnica miesięczna",
      },
      {
        type: "calculation",
        text:
          "704 - 262 = 442 zł miesięcznie",
      },
      {
        type: "paragraph",
        text:
          "Przy takich założeniach auto elektryczne jest tańsze w samej jeździe o około 442 zł miesięcznie. Rocznie daje to około 5300 zł różnicy.",
      },
      {
        type: "calculation",
        text:
          "442 × 12 = 5304 zł rocznie",
      },
      {
        type: "heading",
        text: "Kiedy EV wychodzi najkorzystniej?",
      },
      {
        type: "list",
        items: [
          "gdy auto jest ładowane głównie w domu",
          "gdy cena prądu jest niska",
          "gdy miesięczny przebieg jest dość wysoki",
          "gdy auto elektryczne ma niskie zużycie energii",
          "gdy porównywane auto spalinowe ma wysokie spalanie",
        ],
      },
      {
        type: "heading",
        text: "Kiedy przewaga EV może być mniejsza?",
      },
      {
        type: "list",
        items: [
          "gdy często korzystasz z drogich szybkich ładowarek",
          "gdy miesięczny przebieg jest niski",
          "gdy auto elektryczne zużywa dużo energii",
          "gdy auto spalinowe jest bardzo oszczędne",
          "gdy różnica w cenie zakupu auta jest bardzo duża",
        ],
      },
      {
        type: "paragraph",
        text:
          "Warto też pamiętać, że ten przykład porównuje tylko koszt jazdy, czyli energię i paliwo. Pełna opłacalność zależy jeszcze od ceny zakupu auta, utraty wartości, ubezpieczenia, serwisu i sposobu użytkowania.",
      },
      {
        type: "heading",
        text: "Najważniejszy wniosek",
      },
      {
        type: "paragraph",
        text:
          "Auto elektryczne najczęściej wygrywa kosztowo wtedy, gdy jest regularnie ładowane tanim prądem i pokonuje wystarczająco dużo kilometrów. Jeżeli jednak ktoś jeździ mało i ładuje głównie na drogich ładowarkach, różnica może być znacznie mniejsza.",
      },
    ],
  },
  {
    slug: "ile-kosztuje-trasa-300-500-1000-km",

    title: "Ile kosztuje trasa 300, 500 i 1000 km samochodem?",

    excerpt:
      "Konkretne przykłady kosztu trasy przy różnych dystansach, spalaniu 7 l/100 km i cenie paliwa 6,70 zł/l.",

    category: "Trasa",

    readingTime: "5 min czytania",

    calculatorHref: "/trasa",

    calculatorLabel: "Policz koszt własnej trasy",

    content: [
      {
        type: "paragraph",
        text:
          "Koszt trasy samochodem można policzyć dość prosto, ale trzeba jasno przyjąć założenia. Najważniejsze dane to dystans, spalanie auta i cena paliwa.",
      },
      {
        type: "paragraph",
        text:
          "W tym przykładzie policzymy koszt przejazdu dla trzech dystansów: 300 km, 500 km i 1000 km. To nie są stałe ceny dla każdego auta, tylko przykład pokazujący sposób liczenia.",
      },
      {
        type: "heading",
        text: "Założenia przykładu",
      },
      {
        type: "list",
        items: [
          "spalanie auta: 7 l/100 km",
          "cena paliwa: 6,70 zł/l",
          "liczymy sam koszt paliwa",
          "nie doliczamy autostrad, parkingów ani innych opłat",
        ],
      },
      {
        type: "heading",
        text: "Podstawowy wzór",
      },
      {
        type: "calculation",
        text:
          "Koszt paliwa = dystans / 100 × spalanie × cena paliwa",
      },
      {
        type: "paragraph",
        text:
          "Najpierw warto policzyć koszt przejechania 100 km. Przy spalaniu 7 l/100 km i cenie paliwa 6,70 zł/l wygląda to tak:",
      },
      {
        type: "calculation",
        text:
          "7 × 6,70 = 46,90 zł za 100 km",
      },
      {
        type: "paragraph",
        text:
          "To oznacza, że w tym przykładzie każde 100 km kosztuje około 47 zł samego paliwa.",
      },
      {
        type: "heading",
        text: "Ile kosztuje trasa 300 km?",
      },
      {
        type: "calculation",
        text:
          "300 / 100 × 7 × 6,70 = 140,70 zł",
      },
      {
        type: "paragraph",
        text:
          "Trasa 300 km w jedną stronę kosztuje około 141 zł. Jeżeli jest to podróż w obie strony, koszt paliwa wyniesie około 281 zł.",
      },
      {
        type: "calculation",
        text:
          "140,70 × 2 = 281,40 zł",
      },
      {
        type: "heading",
        text: "Ile kosztuje trasa 500 km?",
      },
      {
        type: "calculation",
        text:
          "500 / 100 × 7 × 6,70 = 234,50 zł",
      },
      {
        type: "paragraph",
        text:
          "Trasa 500 km w jedną stronę kosztuje około 235 zł. W obie strony będzie to około 469 zł.",
      },
      {
        type: "calculation",
        text:
          "234,50 × 2 = 469 zł",
      },
      {
        type: "heading",
        text: "Ile kosztuje trasa 1000 km?",
      },
      {
        type: "calculation",
        text:
          "1000 / 100 × 7 × 6,70 = 469 zł",
      },
      {
        type: "paragraph",
        text:
          "Przejazd 1000 km kosztuje około 469 zł samego paliwa. Jeżeli mówimy o trasie 1000 km w jedną stronę i powrocie, koszt paliwa rośnie do około 938 zł.",
      },
      {
        type: "calculation",
        text:
          "469 × 2 = 938 zł",
      },
      {
        type: "heading",
        text: "Koszt na osobę",
      },
      {
        type: "paragraph",
        text:
          "Jeżeli autem jedzie kilka osób, koszt można podzielić. To często pokazuje, że podróż samochodem może być dużo tańsza dla jednej osoby, jeśli koszty są dzielone między pasażerów.",
      },
      {
        type: "calculation",
        text:
          "Trasa 500 km w obie strony: 469 zł\n2 osoby: 469 / 2 = 234,50 zł na osobę\n4 osoby: 469 / 4 = 117,25 zł na osobę",
      },
      {
        type: "heading",
        text: "Co może zwiększyć koszt trasy?",
      },
      {
        type: "list",
        items: [
          "wyższe spalanie przy jeździe autostradowej",
          "jazda z dużą prędkością",
          "korki i postoje",
          "opłaty za autostrady",
          "parking",
          "promy albo inne opłaty drogowe",
          "większe obciążenie auta",
        ],
      },
      {
        type: "paragraph",
        text:
          "Dlatego w praktyce warto doliczyć dodatkowe koszty. Sama cena paliwa nie zawsze pokazuje pełny koszt wyjazdu.",
      },
      {
        type: "heading",
        text: "Przykład z dodatkowymi kosztami",
      },
      {
        type: "paragraph",
        text:
          "Załóżmy, że trasa 500 km w obie strony kosztuje 469 zł paliwa, ale dochodzi jeszcze 80 zł za autostrady i parking.",
      },
      {
        type: "calculation",
        text:
          "469 + 80 = 549 zł całkowitego kosztu podróży",
      },
      {
        type: "paragraph",
        text:
          "Przy dwóch osobach będzie to około 275 zł na osobę, a przy czterech osobach około 137 zł na osobę.",
      },
      {
        type: "heading",
        text: "Najważniejszy wniosek",
      },
      {
        type: "paragraph",
        text:
          "Koszt trasy zależy głównie od dystansu, spalania i ceny paliwa, ale przy dłuższych wyjazdach warto doliczyć też opłaty dodatkowe. Najdokładniejszy wynik uzyskasz, wpisując własne dane w kalkulatorze kosztu trasy.",
      },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}