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

