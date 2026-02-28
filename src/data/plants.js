// src/data/plants.js
// Konvertiert aus den Markdown-Dateien – zentrales Daten-Array

export const plants = [
  {
    id: "carex-comans-irish-green",
    name: "Neuseeland-Segge",
    sorte: "Irish Green",
    botanischerName: "Carex comans",
    kategorie: "Staude",
    bildUrl: "/assets/images/carex-irish-green.jpg",
    farbe: "#4F7942",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -12,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 7.0",
    beschreibung:
      "Elegantes, wintergrünes Ziergras mit schopfartigem, überhängendem Wuchs. Behält auch im Winter ein sattes, frisches Grün. Ideal als Strukturgeber oder in Kübelarrangements.",
    dos: [
      "Regelmäßig Feuchtigkeit prüfen (Fingertest 2 cm tief).",
      "Einmal im Jahr im Frühjahr die toten Halme auskämmen.",
      "Bei Topfhaltung für 5 cm Blähton-Drainage sorgen.",
    ],
    donts: [
      "Keinen radikalen Rückschnitt – Pflanze stirbt oder treibt kümmerlich aus.",
      "Keine Staunässe – führt zu Wurzelfäule.",
      "Keine pralle Mittagssonne ohne ausreichend Wasser.",
    ],
    nachbarnGut: ["Hosta", "Heuchera", "Tiarella", "Farne"],
    nachbarnSchlecht: ["Lavandula", "Rosmarinus"],
    aufgaben: [
      {
        titel: "Ausputzen statt Rückschnitt",
        typ: "Pflege",
        zeitraum: "Anfang bis Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Carex comans ist wintergrün – niemals radikal zurückschneiden! Kämme mit den Fingern (Handschuhe tragen!) abgestorbene, braune Halme aus dem Schopf. Nur frostgeschädigte Spitzen um max. 3–5 cm einkürzen.",
      },
      {
        titel: "Organische Düngung",
        typ: "Duengung",
        zeitraum: "April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Handvoll reifen Kompost oder leichte Gabe Hornspäne oberflächlich einarbeiten. Mineralische Kunstdünger mit hohem Salzgehalt vermeiden.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Nach den Eisheiligen (Mitte Mai)",
        monatIndex: 5,
        wiederkehrend: false,
        anleitung:
          "So tief einpflanzen wie im Topf. Abstand 30–35 cm (ca. 8–10 Pflanzen/m²). 2 Wochen lang durchdringend feucht halten.",
      },
      {
        titel: "Winterschutz bei Frost",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "In kalten Lagen Wurzelbereich mit 5 cm Laub oder Tannenreisig abdecken. Bei Kahlfrost mit Vlies schattieren.",
      },
    ],
  },
  {
    id: "rote-johannisbeere-jonkheer-van-tets",
    name: "Rote Johannisbeere",
    sorte: "Jonkheer van Tets",
    botanischerName: "Ribes rubrum",
    kategorie: "Obst",
    bildUrl: "/assets/images/rote-johannisbeere.jpg",
    farbe: "#D32F2F",
    licht: "Sonne",
    bodenArt: "Lehmig",
    wasserBedarf: "Hoch",
    regenToleranz: "Hoch",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.5 – 7.0",
    beschreibung:
      "Eine der wertvollsten frühen Sorten. Sehr lange Trauben, große leuchtend rote Beeren. Reift ab dem Johannistag (24. Juni) – ideal für Gelees und Kuchenbeläge.",
    dos: [
      "Mulchschicht erhalten – Flachwurzler hasst austrocknende Oberböden.",
      "Ab Juni Vogelschutznetz installieren.",
      "Holz regelmäßig verjüngen (nur 1–3-jähriges Holz liefert Top-Erträge).",
    ],
    donts: [
      "Keine tiefe Bodenbearbeitung – zerstört Saugwurzeln.",
      "Keine Stickstoff-Überdüngung – macht Triebe weich und anfällig.",
    ],
    nachbarnGut: ["Wermut", "Ringelblumen", "Knoblauch"],
    nachbarnSchlecht: ["Himbeeren"],
    aufgaben: [
      {
        titel: "Erhaltungsschnitt",
        typ: "Schnitt",
        zeitraum: "Spätwinter (Februar), vor dem Austrieb",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Gerüst aus 8–10 kräftigen Haupttrieben anstreben. 1. Alle Triebe älter als 3 Jahre (dunkle Rinde) bodennah entfernen. 2. Seitentriebe der verbleibenden Ruten auf 2–3 Augen (ca. 5 cm) einkürzen. 3. Schwache Bodentriebe entfernen, 2–3 neue kräftige Ruten als Ersatz stehen lassen.",
      },
      {
        titel: "Hauptdüngung",
        typ: "Duengung",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "2–3 Liter reifen Kompost und 100 g Hornspäne pro Strauch flach einarbeiten. Vorsicht: Flachwurzler – nicht tief hacken!",
      },
      {
        titel: "Mulchen",
        typ: "Pflege",
        zeitraum: "Mai",
        monatIndex: 5,
        wiederkehrend: true,
        anleitung:
          "5 cm dicke Schicht aus Rasenschnitt oder angerottetem Laub aufbringen. Hält Feuchtigkeit und schützt Flachwurzeln vor Hitze.",
      },
      {
        titel: "Haupternte",
        typ: "Ernte",
        zeitraum: "Ende Juni bis Mitte Juli",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Komplette Trauben (Rispen) pflücken, wenn alle Beeren tiefrot gefärbt sind. Frühsorte – Beeren rieseln leicht, daher zügig verarbeiten.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Oktober bis November (alternativ März)",
        monatIndex: 10,
        wiederkehrend: false,
        anleitung:
          "Strauch ca. 5–10 cm tiefer als im Topf einpflanzen, um Basistriebe anzuregen. Pflanzabstand: 1,5 m. Nach dem Pflanzen kräftig einschlämmen.",
      },
    ],
  },
  {
    id: "brombeere-navaho",
    name: "Brombeere",
    sorte: "Navaho",
    botanischerName: "Rubus fruticosus 'Navaho'",
    kategorie: "Obst",
    bildUrl: "/assets/images/brombeere-navaho.jpg",
    farbe: "#3D0C2E",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -18,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Aufrecht wachsende, dornenlose Brombeere. Weniger Platzbedarf als rankende Sorten, sehr intensives Aroma, Erntezeit von Juli bis zum ersten Frost.",
    dos: [
      "Mulchen – Waldrandpflanze braucht ständige Mulchschicht.",
      "Sonniger Standort für hohen Zuckergehalt.",
      "Regelmäßig alle 2 Tage ernten (verhindert Essigfliegen).",
    ],
    donts: [
      "Keine Staunässe – führt zu Wurzelfäule (Phytophthora).",
      "Kein tiefer Rückschnitt im Sommer.",
      "Keine Bodenbearbeitung mit der Hacke.",
    ],
    nachbarnGut: ["Erdbeeren", "Knoblauch", "Ringelblumen", "Zitronenmelisse"],
    nachbarnSchlecht: ["Himbeeren", "Tomaten", "Kartoffeln"],
    aufgaben: [
      {
        titel: "Hauptschnitt (Erziehung)",
        typ: "Schnitt",
        zeitraum: "Februar (an frostfreien Tagen)",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "1. Abgetragene Ruten (dunkle Rinde) bodennah entfernen (max. 2 cm über Boden). 2. Einjährige Ruten (helle Rinde): 5–7 kräftige Ruten stehen lassen und am Gerüst fächern. 3. Seitentriebe auf 2–3 Augen (ca. 10–15 cm) einkürzen.",
      },
      {
        titel: "Start-Düngung",
        typ: "Duengung",
        zeitraum: "Anfang März (vor dem Austrieb)",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Ca. 50–80 g organischen Beeren-Langzeitdünger oder reifen Kompost flach einarbeiten. Nicht zu tief hacken.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "März bis April oder Oktober",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so groß wie der Ballen. Oberkante des Ballens 2–3 cm mit Erde bedecken. Abstand: 100–150 cm.",
      },
      {
        titel: "Nachdüngung & Mulchen",
        typ: "Pflege",
        zeitraum: "Juni",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Mulchschicht aus Rasenschnitt oder Rindenhumus erneuern. Bei schwachem Wuchs kleine Gabe Hornmehl (30 g).",
      },
      {
        titel: "Haupternte",
        typ: "Ernte",
        zeitraum: "Juli bis Oktober",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Nur vollreife (tiefschwarze, leicht glänzende) Früchte pflücken, die sich leicht vom Zapfen lösen. Alle 2 Tage durchpflücken.",
      },
    ],
  },
  {
    id: "himbeere-autumn-bliss",
    name: "Himbeere",
    sorte: "Autumn Bliss",
    botanischerName: "Rubus idaeus 'Autumn Bliss'",
    kategorie: "Obst",
    bildUrl: "/assets/images/himbeere-autumn-bliss.jpg",
    farbe: "#D21F3C",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Mittel",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Beliebte Herbsthimbeere – trägt am einjährigen Holz, daher kein kompliziertes Aussortieren. Robust gegen Wurzelfäule, liefert ab August kontinuierlich große, aromatische Früchte.",
    dos: [
      "Boden immer mulchen – Flachwurzeln vor Austrocknung schützen.",
      "Bei Trockenheit seltener aber intensiv wässern.",
      "Ab August feinmaschiges Netz gegen Vögel und Kirschessigfliege.",
    ],
    donts: [
      "Kein Hacken im Wurzelbereich.",
      "Keine Überkopf-Bewässerung (fördert Grauschimmel).",
      "Keine Staunässe.",
    ],
    nachbarnGut: ["Knoblauch", "Ringelblumen", "Vergissmeinnicht", "Farn"],
    nachbarnSchlecht: ["Brombeeren", "Erdbeeren", "Tomaten"],
    aufgaben: [
      {
        titel: "Rückschnitt (Bodennah)",
        typ: "Schnitt",
        zeitraum: "Februar bis Anfang März",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Herbsthimbeere trägt am einjährigen Holz. Alle abgetragenen Ruten des Vorjahres komplett bodennah (2–5 cm über der Erde) abschneiden. Scharfe Rosenschere verwenden.",
      },
      {
        titel: "Grunddüngung",
        typ: "Duengung",
        zeitraum: "März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Ca. 3–5 Liter reifen Kompost pro m² aufbringen. Zusätzlich 60 g/m² Beerendünger oder Hornspäne. Nur oberflächlich einharken (Flachwurzler!).",
      },
      {
        titel: "Mulchschicht erneuern",
        typ: "Pflege",
        zeitraum: "April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "5 cm dicke Schicht aus Rindenmulch, Grasschnitt oder Stroh auftragen. Hält Feuchtigkeit und unterdrückt Unkraut.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Oktober bis November oder März bis April",
        monatIndex: 10,
        wiederkehrend: false,
        anleitung:
          "Abstand 40–50 cm. Pflanzloch doppelt so groß wie der Topf. Pflanze nur so tief wie im Topf. Wurzeln vorsichtig ausbreiten.",
      },
      {
        titel: "Haupternte",
        typ: "Ernte",
        zeitraum: "August bis zum ersten Frost",
        monatIndex: 8,
        wiederkehrend: true,
        anleitung:
          "Früchte ernten, sobald sie sich leicht lösen. Alle 2 Tage ernten – verhindert Überreife und Schimmelbildung (Botrytis).",
      },
    ],
  },
  {
    id: "heidelbeere-bluecrop",
    name: "Kulturheidelbeere",
    sorte: "Bluecrop",
    botanischerName: "Vaccinium corymbosum 'Bluecrop'",
    kategorie: "Obst",
    bildUrl: "/assets/images/heidelbeere-bluecrop.jpg",
    farbe: "#4682B4",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Hoch",
    regenToleranz: "Hoch",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "3.5 – 4.5",
    beschreibung:
      "Wichtigste Welthandelssorte. Ertragreich, robust, große feste Früchte. Spektakuläre rote Herbstfärbung. Kritisch: Bodenbeschaffenheit entscheidet über Erfolg – benötigt Moorbeet.",
    dos: [
      "Ausschließlich mit kalkfreiem Regenwasser gießen.",
      "Ab Juli Vogelschutznetz anbringen.",
      "Boden immer gleichmäßig feucht halten (Daumenprobe).",
    ],
    donts: [
      "Kein Hacken – Flachwurzler!",
      "Kein Standard-Kompost (zu alkalisch).",
      "Keine Staunässe trotz hohem Wasserbedarf.",
    ],
    nachbarnGut: ["Cranberries", "Preiselbeeren", "Rhododendron", "Azaleen"],
    nachbarnSchlecht: ["Kohlgemüse", "Erbsen", "Bohnen"],
    aufgaben: [
      {
        titel: "Erhaltungsschnitt",
        typ: "Schnitt",
        zeitraum: "Februar bis Anfang März",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Trägt am besten am 2- bis 3-jährigen Holz. Alle Triebe älter als 5 Jahre (rissige, graue Rinde) bodennah entfernen. Schwache, liegende oder nach innen wachsende Zweige entfernen. Ziel: 8–12 kräftige Haupttriebe.",
      },
      {
        titel: "Säurebetonte Düngung – 1. Gabe",
        typ: "Duengung",
        zeitraum: "Anfang April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Speziellen Beeren- oder Rhododendrondünger verwenden (physiologisch sauer). Erste Gabe: 50 g/m² beim Austrieb. Keine chloridhaltigen Dünger und kein Kalk!",
      },
      {
        titel: "Mulchen erneuern",
        typ: "Pflege",
        zeitraum: "April (ganzjährig)",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "5–10 cm dicke Schicht aus Nadelstreu oder grober Pinienrinde aufbringen. Hält Feuchtigkeit, unterdrückt Beikraut und säuert beim Zersetzen leicht an.",
      },
      {
        titel: "Säurebetonte Düngung – 2. Gabe",
        typ: "Duengung",
        zeitraum: "Mitte Juni",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Zweite Gabe: 30 g/m² nach der Blüte.",
      },
      {
        titel: "Ernte",
        typ: "Ernte",
        zeitraum: "Mitte Juli bis August",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Nur vollständig tiefblau gefärbte Früchte ernten, die sich leicht lösen. Nach erster Blaufärbung noch 2–3 Tage für volles Aroma warten. Reift folgernd über mehrere Wochen.",
      },
      {
        titel: "Pflanzung im Moorbeet",
        typ: "Pflanzung",
        zeitraum: "März bis April oder Oktober",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Grube 40–50 cm tief, 80 cm breit ausheben. Seiten (nicht Boden!) mit Folie auskleiden. Mit Rhododendronerde oder Torf-Rindenhumus-Gemisch befüllen.",
      },
    ],
  },
  {
    id: "osmanthus-burkwoodii",
    name: "Frühlingsduftblüte",
    sorte: "Burkwoodii",
    botanischerName: "Osmanthus × burkwoodii",
    kategorie: "Gehölz",
    bildUrl: "/assets/images/osmanthus-burkwoodii.jpg",
    farbe: "#4F7942",
    licht: "Sonne bis Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -15,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.5 – 7.0",
    beschreibung:
      "Immergrüner, langsam wachsender Strauch mit intensivem, jasminähnlichem Duft im April/Mai. Dichtes dunkelgrünes Laub – ideal als Solitär, für niedrige Hecken oder Kübelhaltung.",
    dos: [
      "Schnittzeitpunkt einhalten: immer direkt nach der Blüte.",
      "Mulchschicht aus Rindenmulch.",
      "Windgeschützten Standort wählen.",
    ],
    donts: [
      "Keine Staunässe.",
      "Kein Spätwinter-Schnitt (entfernt die Blüte des Jahres!).",
      "Im Winter an frostfreien Tagen gießen.",
    ],
    nachbarnGut: ["Rhododendron", "Kamelien", "Japanischer Ahorn", "Funkien"],
    nachbarnSchlecht: ["Birken", "Wucherblumen"],
    aufgaben: [
      {
        titel: "Frühjahrsdüngung",
        typ: "Duengung",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "50–70 g organischen Langzeitdünger (z.B. Hornspäne) im Traufbereich ausbringen, leicht einharken und wässern.",
      },
      {
        titel: "Form- und Erhaltungsschnitt",
        typ: "Schnitt",
        zeitraum: "Direkt nach der Blüte (Ende Mai bis Juni)",
        monatIndex: 5,
        wiederkehrend: true,
        anleitung:
          "Blüht am zweijährigen Holz – Schnitt erst nach der Blüte! Zu lange Triebe bis auf die nächste Verzweigung zurückschneiden. Bei Hecken Heckenschere verwenden. Keinen Schnitt ins alte Holz ohne Blätter.",
      },
      {
        titel: "Wässerung bei Trockenheit",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Oberste 5 cm Boden prüfen. Wenn trocken, durchdringend mit ca. 20 Litern pro m² wässern. Bei Kübelhaltung alle 2–3 Tage kontrollieren.",
      },
      {
        titel: "Winterschutz (Jungpflanzen)",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "10 cm dicke Schicht Herbstlaub oder Rindenmulch im Wurzelbereich. Bei anhaltendem Kahlfrost (> -10°C) Krone mit Vlies umwickeln.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "März bis April oder Oktober",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so groß wie Ballen. Erde mit ca. 10 l reifem Kompost mischen. Nach Einsetzen kräftig einschlämmen.",
      },
    ],
  },
  {
    id: "cornus-kousa-var-chinensis",
    name: "Chinesischer Blütenhartriegel",
    sorte: "var. chinensis",
    botanischerName: "Cornus kousa var. chinensis",
    kategorie: "Gehölz",
    bildUrl: "/assets/images/cornus-kousa.jpg",
    farbe: "#F5F5DC",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Eines der elegantesten Ziergehölze. Größere, zahlreichere cremeweiße Hochblätter als die Stammform. Himbeerartige essbare Früchte im Spätsommer, spektakuläre Scharlach-Herbstfärbung.",
    dos: [
      "Möglichst nur weiches, kalkfreies Wasser verwenden.",
      "Als Solitär pflanzen – etagenförmige Krone muss zur Geltung kommen.",
      "Wurzelbereich nicht hacken oder graben (Flachwurzler).",
    ],
    donts: [
      "Keine Staunässe.",
      "Kein Kalkdünger.",
      "Keinen Radikalschnitt – zerstört den malerischen Wuchs für Jahre.",
    ],
    nachbarnGut: ["Rhododendron", "Azaleen", "Japanischer Ahorn", "Hosta", "Farne"],
    nachbarnSchlecht: ["Birken", "aggressive Bodendecker"],
    aufgaben: [
      {
        titel: "Düngung (Grunddüngung)",
        typ: "Duengung",
        zeitraum: "März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "2–3 Liter reifen Kompost im Traufbereich ausbringen. Zusätzlich 50 g Hornspäne oberflächlich einarbeiten (nicht tief graben – Flachwurzler!).",
      },
      {
        titel: "Erhaltungsschnitt",
        typ: "Schnitt",
        zeitraum: "Ende Februar",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Nur abgestorbene oder nach innen wachsende Äste entfernen. Kein starker Rückschnitt. Immer auf Astring schneiden.",
      },
      {
        titel: "Mulchschicht erneuern",
        typ: "Pflege",
        zeitraum: "April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "5 cm dicke Schicht aus Rindenmulch oder Pinienrinde auftragen.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Oktober bis November oder März bis April",
        monatIndex: 10,
        wiederkehrend: false,
        anleitung:
          "Grube doppelt so groß wie der Wurzelballen. Aushub mit Laubkompost oder Rhododendronerde mischen. Mit mindestens 10 Litern kalkfreiem Wasser einschlämmen.",
      },
    ],
  },
  {
    id: "glanzmispel-red-robin",
    name: "Glanzmispel",
    sorte: "Red Robin",
    botanischerName: "Photinia x fraseri 'Red Robin'",
    kategorie: "Gehölz",
    bildUrl: "/assets/images/glanzmispel-red-robin.jpg",
    farbe: "#B22222",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Mittel",
    frosttemp: -18,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Star unter den immergrünen Heckenpflanzen. Leuchtend roter Austrieb im Frühjahr, ganzjähriger Sichtschutz, weiße Schirmrispen im Mai/Juni. Sehr schnittverträglich.",
    dos: [
      "Sonnigsten Platz wählen für intensivstes Rot.",
      "Regelmäßig einkürzen für Dichte und Leuchtkraft.",
      "An frostfreien Wintertagen gießen (Immergrüne verdunstet Wasser).",
    ],
    donts: [
      "Keine Staunässe – führt zu Wurzelfäule und Blattabwurf.",
      "Kein Schnitt nach Ende August – neue Triebe reifen nicht aus.",
      "Keine extrem kalkreichen Böden.",
    ],
    nachbarnGut: ["Kirschlorbeer", "Lavendel", "Buchsbaum", "Chinaschilf"],
    nachbarnSchlecht: ["große Rhododendren ohne pH-Anpassung"],
    aufgaben: [
      {
        titel: "Hauptschnitt für Form und Dichte",
        typ: "Schnitt",
        zeitraum: "Ende Februar bis Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Kräftigen Rückschnitt vor dem ersten Austrieb durchführen. Triebe des Vorjahres um ca. 30–50 % einkürzen. Ca. 5 mm oberhalb einer nach außen gerichteten Knospe schneiden. Totes/erfrorenes Holz direkt an der Basis entfernen.",
      },
      {
        titel: "Saisonale Düngung",
        typ: "Duengung",
        zeitraum: "Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Organischen Langzeitdünger (Hornspäne oder Gehölzdünger) flach einarbeiten. Dosierung: ca. 60–80 g/m². Danach leicht wässern.",
      },
      {
        titel: "Sommerschnitt für rote Neuaustriebe",
        typ: "Schnitt",
        zeitraum: "Nach der Blüte (Ende Juni)",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Verblühte Rispen und Triebspitzen um ca. 10–15 cm zurückschneiden. Fördert Verzweigung und sorgt für rote Färbung im Herbst.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "März bis Mai oder September bis Oktober",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so groß wie der Wurzelballen. Aushub mit reifem Kompost mischen. Abstand bei Hecke: 40–50 cm.",
      },
      {
        titel: "Winterschutz für Jungpflanzen",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Wurzelbereich mit 10 cm Laub oder Rindenmulch abdecken. Bei Dauerfrost Krone mit Vlies schattieren.",
      },
    ],
  },
  {
    id: "ginkgo-biloba",
    name: "Ginkgo",
    sorte: "Fächerblattbaum",
    botanischerName: "Ginkgo biloba",
    kategorie: "Gehölz",
    bildUrl: "/assets/images/ginkgo-biloba.jpg",
    farbe: "#8DB600",
    licht: "Sonne",
    bodenArt: "Lehmig",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -30,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.0 – 7.0",
    beschreibung:
      "Lebendes Fossil – extrem widerstandsfähig gegen Schädlinge, Krankheiten und Umweltgifte. Leuchtend goldgelbe Herbstfärbung. Im Gartenbau meist männliche Exemplare.",
    dos: [
      "Standort mit viel Platz wählen – mächtige Krone im Alter.",
      "Geduld in den ersten 5 Jahren – danach beschleunigt sich Wuchs deutlich.",
    ],
    donts: [
      "Keine Staunässe oder Standorte mit Tonschichten.",
      "Keinen Spätsommer-Schnitt (nach August).",
    ],
    nachbarnGut: ["Hosta", "Farne", "Waldsteinia"],
    nachbarnSchlecht: ["Birken", "große Ahorn-Arten"],
    aufgaben: [
      {
        titel: "Grunddüngung",
        typ: "Duengung",
        zeitraum: "März (vor dem Austrieb)",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "3–5 Liter reifen Kompost im Traufbereich ausbringen. Alternativ 50 g/m² Hornspäne leicht einharken.",
      },
      {
        titel: "Erhaltungsschnitt",
        typ: "Schnitt",
        zeitraum: "Februar (vor dem Saftfluss)",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Ginkgos brauchen kaum Schnitt. Nur tote oder quer wachsende Äste am Stamm entfernen (auf Astring). Bei Bedarf zu lange Triebe um max. ein Drittel einkürzen.",
      },
      {
        titel: "Wässerung bei Trockenheit",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Bodenfeuchte in 10 cm Tiefe prüfen. Junge Bäume: 20–40 Liter pro Woche bei > 25°C. Ältere Bäume trockenheitsresistent, profitieren aber von monatlicher Tiefenwässerung.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "März bis April oder Oktober bis November",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so breit und tief wie Wurzelballen. Sohle tiefgründig auflockern (Tiefwurzler). Aushub mit 20 % reifem Kompost mischen.",
      },
    ],
  },
  {
    id: "miscanthus-sinensis-gracillimus",
    name: "Feinhalm-Chinaschilf",
    sorte: "'Gracillimus'",
    botanischerName: "Miscanthus sinensis",
    kategorie: "Staude",
    bildUrl: "/assets/images/miscanthus-gracillimus.jpg",
    farbe: "#8F9779",
    licht: "Sonne",
    bodenArt: "Lehmig",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -22,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.5 – 7.5",
    beschreibung:
      "Eleganter Klassiker unter den Ziergräsern. Straff aufrechter, vasenförmiger Wuchs, feine silbrig-grüne Blätter. 150–180 cm hoch. Ideal als Sichtschutz oder Solitär.",
    dos: [
      "Schutzbrille & Handschuhe beim Schnitt (rasiermesserscharfe Blattränder!).",
      "Im Winter zusammenbinden (verhindert Schneelastschäden).",
      "Sonnigsten Platz wählen.",
    ],
    donts: [
      "Kein Herbstschnitt! Hohle Halme füllen sich mit Wasser → Fäulnis.",
      "Kein Überschuss an Stickstoff (Pflanze fällt um).",
    ],
    nachbarnGut: ["Rudbeckia", "Sedum telephium", "Herbstastern", "Eupatorium"],
    nachbarnSchlecht: ["Schwachwüchsige Stauden", "Rhododendron"],
    aufgaben: [
      {
        titel: "Rückschnitt der Halme",
        typ: "Schnitt",
        zeitraum: "Spätwinter (Ende Februar / Anfang März)",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Zwingend VOR dem Neuaustrieb, aber erst nach stärksten Frösten. Handschuhe tragen! Gesamten Horst mit scharfer Schere zurückschneiden. Schnitthöhe: 10–15 cm über dem Boden.",
      },
      {
        titel: "Organische Startdüngung",
        typ: "Duengung",
        zeitraum: "April (zum Austriebsbeginn)",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Wenn neue Halme ca. 10–20 cm hoch: 2–3 Liter Kompost/m² oder organischen Staudendünger flach einarbeiten. Nicht mit Stickstoff überdüngen!",
      },
      {
        titel: "Teilung / Verjüngung",
        typ: "Pflege",
        zeitraum: "Mai (wenn Horst von innen verkahlt)",
        monatIndex: 5,
        wiederkehrend: true,
        anleitung:
          "Gesamten Wurzelballen ausgraben. Mit scharfem Spaten oder Axt in kräftige Teilstücke teilen. Verholzte, tote Teile entfernen. Nur vitale äußere Teile wieder einpflanzen.",
      },
      {
        titel: "Winterschutz (Zusammenbinden)",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Laub NICHT schneiden. Blattschopf mit Kokosstrick schoberartig zusammenbinden – verhindert Schneelastschäden und Fäulnis im Pflanzenherz.",
      },
    ],
  },
  {
    id: "polystichum-munitum",
    name: "Westamerikanischer Schwertfarn",
    sorte: "Wildform",
    botanischerName: "Polystichum munitum",
    kategorie: "Staude",
    bildUrl: "/assets/images/polystichum-munitum.jpg",
    farbe: "#2E5936",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.0 – 6.5",
    beschreibung:
      "Gigant unter den wintergrünen Farnen. Ledrige, dunkelgrüne Wedel – auch im tiefsten Winter strukturgebend. Extrem robust, langlebig, schneckenresistent. Bildet Horste ohne Ausläufer.",
    dos: [
      "Alle alten Wedel vor dem Neuaustrieb komplett entfernen (Geheimnis für vitale Pflanzen).",
      "Waldboden simulieren: viel verrottendes Laub und Kompost.",
    ],
    donts: [
      "Nicht zu tief pflanzen! Rhizom-Herz muss atmen können.",
      "Keine pralle Mittagssonne.",
    ],
    nachbarnGut: ["Hosta", "Heuchera", "Tiarella", "Rhododendron", "Waldsteinia"],
    nachbarnSchlecht: ["Lavendel", "Rosen", "Trockenkünstler"],
    aufgaben: [
      {
        titel: "Rückschnitt der Vorjahreswedel",
        typ: "Schnitt",
        zeitraum: "Ende Februar bis Anfang März",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Wenn neue, pelzige Farnwedel ('Bischofsstäbe') sich leicht zeigen aber noch nicht entrollt sind: ALLE alten Wedel ca. 2–3 cm über dem Boden abschneiden. Den neuen Austrieb in der Mitte nicht verletzen!",
      },
      {
        titel: "Frühjahrsdüngung & Mulchen",
        typ: "Duengung",
        zeitraum: "Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "3–5 cm Schicht Laubkompost oder Rindenhumus um die Pflanzenbasis verteilen. Optional: kleine Handvoll Hornspäne leicht einarbeiten.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "April oder September",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so breit wie Ballen. Das 'Herz' muss OBERHALB der Erdoberfläche bleiben (sonst Fäulnis)! Aushub 1:1 mit Laubkompost mischen.",
      },
      {
        titel: "Herbst-Mulch",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Fallendes Laub im Beet liegenlassen oder gezielt unter die Farnwedel harken. Schützt Rhizom und liefert Nährstoffe.",
      },
    ],
  },
  {
    id: "waldmeister-galium-odoratum",
    name: "Waldmeister",
    sorte: "Wildform",
    botanischerName: "Galium odoratum",
    kategorie: "Kräuter",
    bildUrl: "/assets/images/waldmeister_galium_odoratum.jpg",
    farbe: "#66BB6A",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.0 – 7.5",
    beschreibung:
      "Klassischer Bodendecker für schattige Bereiche. Dichter grüner Teppich, unverwechselbarer Cumarin-Duft beim Welken. Schlüsselzutat für die traditionelle Maibowle.",
    dos: [
      "Ernte anwelken lassen – Aroma entsteht erst beim Welken.",
      "Unter Laubbäume setzen – herabfallendes Laub dient als natürlicher Dünger.",
      "Alle 2–3 Jahre durch Teilung der Rhizome verjüngen.",
    ],
    donts: [
      "Keine Überdosierung (Cumarin kann Kopfschmerzen verursachen – max. 3 g frisches Kraut/Liter).",
      "Nicht während der Vollblüte ernten.",
      "Keine Staunässe.",
    ],
    nachbarnGut: ["Hosta", "Farne", "Salomonsiegel", "Maiglöckchen"],
    nachbarnSchlecht: ["Lavendel", "Thymian", "Rosmarin"],
    aufgaben: [
      {
        titel: "Düngung & Mulchen",
        typ: "Duengung",
        zeitraum: "März (Austrieb)",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Dünne Schicht reifen Kompost oder Laubhumus zwischen den Pflanzen verteilen. Keinen mineralischen Stickstoffdünger verwenden!",
      },
      {
        titel: "Ernte für Maibowle",
        typ: "Ernte",
        zeitraum: "Ende April bis Anfang Mai (vor der Blüte)",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Cumarin-Gehalt kurz VOR dem Öffnen der weißen Blüten am höchsten. Stängel ca. 2–3 cm über dem Boden schneiden. Nicht blühende Triebe ernten. Kraut einige Stunden anwelken lassen – erst dann entsteht das typische Aroma.",
      },
      {
        titel: "Pflanzung (Frühjahr)",
        typ: "Pflanzung",
        zeitraum: "Mitte März bis April",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Pflanzabstand 20–25 cm (breitet sich über Rhizome aus). So tief wie im Topf. Kräftig angießen.",
      },
      {
        titel: "Rückschnitt / Kontrolle",
        typ: "Schnitt",
        zeitraum: "Oktober",
        monatIndex: 10,
        wiederkehrend: true,
        anleitung:
          "Braune Pflanzenteile entfernen. Ausbreitung kontrollieren: Mit Spaten Ausläufer abstechen wenn Teppich zu groß wird.",
      },
    ],
  },
  {
    id: "luzula-sylvatica",
    name: "Waldmarbel",
    sorte: "Luzula sylvatica",
    botanischerName: "Luzula sylvatica",
    kategorie: "Staude",
    bildUrl: "/assets/images/luzula_sylvatica.jpg",
    farbe: "#3A5F0B",
    licht: "Schatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -28,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "4.5 – 7.0",
    beschreibung:
      "Unverwüstlicher Bodendecker für schwierige Schattenzonen. Breite, glänzend tiefgrüne Blätter auch im Winter. Toleriert den Wurzeldruck großer Bäume besser als fast jede andere Staude.",
    dos: [
      "Dort pflanzen, wo andere Stauden wegen Baumwurzeln aufgeben.",
      "Herbstlaub in den Beständen liegenlassen.",
      "6–9 Pflanzen/m² für dichten Teppich.",
    ],
    donts: [
      "Kein Standort mit praller Wintersonne (Frosttrocknis).",
      "Keine Staunässe.",
    ],
    nachbarnGut: ["Dryopteris", "Hosta", "Polygonatum", "Epimedium"],
    nachbarnSchlecht: ["Steingartenpflanzen", "Sonnenanbeter"],
    aufgaben: [
      {
        titel: "Ausputzen der Winterblätter",
        typ: "Pflege",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Wintergrün – sieht nach dem Winter oft zerzaust aus. Braune Blätter per Hand auszupfen. Kompletter Rückschnitt (5–10 cm über Boden) möglich wenn sehr unansehnlich.",
      },
      {
        titel: "Rückschnitt verblühter Stängel",
        typ: "Schnitt",
        zeitraum: "Juni",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Vertrocknete Blütenstiele tief an der Basis herausschneiden. Verhindert unerwünschte Selbstaussaat.",
      },
      {
        titel: "Pflanzung & Teilung",
        typ: "Pflanzung",
        zeitraum: "Mitte März bis Mai",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Bei alten Beständen: Horst ausgraben, mit scharfem Spaten in faustgroße Stücke teilen und neu einsetzen.",
      },
    ],
  },
  {
    id: "anemone-hybrida-honorine-jobert",
    name: "Herbst-Anemone",
    sorte: "Honorine Jobert",
    botanischerName: "Anemone x hybrida",
    kategorie: "Staude",
    bildUrl: "/assets/images/anemone_honorine_jobert.jpg",
    farbe: "#F0F4F8",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Mittel",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.8 – 7.0",
    beschreibung:
      "Edelste Spätblüherin: Strahlend weiße Schalenblüten mit gelber Mitte, August bis Frost. Wichtiger Lückenfüller wenn Sommerstauden verblühen. Breitet sich moderat über Ausläufer aus.",
    dos: [
      "Geduld: ca. 2 Jahre zur Etablierung ('Sleep, Creep, Leap'). In dieser Zeit nicht umpflanzen.",
      "Boden durch Mulch kühl und feucht halten.",
      "Im Frühjahr (März) Teilstücke abstechen zur Vermehrung.",
    ],
    donts: [
      "Kein Herbstschnitt! Hohle Stängel schützen vor Feuchtigkeit in der Wurzel.",
      "Kein Hacken im Wurzelbereich.",
      "Im Hochsommer nie komplett austrocknen lassen.",
    ],
    nachbarnGut: ["Hosta", "Cimicifuga", "Farn", "Aconitum", "Hortensien"],
    nachbarnSchlecht: ["Lavendel", "Salbei", "wuchernde Bodendecker"],
    aufgaben: [
      {
        titel: "Rückschnitt der Vorjahrestriebe",
        typ: "Schnitt",
        zeitraum: "Spätwinter (Ende Februar / Anfang März)",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Schnitt erst im Frühjahr! Alle dürren Stängel ca. 5–10 cm über dem Boden abschneiden. Den frischen Austrieb (kleine grüne Rosetten) nicht verletzen.",
      },
      {
        titel: "Organische Startdüngung",
        typ: "Duengung",
        zeitraum: "März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Ca. 2–3 Liter reifen Kompost/m² verteilen oder Hornspäne leicht einarbeiten. Nicht tief hacken!",
      },
      {
        titel: "Bodenmulchung erneuern",
        typ: "Pflege",
        zeitraum: "Mai",
        monatIndex: 5,
        wiederkehrend: true,
        anleitung:
          "Dünne Schicht Rindenhumus oder Laubkompost auf Wurzelbereich aufbringen. Essentiell für Blütenbildung im Spätsommer.",
      },
      {
        titel: "Winterschutz (nur junge Pflanzen)",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Nur im 1. und 2. Standjahr: Wurzelbereich locker mit Reisig oder trockenem Laub abdecken.",
      },
    ],
  },
  {
    id: "carex-oshimensis",
    name: "Japan-Segge",
    sorte: "'Evergold' u.a.",
    botanischerName: "Carex oshimensis",
    kategorie: "Staude",
    bildUrl: "/assets/images/carex_oshimensis.jpg",
    farbe: "#AED581",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 7.0",
    beschreibung:
      "Elegantestes Ziergras für schattige Bereiche. Wintergrüne, überhängende Horste. Buntlaubige Sorten wie 'Evergold' erhellen dunkle Ecken. Hervorragend für Kübel.",
    dos: [
      "Mulchen für kühle, feuchte Wurzeln.",
      "Kämmen statt schneiden im Frühjahr.",
    ],
    donts: [
      "Kein Radikalschnitt! Treibt nur sehr schwer wieder aus.",
      "Keine Staunässe.",
    ],
    nachbarnGut: ["Hosta", "Heuchera", "Farne", "Epimedium", "Rhododendron"],
    nachbarnSchlecht: ["Lavendel", "Thymian"],
    aufgaben: [
      {
        titel: "Ausputzen (kein Rückschnitt!)",
        typ: "Pflege",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "WICHTIG: Wintergrün – nicht bodennah abschneiden! Mit Handschuhen durch den Schopf kämmen, braune Halme lösen. Nur komplett vertrocknete Spitzen vorsichtig schneiden.",
      },
      {
        titel: "Düngung & Bodenpflege",
        typ: "Duengung",
        zeitraum: "Mitte April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Organischen Langzeitdünger (Hornspäne): ca. 30–50 g/m². Leicht oberflächlich einarbeiten. Dünne Schicht Rindenmulch oder Kompost aufbringen.",
      },
      {
        titel: "Teilung & Vermehrung",
        typ: "Pflege",
        zeitraum: "Ende April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Alle 3 Jahre: Pflanze komplett ausgraben, Wurzelballen teilen, Teilstücke sofort wieder einsetzen und kräftig gießen.",
      },
    ],
  },
  {
    id: "geranium-macrorrhizum-ingwersens",
    name: "Balkan-Storchschnabel",
    sorte: "Ingwersen's Variety",
    botanischerName: "Geranium macrorrhizum",
    kategorie: "Staude",
    bildUrl: "/assets/images/geranium_macrorrhizum.jpg",
    farbe: "#F4C2C2",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Niedrig",
    regenToleranz: "Hoch",
    frosttemp: -28,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.0 – 8.0",
    beschreibung:
      "Wertvollster Bodendecker für 'schwierige' Ecken. Dicke oberirdische Rhizome, intensiv aromatische Blätter (Zitrone/Holz). Wintergrün, extrem konkurrenzstark – wo er wächst, hat Unkraut keine Chance.",
    dos: [
      "Mutig direkt unter große Laubbäume pflanzen.",
      "7–9 Stück/m² für schnellen Teppichschluss.",
    ],
    donts: [
      "Keine Staunässe.",
      "Nicht zu tief pflanzen – Rhizome liegen fast auf der Erdoberfläche.",
    ],
    nachbarnGut: ["Epimedium", "Hosta", "Polygonatum", "Farne"],
    nachbarnSchlecht: ["Zarte Stauden", "Steingartenpflanzen"],
    aufgaben: [
      {
        titel: "Ausputzen nach dem Winter",
        typ: "Pflege",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Nur braune, unansehnliche Blätter entfernen. Vorsichtig per Hand abziehen. Nicht in die dicken Rhizome am Boden schneiden!",
      },
      {
        titel: "Rückschnitt nach der Blüte (optional)",
        typ: "Schnitt",
        zeitraum: "Ende Juni / Anfang Juli",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Verblühte Blütenstände komplett abschneiden. Bei struppigem Teppich: Gesamtes Laub um ca. ein Drittel einkürzen – treibt danach frisch und kompakt aus.",
      },
      {
        titel: "Teilung & Vermehrung",
        typ: "Pflege",
        zeitraum: "September",
        monatIndex: 9,
        wiederkehrend: false,
        anleitung:
          "Teilstücke der dicken Rhizome ausgraben. Rhizome in 5–10 cm lange Stücke schneiden (jedes muss Augen/Triebe haben). Flach an neuer Stelle einpflanzen.",
      },
    ],
  },
  {
    id: "prunus-lusitanica-angustifolia",
    name: "Portugiesischer Lorbeer",
    sorte: "Angustifolia",
    botanischerName: "Prunus lusitanica 'Angustifolia'",
    kategorie: "Hecke",
    bildUrl: "/assets/images/prunus_lusitanica_angustifolia.jpg",
    farbe: "#2E5239",
    licht: "Sonne",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -17,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.0 – 7.5",
    beschreibung:
      "Die elegantere Schwester des klassischen Kirschlorbeers. Schmalere, dunkelgrüne Blätter mit rötlichen Blattstielen. Wächst kompakter und kegelförmiger, was den Schnittaufwand reduziert. Ideal für formale Hecken ab 100 cm Höhe.",
    dos: [
      "Trapezschnitt (Konisch): unten breiter als oben schneiden – verhindert das Verkahlen der Basis.",
      "Winterbewässerung: an frostfreien Tagen gießen (Frosttrocknis verhindern).",
      "5–7 cm Rindenmulch als Feuchteschutz.",
    ],
    donts: [
      "Keine Staunässe – Wurzeln faulen schnell.",
      "Kein Spätschnitt (nach Mitte September) – Neuaustrieb erfriert.",
      "Nicht bei praller Mittagssonne schneiden (Sonnenbrand an inneren Blättern).",
    ],
    nachbarnGut: ["Lavendel", "Lampenputzergras", "Rosen", "Photinia"],
    nachbarnSchlecht: ["Birken", "Rhododendron"],
    aufgaben: [
      {
        titel: "Organische Startdüngung",
        typ: "Duengung",
        zeitraum: "Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Organischen Langzeitdünger (Hornspäne oder Koniferendünger) verwenden. Ca. 50–80 g pro laufendem Meter Hecke leicht in die Oberkrume einarbeiten. Direkt danach wässern.",
      },
      {
        titel: "Formschnitt (Hauptschnitt)",
        typ: "Schnitt",
        zeitraum: "Mitte bis Ende Juni (nach Johannistag)",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Konisch (Trapezprofil) schneiden – unten breiter als oben. Idealerweise mit der Hand-Heckenschere (vermeidet braune Schnittkanten). Neuaustrieb um ca. 2/3 einkürzen.",
      },
      {
        titel: "Korrekturschnitt (optional)",
        typ: "Schnitt",
        zeitraum: "Anfang September",
        monatIndex: 9,
        wiederkehrend: true,
        anleitung:
          "Nur bei starkem Wachstum nötig. Nicht später als Mitte September! Nur herausragende Triebe entfernen.",
      },
      {
        titel: "Winterwässerung (Frosttrocknis-Prävention)",
        typ: "Pflege",
        zeitraum: "November bis Februar (an frostfreien Tagen)",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Immergrün – verdunstet auch im Winter Wasser. An frostfreien Tagen Bodenfeuchtigkeit prüfen. Bei trockenem Boden durchdringend gießen.",
      },
    ],
  },

  {
    id: "calamagrostis-acutiflora-karl-foerster",
    name: "Garten-Reitgras",
    sorte: "'Karl Foerster'",
    botanischerName: "Calamagrostis x acutiflora",
    kategorie: "Staude",
    bildUrl: "/assets/images/calamagrostis_karl_foerster.jpg",
    farbe: "#D4AF37",
    licht: "Sonne",
    bodenArt: "Lehmig",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -28,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.8 – 7.5",
    beschreibung:
      "Weltstar unter den Ziergräsern, 'Staude des Jahres'. Streng vertikaler, säulenartiger Wuchs, stabil bei Wind und Regen. Steril – sät sich nicht aus. Goldgelbe Blütenrispen bleiben bis in den Winter (Winteraspekt).",
    dos: [
      "Im Winter stehen lassen: Halme als Winterschutz und Insektenunterschlupf.",
      "Schwere Böden nutzen: eines der wenigen Gräser, das Lehmboden verträgt.",
    ],
    donts: [
      "Kein Herbstschnitt – Wasser läuft in hohle Halme → Fäulnis im Wurzelstock.",
      "Nicht in tiefen Schatten pflanzen – verliert Standfestigkeit.",
    ],
    nachbarnGut: ["Sedum", "Rudbeckia", "Echinacea", "Kugeldistel", "Herbstastern"],
    nachbarnSchlecht: ["Schwachwüchsige Bodendecker"],
    aufgaben: [
      {
        titel: "Rückschnitt der Vorjahreshalme",
        typ: "Schnitt",
        zeitraum: "Ende Februar / Anfang März",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Zwingend VOR dem Neuaustrieb. Gesamten Horst radikal auf 10–15 cm über dem Boden zurückschneiden. Scharfe Staudenschere oder Heckenschere verwenden.",
      },
      {
        titel: "Startdüngung",
        typ: "Duengung",
        zeitraum: "Mitte März bis Anfang April",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Wenn erste grüne Spitzen sichtbar: ca. 50–70 g organischen Volldünger oder 3 Liter reifen Kompost/m² flach um den Horst einarbeiten. Nicht überdüngen!",
      },
      {
        titel: "Wässerung bei Sommertrockenheit",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Bodenfeuchte in 5 cm Tiefe prüfen. Braune Blattspitzen = zu trocken. Durchdringend gießen (ca. 10–15 Liter pro Horst).",
      },
    ],
  },

  {
    id: "acer-palmatum-sangokaku",
    name: "Korallenrinden-Ahorn",
    sorte: "Sangokaku",
    botanischerName: "Acer palmatum",
    kategorie: "Gehölz",
    bildUrl: "/assets/images/acer_sangokaku.jpg",
    farbe: "#FF7F50",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Mittel",
    frosttemp: -15,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Visuelles Highlight für das ganze Jahr: leuchtend korallenrote Rinde der jungen Triebe im Winter, hellgrüner Austrieb im Frühling, goldgelb-oranges Laub im Herbst. Aufrechter, trichterförmiger Wuchs, 4–6 m.",
    dos: [
      "Windgeschützt pflanzen – zarte Blätter verbrennen bei Ost- oder Föhnwind.",
      "Gleichmäßige Feuchte: konstant leicht feucht, niemals nass.",
      "Drainage bei schwerem Boden zwingend (Staunässe → Verticillium-Welke).",
    ],
    donts: [
      "Kein Schnitt im Frühjahr – Ahorne 'bluten' stark (Saftfluss).",
      "Keine pralle Mittagssonne (Leaf Scorch).",
      "Nicht hacken – Flachwurzler!",
    ],
    nachbarnGut: ["Rhododendren", "Azaleen", "Hosta", "Farne", "Hakonechloa macra"],
    nachbarnSchlecht: ["Lavendel", "mediterrane Kräuter"],
    aufgaben: [
      {
        titel: "Frühjahrsdüngung",
        typ: "Duengung",
        zeitraum: "April (kurz vor dem Austrieb)",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Organischen Langzeitdünger (Hornspäne) sparsam im Traufbereich verteilen. Zu viel Stickstoff → mastiger Wuchs, weniger Winterhärte, weniger Rindenfärbung!",
      },
      {
        titel: "Wasser-Management Sommer",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Flachwurzler – leidet schnell unter Trockenstress. Bodenfeuchte in 2–3 cm Tiefe prüfen. Bei Hitzewellen Mulchschicht kontrollieren.",
      },
      {
        titel: "Formschnitt (Sommer)",
        typ: "Schnitt",
        zeitraum: "August",
        monatIndex: 8,
        wiederkehrend: true,
        anleitung:
          "Bester Schnitt-Zeitpunkt: Spätsommer (niedrigerer Saftdruck). 1. Totes Holz entfernen. 2. Störende, nach innen wachsende Zweige am Astring abschneiden. 3. Keine Stummel! Ziel: luftige Krone für rote Winterrinde.",
      },
      {
        titel: "Winterschutz (Wurzelbereich)",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "5–10 cm Rindenmulch oder Laub auf dem Wurzelbereich. Mulch nicht direkt am Stamm (ca. 5 cm Abstand, sonst Fäulnis). Kübelpflanzen: Topf mit Vlies umwickeln.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Frühling (nach Frostgefahr) oder Frühherbst",
        monatIndex: 3,
        wiederkehrend: false,
        anleitung:
          "Pflanzloch doppelt so breit wie Ballen. Wurzelhals ebenerdig – nicht zu tief! Bei verdichtungsneigendem Boden 5 cm Blähton-Drainageschicht einbringen.",
      },
    ],
  },

  {
    id: "sagina-subulata",
    name: "Sternmoos",
    sorte: "",
    botanischerName: "Sagina subulata",
    kategorie: "Staude",
    bildUrl: "/assets/images/sagina_subulata_cover.jpg",
    farbe: "#589A46",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Kein echtes Moos, sondern ein Mastkraut (Nelkengewächse). Extrem dichte, immergrüne Teppiche, im Juni/Juli mit unzähligen weißen Sternblüten. Ideal für Fugen, Steingärten, Japangärten. Bedingt trittfest.",
    dos: [
      "Gleichmäßig feucht halten – Flachwurzler, Trockenheit → braune Flecken sofort.",
      "Unkraut sofort zupfen – später kaum aus dem Polster zu entfernen.",
      "Nach Barfrost-Perioden: Polster sanft an den Boden andrücken.",
    ],
    donts: [
      "Kein Rindenmulch – Fäulnis und zu starke Ansäuerung.",
      "Keine Staunässe.",
      "Kein Streusalz.",
    ],
    nachbarnGut: ["Krokus", "Scilla", "Blauschwingel", "Heuchera"],
    nachbarnSchlecht: ["Efeu", "Immergrün"],
    aufgaben: [
      {
        titel: "Düngung Start",
        typ: "Duengung",
        zeitraum: "Anfang April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Organischen Volldünger oder Hornmehl – sehr geringe Dosierung: nur ca. 30 g/m². Dünger muss gut eingewässert werden, sonst 'verbrennt' er auf dem dichten Polster.",
      },
      {
        titel: "Wässern bei Hitze",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Flachwurzler. Bei > 25°C und ohne Regen wässern. Indikator: Polster fühlt sich trocken und nicht mehr kühl an. Lieber häufiger kleine Mengen als selten viel (Staunässegefahr).",
      },
      {
        titel: "Teilung / Verjüngung",
        typ: "Pflege",
        zeitraum: "September",
        monatIndex: 9,
        wiederkehrend: true,
        anleitung:
          "Wenn Polster kahl werden oder sich aufwölben: Teilstücke abstechen, an neuer Stelle tiefer einsetzen, gut festtreten (Bodenkontakt herstellen).",
      },
      {
        titel: "Laub entfernen",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Herabgefallenes Herbstlaub von den Polstern entfernen. Unter nasser Laubschicht fault Sternmoos schnell ('Auswintern'). Laubrechen mit flexiblen Zinken oder Laubbläser auf niedriger Stufe.",
      },
      {
        titel: "Pflanzung / Lücken schließen",
        typ: "Pflanzung",
        zeitraum: "April bis Mai",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "In unkrautfreien Boden pflanzen. Pflanzabstand: 15–20 cm (ca. 25 Pflanzen/m² für schnellen Bodenschluss). Oberkante des Ballens bündig mit Erdoberfläche. Danach durchdringend wässern.",
      },
    ],
  },

  {
    id: "thymus-serpyllum",
    name: "Sand-Thymian",
    sorte: "",
    botanischerName: "Thymus serpyllum",
    kategorie: "Kräuter",
    bildUrl: "/assets/images/thymus_serpyllum_bloom.jpg",
    farbe: "#9C7C9E",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Mittel",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.5 – 8.0",
    beschreibung:
      "Der 'wilde Bruder' des Echten Thymians. Wächst flach kriechend, bildet dichte, duftende, bedingt trittfeste Polster. Heimisch in Mitteleuropa, extrem robust. Insektenmagnet für Wildbienen und Schmetterlinge.",
    dos: [
      "Sonnigsten, heißesten Ort wählen (Südlage, Steingarten).",
      "Drainage bei Pflanzung sicherstellen.",
      "Mager halten – je karger der Boden, desto intensiver der Duft.",
    ],
    donts: [
      "Keine Staunässe – Wurzelfäule im Winter ist sicherer Tod.",
      "Kein Rindenmulch – lieber Kies-Mulch.",
      "Kein Radikalschnitt ins alte, kahle Holz ohne grüne Augen.",
    ],
    nachbarnGut: ["Lavendel", "Sedum", "Sempervivum", "Blauschwingel", "Oregano"],
    nachbarnSchlecht: ["Pfefferminze", "Petersilie", "Basilikum"],
    aufgaben: [
      {
        titel: "Frühjahrsschnitt & Reinigung",
        typ: "Schnitt",
        zeitraum: "Mitte März (vor dem Neuaustrieb)",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Abgestorbene/erfrorene Pflanzenteile entfernen. Triebe leicht einkürzen (ca. 1–2 cm der Spitzen) für dichten Wuchs. Nicht tief ins alte, verholzte Gewebe ohne Blätter schneiden!",
      },
      {
        titel: "Erhaltungsschnitt nach Blüte",
        typ: "Schnitt",
        zeitraum: "August (direkt nach der Blüte)",
        monatIndex: 8,
        wiederkehrend: true,
        anleitung:
          "Wichtigster Schnitt des Jahres. Gesamte Pflanze mit Heckenschere um ca. ein Drittel zurückschneiden. Alle verblühten Blütenstände entfernen. Verhindert Verkahlen und fördert kompakten Polsterwuchs.",
      },
      {
        titel: "Ernte für Trocknung",
        typ: "Ernte",
        zeitraum: "Juni/Juli (Mittagszeit an sonnigen Tagen)",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Kurz vor oder während der Vollblüte ernten (intensivstes Aroma). Triebspitzen ca. 5 cm schneiden. Für Trocknung oder Einlegen in Öl.",
      },
      {
        titel: "Düngung (optional)",
        typ: "Duengung",
        zeitraum: "April (zum Austrieb)",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Schwachzehrer! Nur bei extrem sandigem/ausgewaschenem Boden düngen. Kleine Menge organischen Kräuterdünger oder Kompost. Kein Blaukorn oder stickstoffreicher Dünger!",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Frühjahr (März–Mai) oder Frühherbst (September)",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "Bei schwerem Boden Sand oder Kies (Körnung 2–8 mm) untermischen. Pflanzabstand: 20–25 cm (ca. 10–12 Pflanzen/m²). Einmalig durchdringend angießen.",
      },
    ],
  },

  {
    id: "lavandula-angustifolia",
    name: "Echter Lavendel",
    sorte: "",
    botanischerName: "Lavandula angustifolia",
    kategorie: "Kräuter",
    bildUrl: "/assets/images/lavandula_angustifolia.jpg",
    farbe: "#967BB6",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Mittel",
    frosttemp: -15,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.5 – 8.2",
    beschreibung:
      "Mediterraner Halbstrauch, einzige in Mitteleuropa wirklich winterharte Lavendelart. Kompakter Wuchs, hoher Gehalt an ätherischen Ölen, klassischer feiner Duft. Bienenmagnet und Rosenbegleiter. Braucht 'Hungerkünstler'-Bedingungen.",
    dos: [
      "Heißesten, sonnigsten Platz wählen (Südausrichtung, an Mauern).",
      "Mineralischer Kies-Mulch: reflektiert Licht, speichert Wärme, hält Wurzelhals trocken.",
      "Konsequent zweimal jährlich schneiden – ohne Schnitt verholzt und verkahlt die Pflanze.",
    ],
    donts: [
      "Kein Rindenmulch – säuert an und hält Feuchtigkeit (Pilzgefahr, Todfeind!).",
      "Keine Staunässe – fast sofortige Wurzelfäule.",
      "Kein Blaukorn oder stickstoffreicher Dünger.",
    ],
    nachbarnGut: ["Rosen", "Salbei", "Thymian", "Bohnenkraut", "Oregano", "Fetthenne"],
    nachbarnSchlecht: ["Pfefferminze", "Petersilie", "Rhododendron", "Farne"],
    aufgaben: [
      {
        titel: "Der 'Zwei-Drittel'-Frühjahrsschnitt",
        typ: "Schnitt",
        zeitraum: "Ende März / Anfang April",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Wichtigster Schnitt des Jahres. Indikator: wenn Forsythien blühen oder kurz vor neuem Austrieb. Pflanze kräftig um zwei Drittel zurückschneiden. GOLDENE REGEL: An den Aststümpfen müssen noch kurze grüne Triebe/Blätter ('schlafende Augen') sichtbar sein! Lavendel treibt aus rein braunem Holz oft nicht mehr aus.",
      },
      {
        titel: "Kalkung / Erhaltung",
        typ: "Duengung",
        zeitraum: "März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Schwachzehrer. Handvoll Algenkalk oder Gartenkalk rund um die Basis. Etwas reifer Kompost beim Frühjahrsschnitt reicht als Nährstoffgabe.",
      },
      {
        titel: "Ernte für Trocknung",
        typ: "Ernte",
        zeitraum: "Mitte Juni bis Juli",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Vormittags ernten nach Tautrocknung. Blühstadium: wenn mittlere Blüten der Rispe sich gerade öffnen (nicht voll aufgeblüht). Ganze Stiele bündeln und kopfüber an dunklem, luftigem Ort trocknen.",
      },
      {
        titel: "Der 'Ein-Drittel'-Sommerschnitt",
        typ: "Schnitt",
        zeitraum: "Direkt nach der Blüte (Ende Juli / August)",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Sobald Blüten verblassen, aber VOR erstem Frost. Alle verblühten Blütenstiele und obere grüne Blattspitzen um ein Drittel kürzen. Nicht ins alte kahle Holz schneiden!",
      },
    ],
  },

  {
    id: "antennaria-dioica",
    name: "Gewöhnliches Katzenpfötchen",
    sorte: "",
    botanischerName: "Antennaria dioica",
    kategorie: "Staude",
    bildUrl: "/assets/images/antennaria-dioica.jpg",
    farbe: "#A4B8A6",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Mittel",
    frosttemp: -25,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 6.5",
    beschreibung:
      "Robuster, teppichbildender Bodendecker aus Heide- und Dünenlandschaften. Zierwert durch silbrig-behaarte Blätter (wintergrün) und pfotenartige Blütenstände. Pionierpflanze für karge Standorte – ideal für Dachbegrünung, Steingarten, Grabbepflanzung.",
    dos: [
      "Abmagern: 30–50% Sand oder Kies bei normalem Gartenboden beimischen.",
      "Trocken halten – zu viel Wasser schadet mehr als zu wenig.",
    ],
    donts: [
      "Kein Düngen – Nährstoffüberschuss → Vergrünung, mastiger Wuchs, Absterben.",
      "Kein Rindenmulch – lieber Kies oder Lavasplit.",
    ],
    nachbarnGut: ["Thymus serpyllum", "Dianthus deltoides", "Sedum", "Calluna vulgaris", "Armeria maritima"],
    nachbarnSchlecht: ["Pfingstrosen", "Funkien", "Minze"],
    aufgaben: [
      {
        titel: "Frühjahrsputz & Rückschnitt",
        typ: "Pflege",
        zeitraum: "Anfang März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Braune, abgestorbene Blattrosetten per Hand oder Schere entfernen. Triebspitzen leicht zurückschneiden (ca. 1–2 cm) um Neuaustrieb anzuregen. Nicht ins verholzte Innere schneiden.",
      },
      {
        titel: "Entfernen der Blütenstände",
        typ: "Schnitt",
        zeitraum: "Ende Juni (nach der Blüte)",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Vertrocknete Blütenstiele direkt an der Basis abschneiden. Verhindert Selbstaussaat und hält Teppich kompakt und silbrig.",
      },
      {
        titel: "Teilung & Verjüngung",
        typ: "Pflege",
        zeitraum: "September",
        monatIndex: 9,
        wiederkehrend: true,
        anleitung:
          "Alle 3 Jahre: wenn Polster in der Mitte verkahlen. Pflanze ausgraben, Ballen teilen. Verkahlte Mitte entsorgen, vitale Randstücke neu einpflanzen, gut andrücken und einmalig angießen.",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Mitte April bis Ende Mai",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "Pflanzabstand: 20–25 cm (ca. 15 Pflanzen/m²). Ballen vor dem Setzen kurz in Wasser tauchen. Nicht zu tief: Blattherz muss über der Erdoberfläche bleiben.",
      },
    ],
  },

  {
    id: "gaura-lindheimeri",
    name: "Prachtkerze",
    sorte: "Art & Hybriden (z.B. 'Whirling Butterflies')",
    botanischerName: "Oenothera lindheimeri",
    kategorie: "Staude",
    bildUrl: "/assets/images/gaura_lindheimeri.jpg",
    farbe: "#E6CFE8",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Niedrig",
    frosttemp: -15,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.0 – 8.0",
    beschreibung:
      "Filigraner Dauerblüher mit schmetterlingshaften Blüten – bringt Leichtigkeit in jedes Beet. Tiefe Pfahlwurzel aus trockenen Präriegebieten. Empfindlich auf Kälte+Nässe im Winter – braucht spezifischen Winterschutz.",
    dos: [
      "Konsequenter Winterschutz: auf 10 cm zurückschneiden und zwingend mit Laub/Reisig abdecken.",
      "Sonnigster, wärmster Platz (Südwand, Kiesbeet).",
      "Drainage durch Sand/Kies sicherstellen.",
    ],
    donts: [
      "Schutz niemals vergessen: Rückschnitt OHNE Abdeckung ist fatal.",
      "Kein Stickstoff-Mast – Pflanze fällt sonst um.",
      "Nicht umpflanzen – Pfahlwurzel wird dabei meist beschädigt.",
    ],
    nachbarnGut: ["Verbena bonariensis", "Stipa", "Lavendel", "Rosen", "Sonnenhut"],
    nachbarnSchlecht: ["Wuchernde Bodendecker mit Feuchtigkeit-Stau"],
    aufgaben: [
      {
        titel: "Düngung",
        typ: "Duengung",
        zeitraum: "Anfang Mai",
        monatIndex: 5,
        wiederkehrend: true,
        anleitung:
          "Wenig Nährstoffe nötig. Kleine Menge Kompost oder Hornspäne oberflächlich einarbeiten. Überdüngung vermeiden!",
      },
      {
        titel: "Pflanzung",
        typ: "Pflanzung",
        zeitraum: "Mitte Mai (nach den Eisheiligen)",
        monatIndex: 5,
        wiederkehrend: false,
        anleitung:
          "Vollsonniger Standort. Bei schwerem Boden Sand/Kies ins Pflanzloch. Nicht tiefer als im Topf.",
      },
      {
        titel: "Remontierschnitt (Sommer)",
        typ: "Schnitt",
        zeitraum: "Ende Juli",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Um Blütezeit bis zum Frost zu verlängern: Ersten Flor nach Verblühen um ca. ein Drittel zurückschneiden. Regt Bildung neuer Blütenknospen an.",
      },
      {
        titel: "Rückschnitt & Winterschutz",
        typ: "Winterschutz",
        zeitraum: "Ende November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Entscheidend für Überwinterung! 1. Gesamte Staude auf ca. 10 cm über dem Boden kürzen. 2. Sofort danach großzügig mit trockenem Laub, Reisig oder Vlies bedecken – schützt vor Nässe UND Frost.",
      },
      {
        titel: "Winterschutz entfernen",
        typ: "Pflege",
        zeitraum: "Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Wenn keine starken Fröste mehr drohen: Laub/Reisig vorsichtig entfernen. Neue Austriebe an der Basis nicht beschädigen!",
      },
    ],
  },

  {
    id: "verbena-bonariensis",
    name: "Patagonisches Eisenkraut",
    sorte: "Verbena bonariensis",
    botanischerName: "Verbena bonariensis",
    kategorie: "Staude",
    bildUrl: "/assets/images/verbena-bonariensis.jpg",
    farbe: "#7B5CA3",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Mittel",
    frosttemp: -10,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "5.8 – 7.0",
    beschreibung:
      "Eleganter Dauerblüher – wirkt wie eine lila Wolke, die über dem Beet schwebt ('See-Through'-Element). Absoluter Insektenmagnet. Kurzlebige Staude, erhält sich durch zuverlässige Selbstaussaat ('wandernde Pflanze').",
    dos: [
      "In Gruppen von 3–5 Pflanzen setzen oder als Lückenfüller verstreuen.",
      "Samenstände stehen lassen – sichert Selbstaussaat und Winterstruktur.",
      "Durchlässigkeit bei schwerem Boden durch Sand/Kies sicherstellen.",
    ],
    donts: [
      "Kein Herbstschnitt – Wasser in hohlen Stängeln → Wurzelfäule.",
      "Kein starkes Düngen – wenig Blüten, instabile Stängel.",
      "Kein dicker Rindenmulch – verhindert Selbstaussaat (Lichtkeimer).",
    ],
    nachbarnGut: ["Rosen", "Stipa tenuissima", "Echinacea", "Gaura lindheimeri", "Kosmeen"],
    nachbarnSchlecht: ["Stark wuchernde Bodendecker", "Sumpfpflanzen"],
    aufgaben: [
      {
        titel: "Aussaat (Vorzucht)",
        typ: "Pflanzung",
        zeitraum: "Anfang Februar bis März",
        monatIndex: 2,
        wiederkehrend: false,
        anleitung:
          "Samen in Anzuchtschalen auf der Fensterbank aussäen. Nur leicht andrücken (Lichtkeimer), nicht tief bedecken. Temperatur ca. 20°C. Substrat feucht, aber nicht nass.",
      },
      {
        titel: "Rückschnitt Vorjahr / Frühjahrsschnitt",
        typ: "Schnitt",
        zeitraum: "Ende März / Anfang April",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Warten bis keine starken Fröste mehr und Neuaustrieb an der Basis sichtbar. Alle alten, vertrockneten Stängel handbreit über dem Boden abschneiden. Frische Basistriebe dabei nicht beschädigen!",
      },
      {
        titel: "Pflanzung im Freiland",
        typ: "Pflanzung",
        zeitraum: "Mitte Mai (nach den Eisheiligen)",
        monatIndex: 5,
        wiederkehrend: false,
        anleitung:
          "Erst auspflanzen wenn keine Nachtfröste mehr. Pflanzabstand: 35–40 cm. In Gruppen von 3–5 Stück wirkt sie am besten.",
      },
      {
        titel: "Pinzieren (optional für Standfestigkeit)",
        typ: "Schnitt",
        zeitraum: "Anfang Juni",
        monatIndex: 6,
        wiederkehrend: true,
        anleitung:
          "Triebspitzen der Jungpflanzen herauskneifen (1–2 cm). Macht die Pflanze buschiger, niedriger und standfester. Verzögert Blüte leicht.",
      },
      {
        titel: "Winterschutz & Samenreife",
        typ: "Winterschutz",
        zeitraum: "Ende Oktober",
        monatIndex: 10,
        wiederkehrend: true,
        anleitung:
          "Nicht zurückschneiden! Samenstände als Winterfutter für Vögel stehen lassen. In rauen Lagen (unter -10°C) Wurzelbereich mit Reisig oder trockenem Laub abdecken.",
      },
    ],
  },

  {
    id: "hakonechloa-macra",
    name: "Japan-Berggras",
    sorte: "'Aureola' u.a.",
    botanischerName: "Hakonechloa macra",
    kategorie: "Staude",
    bildUrl: "/assets/images/hakonechloa_macra.jpg",
    farbe: "#8DA331",
    licht: "Halbschatten",
    bodenArt: "Humos",
    wasserBedarf: "Mittel",
    regenToleranz: "Hoch",
    frosttemp: -20,
    winterhart: true,
    kalkvertraeglich: false,
    phIdeal: "5.5 – 7.0",
    beschreibung:
      "Wertvollstes Ziergras für schattige Bereiche. Charakteristischer, kaskadenartiger Wuchs ('Wasserfall-Effekt'). Sorte 'Aureola' gelb-grün panaschiert – bringt Licht in dunkle Ecken. Treibt spät aus, ist dafür sehr langlebig.",
    dos: [
      "Schattiger Standort: unter Gehölzen oder an Nord/Ost-Seite.",
      "Humusversorgung durch regelmäßige Kompost-/Laubgaben (Waldboden simulieren).",
      "Gruppenpflanzung: 3–5 Pflanzen 'fließen' in eine Richtung (z.B. Treppe hinunter).",
    ],
    donts: [
      "Keine pralle Mittagssonne (braune Spitzen).",
      "Ballen nie komplett austrocknen lassen – Trockenstress stoppt Wuchs sofort.",
      "Kein Kalk.",
    ],
    nachbarnGut: ["Hosta", "Polystichum", "Epimedium", "Actaea", "Polygonatum"],
    nachbarnSchlecht: ["Lavendel", "Stipa"],
    aufgaben: [
      {
        titel: "Rückschnitt der Vorjahreshalme",
        typ: "Schnitt",
        zeitraum: "Ende Februar bis Anfang März",
        monatIndex: 2,
        wiederkehrend: true,
        anleitung:
          "Erst kurz vor dem Neuaustrieb schneiden! Alte, braune Halme ca. 5–10 cm über dem Boden abschneiden. Neue rote/grüne Triebspitzen am Boden nicht verletzen. Altes Laub war Winterschutz.",
      },
      {
        titel: "Startdüngung & Mulchen",
        typ: "Duengung",
        zeitraum: "Mitte April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Reifen Kompost (ca. 2–3 cm Schicht) oder Laubhumus um den Horst verteilen. Hornspäne leicht in die Oberfläche einarbeiten. Mulchen hält Feuchtigkeit – für dieses Gras essenziell!",
      },
      {
        titel: "Wässerung bei Sommertrockenheit",
        typ: "Pflege",
        zeitraum: "Juni bis August",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Bodenfeuchte prüfen. Indikator: Gras rollt Blätter der Länge nach ein ('Nadeleffekt') → akuter Wassermangel! Durchdringend direkt an die Wurzel gießen, nicht über die Blätter.",
      },
      {
        titel: "Herbst-Laub liegen lassen",
        typ: "Winterschutz",
        zeitraum: "November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Herabfallendes Baumlaub NICHT aus dem Gras entfernen. Eigene Halme und Fremdlaub als natürliche Isolationsschicht – imitiert natürlichen Standort im japanischen Bergwald.",
      },
    ],
  },

  {
    id: "stipa-ichu",
    name: "Peruanisches Federgras",
    sorte: "",
    botanischerName: "Jarava ichu (syn. Stipa ichu)",
    kategorie: "Staude",
    bildUrl: "/assets/images/stipa_ichu.jpg",
    farbe: "#A8B395",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Niedrig",
    frosttemp: -12,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.0 – 7.5",
    beschreibung:
      "Horstig wachsendes Ziergras aus den Anden. Straff aufrecht, markante fast weiße bis silbrige Blütenrispen (Juni–September) wie Kerzen aus dem Laub ragend. 60–100 cm. Highlight für Kiesgärten und moderne Architektur-Gärten.",
    dos: [
      "Vollsonniger Standort – Großteil des Tages volle Sonne.",
      "Drainage unbedingt sicherstellen.",
      "Im Winter zusammenbinden: schützt Herz vor Fäulnis.",
    ],
    donts: [
      "Kein Herbstschnitt – trockene Halme schützen vor Frost und Nässe.",
      "Kein Lehmboden ohne massive Bodenverbesserung.",
      "Keine Überdüngung – Gras wird instabil und kippt.",
    ],
    nachbarnGut: ["Verbena bonariensis", "Echinacea", "Perovskia", "Gaura", "Echinops"],
    nachbarnSchlecht: ["Wuchernde Bodendecker", "Hortensien"],
    aufgaben: [
      {
        titel: "Rückschnitt der Vorjahreshalme",
        typ: "Schnitt",
        zeitraum: "Anfang März (vor dem Neuaustrieb)",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Gesamtes Grasbüschel handbreit (ca. 10–15 cm) über dem Boden abschneiden. Neuen Austrieb (grüne Spitzen im Inneren) nicht verletzen. Scharfe Gartenschere oder Heckenschere.",
      },
      {
        titel: "Düngung zum Start",
        typ: "Duengung",
        zeitraum: "Mitte April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Schwachzehrer! Kleine Gabe organischen Dünger (Handvoll Kompost oder Hornspäne) leicht in den Wurzelbereich. Überdüngung → weiches Gewebe, Halme kippen um.",
      },
      {
        titel: "Teilung & Vermehrung",
        typ: "Pflege",
        zeitraum: "Ende April",
        monatIndex: 4,
        wiederkehrend: true,
        anleitung:
          "Alle 3–4 Jahre bei Verkahlung der Mitte: Pflanze komplett ausgraben, Ballen mit Spaten in 2–3 Stücke teilen. An neuer Stelle in lockeren Boden einpflanzen und gut angießen.",
      },
      {
        titel: "Winterschutz gegen Nässe",
        typ: "Winterschutz",
        zeitraum: "Mitte November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Problem ist Nässe, nicht Kälte! Halme oben locker als Schopf zusammenbinden – leitet Regenwasser außen ab. Wurzelbereich bei Kahlfrost mit etwas Tannenreisig abdecken.",
      },
    ],
  },

  {
    id: "stipa-tenuifolia-ponytails",
    name: "Zartes Federgras 'Ponytails'",
    sorte: "Ponytails",
    botanischerName: "Stipa tenuifolia (syn. Nassella tenuissima)",
    kategorie: "Staude",
    bildUrl: "/assets/images/stipa_ponytails.jpg",
    farbe: "#D2C295",
    licht: "Sonne",
    bodenArt: "Sandig",
    wasserBedarf: "Niedrig",
    regenToleranz: "Niedrig",
    frosttemp: -12,
    winterhart: true,
    kalkvertraeglich: true,
    phIdeal: "6.5 – 7.5",
    beschreibung:
      "Elegantestes Ziergras für trockene Standorte. Extrem feiner, haarähnlicher Wuchs mit wellenförmiger Bewegung im Wind. Grannen im Sommer silbrig-weiß, im Herbst strohblond. Kurzlebig (2–4 Jahre), erhält sich durch Selbstaussaat.",
    dos: [
      "Drainage zwingend optimieren: Sand oder Split (2–8 mm) ins Pflanzloch.",
      "Mager halten – zu viel Stickstoff → Lagerbildung (Umfallen).",
    ],
    donts: [
      "Kein Herbstschnitt – Wasser in hohlen Halmen → Wurzelfäule.",
      "Kein Rindenmulch – lieber Kiesmulch oder Lavagranulat.",
    ],
    nachbarnGut: ["Lavandula", "Perovskia", "Salvia nemorosa", "Sedum", "Gaura lindheimeri"],
    nachbarnSchlecht: ["Stark wuchernde Stauden", "Hortensien", "Farne"],
    aufgaben: [
      {
        titel: "Frühjahrsschnitt & Ausputzen",
        typ: "Schnitt",
        zeitraum: "Anfang bis Mitte März",
        monatIndex: 3,
        wiederkehrend: true,
        anleitung:
          "Zwei Methoden: 1. Auskämmen (schonend): mit Handschuhen kräftig durch den Horst ziehen, loses Material entfernen. 2. Rückschnitt (Verjüngung): Gesamten Horst auf ca. 10–15 cm zurückschneiden. Nicht in neuen, grünen Austrieb schneiden!",
      },
      {
        titel: "Samenstände entfernen (Selbstaussaat verhindern)",
        typ: "Pflege",
        zeitraum: "Juli bis August (nach der Blüte)",
        monatIndex: 7,
        wiederkehrend: true,
        anleitung:
          "Stipa tenuifolia versamt sich extrem stark! Wenn keine Ausbreitung gewünscht: Grannen (Samenstände) entfernen, sobald sie sich leicht lösen und 'flauschig' werden, aber bevor sie vom Wind verweht werden.",
      },
      {
        titel: "Vorbereitung Winterruhe",
        typ: "Winterschutz",
        zeitraum: "Ende November",
        monatIndex: 11,
        wiederkehrend: true,
        anleitung:
          "Nicht zurückschneiden! Halme schützen das Herz vor Nässe und Frost. Kein Laub anderer Pflanzen auf dem Gras lassen (Fäulnisgefahr). Bei exponierten Lagen Reisig als Schutz vor Kahlfrost.",
      },
      {
        titel: "Neupflanzung & Teilung",
        typ: "Pflanzung",
        zeitraum: "Mitte April bis Mai",
        monatIndex: 4,
        wiederkehrend: false,
        anleitung:
          "Erst wenn Boden erwärmt. Pflanzloch doppelt so groß wie Ballen. Bei schwerem Boden Drainage-Schicht aus Kies. Nicht düngen!",
      },
    ],
  },
];

// Hilfsfunktionen
export const kategorien = [...new Set(plants.map((p) => p.kategorie))];

// Alle Bodenarten (für spätere Filter-Erweiterung)
export const bodenArten = [...new Set(plants.map((p) => p.bodenArt))];

export const aufgabenTypen = {
  Schnitt: { label: "Schnitt", icon: "✂️", color: "orange" },
  Duengung: { label: "Düngung", icon: "🌱", color: "green" },
  Pflege: { label: "Pflege", icon: "🪴", color: "blue" },
  Pflanzung: { label: "Pflanzung", icon: "🌿", color: "emerald" },
  Ernte: { label: "Ernte", icon: "🍓", color: "red" },
  Winterschutz: { label: "Winterschutz", icon: "❄️", color: "sky" },
};
