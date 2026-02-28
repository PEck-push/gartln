import { useState } from "react";
import { kategorien, aufgabenTypen } from "../data/plants";

function Lexikon({ plants, gardenHook }) {
  const [search, setSearch] = useState("");
  const [filterKat, setFilterKat] = useState("Alle");
  const [selected, setSelected] = useState(null);
  const { isInGarden, addPlant, removePlant } = gardenHook;

  const filtered = plants.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sorte?.toLowerCase().includes(search.toLowerCase()) ||
      p.botanischerName.toLowerCase().includes(search.toLowerCase());
    const matchKat = filterKat === "Alle" || p.kategorie === filterKat;
    return matchSearch && matchKat;
  });

  if (selected) {
    return (
      <PlantDetail
        plant={selected}
        onBack={() => setSelected(null)}
        isInGarden={isInGarden(selected.id)}
        onToggleGarden={() =>
          isInGarden(selected.id) ? removePlant(selected.id) : addPlant(selected.id)
        }
      />
    );
  }

  return (
    <div className="px-4 pt-12 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Pflanzenlexikon</h1>
      <p className="text-gray-500 text-sm mb-4">{plants.length} Pflanzen</p>

      {/* Suche */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Name, Sorte oder Botanischer Name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-3 rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {["Alle", ...kategorien].map((k) => (
          <button
            key={k}
            onClick={() => setFilterKat(k)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filterKat === k
                ? "bg-green-500 text-white shadow"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((plant) => (
          <button
            key={plant.id}
            onClick={() => setSelected(plant)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
          >
            {/* Farb-Banner */}
            <div
              className="h-24 flex items-center justify-center"
              style={{ backgroundColor: plant.farbe + "33" }}
            >
              <span className="text-4xl">
                {plant.kategorie === "Obst" ? "🍓" :
                 plant.kategorie === "Kräuter" ? "🌿" :
                 plant.kategorie === "Gehölz" ? "🌳" : "🌱"}
              </span>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{plant.name}</h3>
                  <p className="text-xs text-gray-400 italic">{plant.sorte}</p>
                </div>
                {isInGarden(plant.id) && (
                  <span className="text-green-500 text-xs font-bold ml-1">✓</span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  plant.kategorie === "Obst" ? "bg-red-100 text-red-600" :
                  plant.kategorie === "Kräuter" ? "bg-green-100 text-green-600" :
                  plant.kategorie === "Gehölz" ? "bg-amber-100 text-amber-600" :
                  "bg-blue-100 text-blue-600"
                }`}>{plant.kategorie}</span>
                <span className="text-[10px] text-gray-400">{plant.licht}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">Keine Pflanzen gefunden.</p>
      )}
    </div>
  );
}

function PlantDetail({ plant, onBack, isInGarden, onToggleGarden }) {
  const [activeSection, setActiveSection] = useState("info");

  return (
    <div className="max-w-lg mx-auto pb-10">
      {/* Hero */}
      <div
        className="h-56 flex items-center justify-center relative"
        style={{ backgroundColor: plant.farbe + "44" }}
      >
        <button
          onClick={onBack}
          className="absolute top-12 left-4 bg-white/80 backdrop-blur rounded-full px-3 py-1.5 text-sm font-semibold text-gray-700"
        >
          ← Zurück
        </button>
        <span className="text-7xl">
          {plant.kategorie === "Obst" ? "🍓" :
           plant.kategorie === "Kräuter" ? "🌿" :
           plant.kategorie === "Gehölz" ? "🌳" : "🌱"}
        </span>
        <button
          onClick={onToggleGarden}
          className={`absolute bottom-4 right-4 px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all ${
            isInGarden
              ? "bg-red-100 text-red-600"
              : "bg-green-500 text-white"
          }`}
        >
          {isInGarden ? "Aus Garten entfernen" : "+ In meinen Garten"}
        </button>
      </div>

      {/* Titel */}
      <div className="px-4 pt-4 pb-2 bg-white">
        <h1 className="text-2xl font-bold text-gray-900">{plant.name}</h1>
        <p className="text-green-600 font-medium italic">{plant.sorte}</p>
        <p className="text-gray-400 text-xs">{plant.botanischerName}</p>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">{plant.beschreibung}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { label: "Licht", value: plant.licht, icon: "☀️" },
            { label: "Wasser", value: plant.wasserBedarf, icon: "💧" },
            { label: "Frost bis", value: `${plant.frosttemp}°C`, icon: "❄️" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-xl">{s.icon}</div>
              <div className="text-[10px] text-gray-400 font-medium mt-1">{s.label}</div>
              <div className="text-xs font-bold text-gray-800">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-white px-4 sticky top-0 z-10">
        {["info", "aufgaben", "nachbarn"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveSection(t)}
            className={`px-4 py-3 text-sm font-semibold capitalize border-b-2 transition-all ${
              activeSection === t
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-400"
            }`}
          >
            {t === "info" ? "Pflege" : t === "aufgaben" ? "Aufgaben" : "Nachbarn"}
          </button>
        ))}
      </div>

      <div className="px-4 pt-4">
        {activeSection === "info" && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">✅ Do's</h3>
              <ul className="space-y-1">
                {plant.dos.map((d, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-green-500 font-bold">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">❌ Don'ts</h3>
              <ul className="space-y-1">
                {plant.donts.map((d, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-red-400 font-bold">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">🌍 Bodenanforderungen</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-400">Boden:</span> <span className="font-medium">{plant.bodenArt}</span></div>
                <div><span className="text-gray-400">pH:</span> <span className="font-medium">{plant.phIdeal}</span></div>
                <div><span className="text-gray-400">Kalk:</span> <span className="font-medium">{plant.kalkvertraeglich ? "✓ Ja" : "✗ Nein"}</span></div>
                <div><span className="text-gray-400">Regen:</span> <span className="font-medium">{plant.regenToleranz}</span></div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "aufgaben" && (
          <div className="space-y-3">
            {plant.aufgaben.map((a, i) => {
              const typ = aufgabenTypen[a.typ] || { label: a.typ, icon: "📌" };
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{typ.icon}</span>
                    <span className="font-bold text-gray-900 text-sm">{a.titel}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold ml-auto">
                      {typ.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">📅 {a.zeitraum}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{a.anleitung}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeSection === "nachbarn" && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-green-700 mb-2">✅ Gute Nachbarn</h3>
              <div className="flex flex-wrap gap-2">
                {plant.nachbarnGut.map((n) => (
                  <span key={n} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-red-600 mb-2">❌ Schlechte Nachbarn</h3>
              <div className="flex flex-wrap gap-2">
                {plant.nachbarnSchlecht.map((n) => (
                  <span key={n} className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lexikon;

