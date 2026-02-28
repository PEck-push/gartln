// src/pages/Rasen.jsx
import { useState } from "react";
import {
  rasen,
  getRasenTasksForMonth,
  getMaehInfoForMonth,
} from "../data/rasen";
import { getCurrentMonthIndex, getMonthName } from "../utils/todoLogic";

// ──────────────────────────────────────────
// Hilfsfunktionen
// ──────────────────────────────────────────
const typStyle = {
  Duengung:  { icon: "🌱", bg: "bg-green-100",  text: "text-green-700",  label: "Düngung"  },
  Pflege:    { icon: "⚙️",  bg: "bg-blue-100",   text: "text-blue-700",   label: "Pflege"   },
  Schnitt:   { icon: "✂️",  bg: "bg-orange-100", text: "text-orange-700", label: "Schnitt"  },
  Winterschutz: { icon: "❄️", bg: "bg-sky-100",  text: "text-sky-700",   label: "Winterschutz" },
};

const prioritaetStyle = {
  hoch:   "border-l-4 border-green-500",
  mittel: "border-l-4 border-amber-400",
  niedrig: "border-l-4 border-gray-300",
};

// ──────────────────────────────────────────
// Sub-Komponente: Rasen-Service Checkliste
// ──────────────────────────────────────────
function ServiceChecklist({ schritte }) {
  const [checked, setChecked] = useState({});

  const toggle = (nr) =>
    setChecked((prev) => ({ ...prev, [nr]: !prev[nr] }));

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="mt-3">
      {/* Fortschrittsbalken */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-2 bg-green-400 rounded-full transition-all duration-500"
            style={{ width: `${(done / schritte.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-bold text-gray-500">
          {done}/{schritte.length}
        </span>
      </div>

      {/* Schritte */}
      <div className="space-y-2">
        {schritte.map((s) => (
          <button
            key={s.nr}
            onClick={() => toggle(s.nr)}
            className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
              checked[s.nr]
                ? "bg-green-50 border border-green-200"
                : "bg-gray-50 border border-transparent hover:border-gray-200"
            }`}
          >
            {/* Checkbox */}
            <div
              className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                checked[s.nr]
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }`}
            >
              {checked[s.nr] && (
                <span className="text-white text-[10px] font-bold">✓</span>
              )}
            </div>

            <div>
              <p
                className={`text-sm font-bold ${
                  checked[s.nr] ? "line-through text-gray-400" : "text-gray-900"
                }`}
              >
                {s.nr}. {s.aktion}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                {s.detail}
              </p>
            </div>
          </button>
        ))}
      </div>

      {done === schritte.length && (
        <div className="mt-3 p-3 bg-green-100 rounded-xl text-center text-sm font-bold text-green-700">
          🎉 Rasen-Service abgeschlossen!
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────
// Sub-Komponente: Aufgaben-Card
// ──────────────────────────────────────────
function AufgabeCard({ aufgabe, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const stil = typStyle[aufgabe.typ] || { icon: "📌", bg: "bg-gray-100", text: "text-gray-600", label: aufgabe.typ };
  const prio = prioritaetStyle[aufgabe.prioritaet] || "";
  const istService = !!aufgabe.schritte;

  return (
    <div className={`bg-white rounded-2xl shadow-sm overflow-hidden ${prio}`}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="text-2xl flex-shrink-0">{aufgabe.icon || stil.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm leading-tight">{aufgabe.titel}</p>
          <p className="text-xs text-gray-400 mt-0.5">📅 {aufgabe.zeitraum}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stil.bg} ${stil.text}`}>
            {stil.label}
          </span>
          <span className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-gray-50 pt-3">
          {istService ? (
            <ServiceChecklist schritte={aufgabe.schritte} />
          ) : (
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {aufgabe.anleitung}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────
// Sub-Komponente: Mähkalender
// ──────────────────────────────────────────
function Maehkalender({ currentMonth }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <h3 className="font-bold text-gray-900 mb-3 text-sm">🌿 Mähkalender</h3>
      <div className="grid grid-cols-6 gap-1.5">
        {rasen.maehKalender.map((m) => {
          const isNow = m.monat === currentMonth;
          return (
            <div
              key={m.monat}
              className={`rounded-xl p-1.5 text-center transition-all ${
                isNow
                  ? "bg-green-500 text-white shadow-sm"
                  : m.aktiv
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-50 text-gray-300"
              }`}
            >
              <p className={`text-[9px] font-bold uppercase ${isNow ? "text-white" : ""}`}>
                {m.label.substring(0, 3)}
              </p>
              <p className={`text-[9px] mt-0.5 ${isNow ? "text-green-100" : "text-gray-400"}`}>
                {m.aktiv ? m.hoehe : "✗"}
              </p>
            </div>
          );
        })}
      </div>

      {/* Aktueller Monat Detail */}
      {(() => {
        const info = rasen.maehKalender.find((m) => m.monat === currentMonth);
        return info ? (
          <div className="mt-3 p-3 bg-green-50 rounded-xl flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <p className="text-xs font-bold text-green-800">{getMonthName(currentMonth)}</p>
              <p className="text-xs text-green-600">
                {info.aktiv
                  ? `${info.frequenz} · Schnitthöhe ${info.hoehe}`
                  : "Kein Schnitt nötig"}
              </p>
            </div>
          </div>
        ) : null;
      })()}
    </div>
  );
}

// ──────────────────────────────────────────
// Sub-Komponente: Bewässerungs-Guide
// ──────────────────────────────────────────
function BewaesserungsGuide({ maxTemp }) {
  // Empfehlung basierend auf Temperatur (optional via Props aus Dashboard)
  const isHitze = maxTemp && maxTemp >= 30;
  const isSommer = [6, 7, 8].includes(getCurrentMonthIndex());

  return (
    <div className={`rounded-2xl p-4 shadow-sm ${isHitze ? "bg-orange-50 border border-orange-100" : "bg-white"}`}>
      <h3 className="font-bold text-gray-900 mb-3 text-sm">
        💧 Bewässerungs-Guide
      </h3>
      <div className="space-y-2">
        {[
          { bedingung: "Normal (Frühjahr/Herbst)", frequenz: "1× / Woche", menge: "15–20 L/m²", icon: "🌤️" },
          { bedingung: "Hochsommer / Hitze (>30°C)", frequenz: "2× / Woche", menge: "20–25 L/m²", icon: "☀️", highlight: isHitze },
          { bedingung: "Nach Regen", frequenz: "Pausieren", menge: "–", icon: "🌧️" },
          { bedingung: "Winter (Boden gefroren)", frequenz: "Kein Gießen", menge: "–", icon: "❄️" },
        ].map((r) => (
          <div
            key={r.bedingung}
            className={`flex items-center gap-3 p-2.5 rounded-xl ${
              r.highlight ? "bg-orange-100" : "bg-gray-50"
            }`}
          >
            <span className="text-lg flex-shrink-0">{r.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800">{r.bedingung}</p>
              <p className="text-[10px] text-gray-500">{r.frequenz}</p>
            </div>
            <span className="text-xs font-bold text-gray-600 flex-shrink-0">{r.menge}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-3">
        💡 Tipp: Morgens gießen (weniger Verdunstung, kein Schimmelrisiko).
      </p>
    </div>
  );
}

// ──────────────────────────────────────────
// Sub-Komponente: Do's & Don'ts
// ──────────────────────────────────────────
function DosDonts() {
  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-green-700 mb-2 text-sm">✅ Do's</h3>
        <ul className="space-y-1.5">
          {rasen.dos.map((d, i) => (
            <li key={i} className="text-xs text-gray-600 flex gap-2 leading-relaxed">
              <span className="text-green-500 font-bold flex-shrink-0">•</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-red-600 mb-2 text-sm">❌ Don'ts</h3>
        <ul className="space-y-1.5">
          {rasen.donts.map((d, i) => (
            <li key={i} className="text-xs text-gray-600 flex gap-2 leading-relaxed">
              <span className="text-red-400 font-bold flex-shrink-0">•</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Hauptseite: Rasen Tab
// ──────────────────────────────────────────
export default function Rasen({ maxTemp }) {
  const currentMonth = getCurrentMonthIndex();
  const [activeSection, setActiveSection] = useState("aufgaben");

  // Aufgaben für aktuellen + nächsten Monat
  const todoNow  = getRasenTasksForMonth(currentMonth);
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  const todoNext = getRasenTasksForMonth(nextMonth);

  // Alle Aufgaben geordnet nach Monat für Jahresüberblick
  const alleAufgaben = [...rasen.aufgaben].sort((a, b) => a.monatIndex - b.monatIndex);

  const sections = [
    { id: "aufgaben", label: "Aufgaben" },
    { id: "maehen",   label: "Mähen"   },
    { id: "giessen",  label: "Gießen"  },
    { id: "wissen",   label: "Wissen"  },
  ];

  return (
    <div className="px-4 pt-12 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-900">Rasen</h1>
        <p className="text-gray-500 text-sm mt-1">
          {getMonthName(currentMonth)} · {todoNow.length > 0 ? `${todoNow.length} Aufgabe${todoNow.length > 1 ? "n" : ""} jetzt` : "Keine Aufgaben diesen Monat"}
        </p>
      </div>

      {/* Monatsstatus-Card */}
      {todoNow.length > 0 && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 mb-5 text-white shadow">
          <p className="text-xs font-semibold text-green-100 mb-1">
            📋 Jetzt im {getMonthName(currentMonth)}
          </p>
          {todoNow.map((t, i) => (
            <div key={i} className="flex items-center gap-2 mt-1">
              <span>{t.icon}</span>
              <span className="font-bold text-sm">{t.titel}</span>
            </div>
          ))}
        </div>
      )}

      {todoNow.length === 0 && (
        <div className="bg-gray-100 rounded-2xl p-4 mb-5 text-center">
          <p className="text-2xl mb-1">😌</p>
          <p className="text-sm text-gray-500 font-medium">
            Im {getMonthName(currentMonth)} gibt es keine speziellen Rasenaufgaben.
          </p>
          {todoNext.length > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              Nächster Monat: {todoNext.map((t) => t.titel).join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Tab-Navigation */}
      <div className="flex gap-1 bg-gray-100 rounded-2xl p-1 mb-5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === s.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      {activeSection === "aufgaben" && (
        <div className="space-y-3">
          {/* Aktuelle Aufgaben zuerst */}
          {todoNow.length > 0 && (
            <>
              <p className="text-xs font-bold text-green-600 uppercase tracking-wide px-1">
                Jetzt fällig
              </p>
              {todoNow.map((a, i) => (
                <AufgabeCard key={i} aufgabe={a} defaultOpen={true} />
              ))}
              {todoNext.length > 0 && (
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1 pt-2">
                  Nächster Monat – {getMonthName(nextMonth)}
                </p>
              )}
              {todoNext.map((a, i) => (
                <AufgabeCard key={"next" + i} aufgabe={a} />
              ))}
            </>
          )}

          {/* Jahresüberblick wenn kein aktueller Task */}
          {todoNow.length === 0 && (
            <>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1">
                Alle Aufgaben im Jahresverlauf
              </p>
              {alleAufgaben.map((a, i) => (
                <AufgabeCard key={i} aufgabe={a} defaultOpen={false} />
              ))}
            </>
          )}

          {/* Wenn aktueller Monat Aufgaben hat, trotzdem Jahresüberblick anzeigen */}
          {todoNow.length > 0 && (
            <>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1 pt-2">
                Alle Aufgaben im Jahresverlauf
              </p>
              {alleAufgaben
                .filter((a) => a.monatIndex !== currentMonth && a.monatIndex !== nextMonth)
                .map((a, i) => (
                  <AufgabeCard key={"all" + i} aufgabe={a} />
                ))}
            </>
          )}
        </div>
      )}

      {activeSection === "maehen" && (
        <div className="space-y-4">
          <Maehkalender currentMonth={currentMonth} />

          {/* Mäh-Tipps */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">💡 Mäh-Tipps</h3>
            <div className="space-y-3">
              {[
                { titel: "Die 1/3-Regel", text: "Nie mehr als ein Drittel der Halmlänge auf einmal abschneiden – sonst Trockenstress." },
                { titel: "Scharfe Klingen", text: "Stumpfe Messer fransen Halme aus → Grauschleier und Krankheiten. Messer 1× pro Saison schärfen." },
                { titel: "Schnittgut", text: "Bei kurzen Intervallen Schnittgut mulchen (verrottet als Dünger). Bei langem Gras unbedingt auffangen." },
                { titel: "Frühsommer-Mähen", text: "Im April/Mai wöchentlich mähen – hält Unkräuter und Moos in Schach." },
                { titel: "Hochsommer", text: "Im Juli/August Schnitthöhe auf 5–6 cm erhöhen. Langer Rasen beschattet den Boden und reduziert Verdunstung." },
              ].map((t) => (
                <div key={t.titel} className="flex gap-3">
                  <span className="text-green-400 font-bold text-lg leading-tight flex-shrink-0">→</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "giessen" && (
        <div className="space-y-4">
          <BewaesserungsGuide maxTemp={maxTemp} />

          {/* Sprinklersystem-Tipp */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2 text-sm">💡 Gießzeiten</h3>
            <p className="text-xs text-blue-600 leading-relaxed">
              <strong>Beste Zeit:</strong> Früh morgens (6–9 Uhr). Die Blätter trocknen bis zum Mittag ab, was Pilzkrankheiten verhindert. Gleichzeitig ist die Verdunstung minimal.
              <br /><br />
              <strong>Schlimmste Zeit:</strong> Mittags bei Sonne → bis zu 50% des Wassers verdunstet. Abends → Blätter bleiben nass → Schneeschimmel-Risiko im Herbst.
            </p>
          </div>

          {/* Trockenheitsstress erkennen */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">🔍 Trockenheitsstress erkennen</h3>
            <div className="space-y-2">
              {[
                { zeichen: "Fußabdrücke bleiben sichtbar", bedeutung: "Rasen sofort wässern", level: "⚠️" },
                { zeichen: "Gras verfärbt sich blau-grau", bedeutung: "Notfall – sofort wässern", level: "🔴" },
                { zeichen: "Rasen federt kaum zurück", bedeutung: "Moderate Trockenheit", level: "🟡" },
                { zeichen: "Braune Spitzen einzelner Halme", bedeutung: "Regelmäßiger Check nötig", level: "🟢" },
              ].map((z) => (
                <div key={z.zeichen} className="flex items-start gap-3 p-2 bg-gray-50 rounded-xl">
                  <span className="text-lg flex-shrink-0">{z.level}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{z.zeichen}</p>
                    <p className="text-[10px] text-gray-500">{z.bedeutung}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "wissen" && (
        <div className="space-y-4">
          <DosDonts />

          {/* pH & Boden */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">🌍 Boden & pH-Wert</h3>
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Sauer (pH 4)</span>
                <span className="font-bold text-green-700">Ideal: 5.5–6.5</span>
                <span className="text-gray-400">Alkalisch (pH 9)</span>
              </div>
              <div className="h-3 bg-gradient-to-r from-red-300 via-green-400 to-blue-300 rounded-full" />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Zu sauer (unter 5.5):</strong> Moos breitet sich aus, Gräser werden schwach. Abhilfe: Gartenkalk ausbringen.
              <br /><br />
              <strong>Zu alkalisch (über 6.5):</strong> Eisenmangel, Rasen wird gelblich. Abhilfe: Schwefelblüte oder sauren Rasendünger verwenden.
            </p>
          </div>

          {/* Moos-Bekämpfung */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">🌿 Moos – Ursachen & Lösung</h3>
            <div className="space-y-2">
              {[
                { ursache: "Verdichteter Boden", loesung: "Aerifizieren + Sanden" },
                { ursache: "Zu saurer Boden (pH < 5.5)", loesung: "Kalken nach pH-Messung" },
                { ursache: "Zu wenig Licht (Schatten)", loesung: "Schattenrasen-Saatgut" },
                { ursache: "Zu kurzes Mähen", loesung: "Schnitthöhe auf 4–5 cm erhöhen" },
                { ursache: "Nährstoffmangel", loesung: "Konsequentes Düngeprogramm" },
              ].map((m) => (
                <div key={m.ursache} className="flex gap-3 p-2 bg-gray-50 rounded-xl">
                  <span className="text-xs text-red-400 font-semibold flex-shrink-0 w-36">→ {m.ursache}</span>
                  <span className="text-xs text-green-700 font-medium">{m.loesung}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-8" />
    </div>
  );
}
