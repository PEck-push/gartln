// src/data/rasen.js

export const rasen = {
  id: "hausrasen-gebrauchsrasen",
  name: "Gebrauchsrasen",
  sorte: "Spiel- und Sportrasen",
  beschreibung:
    "Ein gesunder, dichter Rasen ist kein Zufallsprodukt, sondern das Ergebnis konsequenter und richtig getakteter Pflege. Rasen braucht kontinuierlich Nährstoffe und mechanische Pflege, um Moos und Unkraut keine Chance zu geben.",
  phIdeal: "5.5 – 6.5",
  wasserBedarf: "Hoch",
  licht: "Sonne bis Halbschatten",

  dos: [
    "Selten aber durchdringend gießen (1–2× pro Woche je 15–20 L/m²) – zwingt Wurzeln in die Tiefe.",
    "Immer mit scharfen Klingen mähen – stumpfe Messer fransen Halme aus (Grauschleier, Krankheitsanfälligkeit).",
    "Die 1/3-Regel: nie mehr als ein Drittel der Halmlänge auf einmal abschneiden.",
  ],
  donts: [
    "Im Hochsommer nicht zu kurz mähen (5–6 cm lassen – schützt Boden vor Verdunstung).",
    "Sand niemals ohne vorheriges Aerifizieren auf verdichteten Lehmboden bringen (betonartige Verdichtung).",
    "Täglich ein bisschen gießen → nur Flachwurzeln → Rasen vertrocknet beim ersten Hitzetag.",
  ],

  // Mähkalender: Empfohlene Schnitthöhe + Frequenz pro Monat
  maehKalender: [
    { monat: 1,  label: "Jänner",    frequenz: "Kein Schnitt", hoehe: "–",      aktiv: false },
    { monat: 2,  label: "Februar",   frequenz: "Kein Schnitt", hoehe: "–",      aktiv: false },
    { monat: 3,  label: "März",      frequenz: "1× / Monat",   hoehe: "4–5 cm", aktiv: true  },
    { monat: 4,  label: "April",     frequenz: "1–2× / Woche", hoehe: "3–4 cm", aktiv: true  },
    { monat: 5,  label: "Mai",       frequenz: "1–2× / Woche", hoehe: "3–4 cm", aktiv: true  },
    { monat: 6,  label: "Juni",      frequenz: "1× / Woche",   hoehe: "4–5 cm", aktiv: true  },
    { monat: 7,  label: "Juli",      frequenz: "1× / Woche",   hoehe: "5–6 cm", aktiv: true  },
    { monat: 8,  label: "August",    frequenz: "1× / Woche",   hoehe: "5–6 cm", aktiv: true  },
    { monat: 9,  label: "September", frequenz: "1× / Woche",   hoehe: "4–5 cm", aktiv: true  },
    { monat: 10, label: "Oktober",   frequenz: "2× / Monat",   hoehe: "4–5 cm", aktiv: true  },
    { monat: 11, label: "November",  frequenz: "1× / Monat",   hoehe: "4 cm",   aktiv: true  },
    { monat: 12, label: "Dezember",  frequenz: "Kein Schnitt", hoehe: "–",      aktiv: false },
  ],

  // Aufgaben mit monatIndex für die To-Do-Logik
  aufgaben: [
    {
      titel: "1. Frühlingsdüngung (Saisonstart)",
      typ: "Duengung",
      zeitraum: "März / April",
      monatIndex: 3,
      wiederkehrend: true,
      icon: "🌱",
      prioritaet: "hoch",
      anleitung:
        "Wenn Bodentemperatur konstant über 10°C: stickstoffbetonten Frühjahrsdünger ausbringen. Diese Düngung stärkt den Rasen optimal, bevor er 2–3 Wochen später beim großen Rasen-Service beansprucht wird.",
    },
    {
      titel: "Das große Rasen-Service",
      typ: "Pflege",
      zeitraum: "April (2–3 Wochen nach Frühlingsdüngung)",
      monatIndex: 4,
      wiederkehrend: true,
      icon: "⚙️",
      prioritaet: "hoch",
      anleitung:
        "Die exakte Reihenfolge ist entscheidend:\n1. Mähen (3–4 cm)\n2. Vertikutieren (3–5 mm tief)\n3. Striegeln/Kämmen\n4. Aerifizieren (7–10 cm tiefe Löcher)\n5. Sanden (3–6 L Quarzsand/m²)\n6. Nachsäen\n7. Wässern (2–3 Wochen gleichmäßig feucht)",
      schritte: [
        { nr: 1, aktion: "Mähen", detail: "So kurz wie möglich: ca. 3–4 cm Schnitthöhe." },
        { nr: 2, aktion: "Vertikutieren", detail: "Grasnarbe 3–5 mm tief anritzen. Entfernt Rasenfilz und Moos." },
        { nr: 3, aktion: "Striegeln / Kämmen", detail: "Mit Rasenlüfter (Federzinken) gelöstes, totes Material komplett entfernen." },
        { nr: 4, aktion: "Aerifizieren", detail: "Mit Hohlspoons 7–10 cm tiefe Löcher stanzen. Bricht Verdichtungen auf, bringt Sauerstoff an die Wurzeln." },
        { nr: 5, aktion: "Sanden", detail: "3–6 Liter Quarzsand (Körnung 0–2 mm) pro m². Mit Rasenrakel oder Besen in Löcher und Narbe einarbeiten." },
        { nr: 6, aktion: "Nachsäen", detail: "Rasensamen aufbringen, optional mit Sand mischen für gleichmäßige Ausbringung." },
        { nr: 7, aktion: "Wässern", detail: "2–3 Wochen lang stetig leicht feucht halten, damit Saatgut keimen kann." },
      ],
    },
    {
      titel: "2. Sommerdüngung",
      typ: "Duengung",
      zeitraum: "Juni / Juli",
      monatIndex: 6,
      wiederkehrend: true,
      icon: "☀️",
      prioritaet: "mittel",
      anleitung:
        "Ausgewogenen Sommerdünger ausbringen (moderater Stickstoff, etwas höherer Kaliumanteil für Trockenheitsresistenz). Nur auf trockenen Rasen streuen, anschließend gut einwässern – sonst Verbrennungen!",
    },
    {
      titel: "3. Herbstdüngung",
      typ: "Duengung",
      zeitraum: "September / Oktober",
      monatIndex: 9,
      wiederkehrend: true,
      icon: "🍂",
      prioritaet: "hoch",
      anleitung:
        "Zwingend einen kaliumbetonten Herbstdünger verwenden! Kalium stärkt Zellwände, macht Gräser widerstandsfähig gegen Frost und reduziert Schneeschimmel. Stickstoff nur noch minimal.",
    },
  ],
};

// Gibt alle Rasen-Aufgaben für einen bestimmten Monat zurück
export function getRasenTasksForMonth(monthIndex) {
  return rasen.aufgaben.filter((a) => a.monatIndex === monthIndex);
}

// Gibt die Mäh-Info für den aktuellen Monat zurück
export function getMaehInfoForMonth(monthIndex) {
  return rasen.maehKalender.find((m) => m.monat === monthIndex) || null;
}
