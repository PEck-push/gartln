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
