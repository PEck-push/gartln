// ============================================================
// src/App.jsx
// ============================================================
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Lexikon from "./pages/Lexikon";
import MeinGarten from "./pages/MeinGarten";
import Rasen from "./pages/Rasen";
import { useGarden } from "./hooks/useGarden";
import { plants } from "./data/plants";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const gardenHook = useGarden();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "lexikon",   label: "Lexikon",   icon: "📖" },
    { id: "garten",    label: "Garten",    icon: "🌿" },
    { id: "rasen",     label: "Rasen",     icon: "🌱" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-sans pb-20">
      {/* Page Content */}
      <main>
        {activeTab === "dashboard" && (
          <Dashboard plants={plants} gardenHook={gardenHook} />
        )}
        {activeTab === "lexikon" && (
          <Lexikon plants={plants} gardenHook={gardenHook} />
        )}
        {activeTab === "garten" && (
          <MeinGarten plants={plants} gardenHook={gardenHook} />
        )}
        {activeTab === "rasen" && <Rasen />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 z-50 shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "text-[#13ec13]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className={`text-[10px] font-semibold ${activeTab === tab.id ? "text-green-600" : ""}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}


// ============================================================
// src/pages/Dashboard.jsx
// ============================================================
import { useWeather, getWeatherInfo } from "../hooks/useWeather";
import {
  getTasksForGarden,
  getTasksForMonth,
  getCurrentMonthIndex,
  getMonthName,
} from "../utils/todoLogic";
import { getFrostRisk, getHeatRisk, getWeatherStatus } from "../utils/weatherWarnings";
import { aufgabenTypen } from "../data/plants";

function Dashboard({ plants, gardenHook }) {
  const { weather, location, loading, error } = useWeather();
  const { garden } = gardenHook;
  const currentMonth = getCurrentMonthIndex();
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;

  const gardenPlants = plants.filter((p) =>
    garden.some((g) => g.plantId === p.id)
  );

  // To-Dos: wenn Garten leer → alle Pflanzen, sonst nur eigene
  const todos =
    garden.length > 0
      ? getTasksForGarden(garden, plants, currentMonth)
      : getTasksForMonth(plants, currentMonth);

  const nextTodos =
    garden.length > 0
      ? getTasksForGarden(garden, plants, nextMonth)
      : getTasksForMonth(plants, nextMonth);

  // Wetterwarnungen
  const minTemp = weather?.daily?.[0]?.minTemp ?? 20;
  const maxTemp = weather?.daily?.[0]?.maxTemp ?? 20;
  const frostRisk = getFrostRisk(minTemp, gardenPlants);
  const heatRisk = getHeatRisk(maxTemp, gardenPlants);
  const status = getWeatherStatus(minTemp, maxTemp);

  return (
    <div className="px-4 pt-12 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Garten Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          {getMonthName(currentMonth)} – {garden.length > 0 ? `${garden.length} Pflanzen im Garten` : "Alle Pflanzen"}
        </p>
      </div>

      {/* Wetter Card */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 mb-5 shadow-sm">
        {loading && <p className="text-gray-500 text-sm">Wetter wird geladen…</p>}
        {error && <p className="text-red-500 text-sm">Wetterdaten nicht verfügbar</p>}
        {weather && (
          <>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-green-700 text-sm font-semibold flex items-center gap-1">
                  📍 {location}
                </p>
                <div className="text-5xl font-bold text-gray-900 mt-1">
                  {weather.current.temp}°
                </div>
                <p className="text-green-800 font-medium mt-1">
                  {getWeatherInfo(weather.current.weatherCode).emoji}{" "}
                  {getWeatherInfo(weather.current.weatherCode).label}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-700">💧 {weather.current.humidity}%</p>
                <p className="text-xs text-green-700 mt-1">💨 {weather.current.windSpeed} km/h</p>
              </div>
            </div>

            {/* 3-Tage Forecast */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-green-200">
              {weather.daily.slice(0, 4).map((day) => (
                <div key={day.date} className="flex-1 text-center">
                  <p className="text-[10px] text-green-700 font-semibold">
                    {new Date(day.date).toLocaleDateString("de-AT", { weekday: "short" })}
                  </p>
                  <p className="text-lg">{getWeatherInfo(day.weatherCode).emoji}</p>
                  <p className="text-xs font-bold text-gray-800">{day.maxTemp}°</p>
                  <p className="text-[10px] text-gray-500">{day.minTemp}°</p>
                  <p className="text-[10px] text-blue-500">{day.precipProb}%</p>
                </div>
              ))}
            </div>

            {/* Wetter-Status */}
            <div className={`mt-4 p-3 rounded-xl text-sm font-medium flex items-center gap-2 ${
              status.level === "danger" ? "bg-red-100 text-red-700" :
              status.level === "warning" ? "bg-amber-100 text-amber-700" :
              "bg-white/60 text-green-800"
            }`}>
              <span className="text-lg">{status.icon}</span>
              {status.label}
            </div>
          </>
        )}
      </section>

      {/* Warnungen */}
      {frostRisk.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-blue-800 text-sm mb-2">❄️ Frostschutz erforderlich</h3>
          <p className="text-blue-600 text-xs">
            Schütze folgende Pflanzen: {frostRisk.map((p) => p.name).join(", ")}
          </p>
        </div>
      )}
      {heatRisk.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-orange-800 text-sm mb-2">☀️ Wässern bei Hitze</h3>
          <p className="text-orange-600 text-xs">
            Besonders: {heatRisk.map((p) => p.name).join(", ")}
          </p>
        </div>
      )}

      {/* To-Dos aktueller Monat */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          Aufgaben im {getMonthName(currentMonth)}
        </h2>
        {todos.length === 0 ? (
          <p className="text-gray-400 text-sm bg-white rounded-xl p-4">
            Keine Aufgaben in diesem Monat 🎉
          </p>
        ) : (
          <div className="space-y-3">
            {todos.map((task, i) => {
              const typ = aufgabenTypen[task.typ] || { label: task.typ, icon: "📌", color: "gray" };
              return (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{typ.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-gray-900">{task.titel}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                          {typ.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">
                        🌿 {task.plant.name} {task.plant.sorte && `'${task.plant.sorte}'`}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">📅 {task.zeitraum}</p>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {task.anleitung.substring(0, 120)}
                        {task.anleitung.length > 120 ? "…" : ""}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Forecast nächster Monat */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          Vorschau {getMonthName(nextMonth)}
        </h2>
        {nextTodos.length === 0 ? (
          <p className="text-gray-400 text-sm bg-white rounded-xl p-4">
            Im {getMonthName(nextMonth)} sind keine Aufgaben geplant.
          </p>
        ) : (
          <div className="space-y-2">
            {nextTodos.map((task, i) => {
              const typ = aufgabenTypen[task.typ] || { label: task.typ, icon: "📌" };
              return (
                <div key={i} className="bg-white/70 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{typ.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{task.titel}</span>
                    <span className="text-xs text-gray-400">– {task.plant.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;


// ============================================================
// src/pages/Lexikon.jsx
// ============================================================
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


// ============================================================
// src/pages/MeinGarten.jsx
// ============================================================
import { useState } from "react";
import { getTasksForGarden, getCurrentMonthIndex, getMonthName } from "../utils/todoLogic";
import { aufgabenTypen } from "../data/plants";

function MeinGarten({ plants, gardenHook }) {
  const { garden, addPlant, removePlant, updateNotiz, isInGarden } = gardenHook;
  const [showAdd, setShowAdd] = useState(false);
  const [editNotiz, setEditNotiz] = useState(null); // { plantId, notiz }
  const [search, setSearch] = useState("");
  const currentMonth = getCurrentMonthIndex();

  const gardenPlants = plants
    .filter((p) => garden.some((g) => g.plantId === p.id))
    .map((p) => ({
      ...p,
      gardenData: garden.find((g) => g.plantId === p.id),
    }));

  const myTodos = getTasksForGarden(garden, plants, currentMonth);

  if (gardenPlants.length === 0 && !showAdd) {
    return (
      <div className="px-4 pt-12 max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mein Garten</h1>
        <div className="py-16">
          <p className="text-6xl mb-4">🌱</p>
          <p className="text-gray-500 mb-6">Dein Garten ist noch leer.</p>
          <button
            onClick={() => setShowAdd(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-green-600 transition"
          >
            + Erste Pflanze hinzufügen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-12 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mein Garten</h1>
          <p className="text-gray-500 text-sm">{gardenPlants.length} Pflanzen</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow"
        >
          + Hinzufügen
        </button>
      </div>

      {/* Aktuelle Aufgaben für meinen Garten */}
      {myTodos.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            📋 Aufgaben im {getMonthName(currentMonth)}
          </h2>
          <div className="space-y-2">
            {myTodos.map((task, i) => {
              const typ = aufgabenTypen[task.typ] || { icon: "📌", label: task.typ };
              return (
                <div key={i} className="bg-white rounded-xl p-3 shadow-sm flex items-start gap-3">
                  <span className="text-lg">{typ.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{task.titel}</p>
                    <p className="text-xs text-gray-400">{task.plant.name} · {task.zeitraum}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Meine Pflanzen */}
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">Meine Pflanzen</h2>
        <div className="space-y-3">
          {gardenPlants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ backgroundColor: plant.farbe + "33" }}
                >
                  {plant.kategorie === "Obst" ? "🍓" :
                   plant.kategorie === "Kräuter" ? "🌿" :
                   plant.kategorie === "Gehölz" ? "🌳" : "🌱"}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900">{plant.name}</h3>
                  <p className="text-xs text-gray-400 italic">{plant.sorte}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Hinzugefügt: {plant.gardenData.hinzugefuegtAm}
                  </p>
                  {plant.gardenData.notiz && (
                    <p className="text-xs text-gray-600 mt-1 bg-gray-50 rounded-lg px-2 py-1">
                      📝 {plant.gardenData.notiz}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setEditNotiz({ plantId: plant.id, notiz: plant.gardenData.notiz || "" })}
                    className="text-xs text-blue-500 font-medium"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => removePlant(plant.id)}
                    className="text-xs text-red-400 font-medium"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal: Pflanze hinzufügen */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-w-lg mx-auto rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Pflanze hinzufügen</h2>
              <button onClick={() => { setShowAdd(false); setSearch(""); }} className="text-gray-400 text-xl">✕</button>
            </div>
            <input
              type="text"
              placeholder="Suchen…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
              autoFocus
            />
            <div className="space-y-2">
              {plants
                .filter((p) =>
                  !isInGarden(p.id) &&
                  (p.name.toLowerCase().includes(search.toLowerCase()) ||
                   p.sorte?.toLowerCase().includes(search.toLowerCase()))
                )
                .map((plant) => (
                  <button
                    key={plant.id}
                    onClick={() => { addPlant(plant.id); setShowAdd(false); setSearch(""); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-left transition"
                  >
                    <span className="text-2xl">
                      {plant.kategorie === "Obst" ? "🍓" :
                       plant.kategorie === "Kräuter" ? "🌿" :
                       plant.kategorie === "Gehölz" ? "🌳" : "🌱"}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{plant.name}</p>
                      <p className="text-xs text-gray-400">{plant.sorte} · {plant.kategorie}</p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal: Notiz bearbeiten */}
      {editNotiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">Notiz bearbeiten</h2>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              rows={4}
              placeholder="z.B. Steht beim Gartentor, linke Seite…"
              value={editNotiz.notiz}
              onChange={(e) => setEditNotiz((prev) => ({ ...prev, notiz: e.target.value }))}
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setEditNotiz(null)}
                className="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold"
              >
                Abbrechen
              </button>
              <button
                onClick={() => { updateNotiz(editNotiz.plantId, editNotiz.notiz); setEditNotiz(null); }}
                className="flex-1 py-2 rounded-xl bg-green-500 text-white text-sm font-bold"
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeinGarten;
