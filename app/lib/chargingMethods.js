export const chargingMethods = [
  {
    value: "wallbox",
    label: "Wallbox / ładowanie domowe",
    lossPercent: 8,
    description:
      "Najczęstszy przypadek przy ładowaniu auta w domu. Przyjmujemy umiarkowane straty ładowania.",
  },
  {
    value: "socket",
    label: "Zwykłe gniazdko 230 V",
    lossPercent: 18,
    description:
      "Ładowanie z gniazdka jest wolniejsze i zwykle mniej efektywne, dlatego przyjmujemy wyższe straty.",
  },
  {
    value: "dc",
    label: "Szybka ładowarka DC",
    lossPercent: 10,
    description:
      "Ładowanie szybkie może mieć różne straty zależnie od auta, temperatury baterii i mocy ładowania.",
  },
  {
    value: "custom",
    label: "Własna wartość",
    lossPercent: null,
    description:
      "Wybierz tę opcję, jeśli znasz własne dane albo chcesz samodzielnie przyjąć konkretną stratę ładowania.",
  },
];

export function getChargingMethod(value) {
  return (
    chargingMethods.find((method) => method.value === value) ??
    chargingMethods[0]
  );
}