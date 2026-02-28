import { useState, useEffect } from "react";

const STORAGE_KEY = "mein_garten_v1";

export function useGarden() {
  const [garden, setGarden] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(garden));
  }, [garden]);

  function addPlant(plantId, notiz = "") {
    if (garden.some((g) => g.plantId === plantId)) return;
    setGarden((prev) => [
      ...prev,
      {
        plantId,
        notiz,
        hinzugefuegtAm: new Date().toISOString().split("T")[0],
      },
    ]);
  }

  function removePlant(plantId) {
    setGarden((prev) => prev.filter((g) => g.plantId !== plantId));
  }

  function updateNotiz(plantId, notiz) {
    setGarden((prev) =>
      prev.map((g) => (g.plantId === plantId ? { ...g, notiz } : g))
    );
  }

  function isInGarden(plantId) {
    return garden.some((g) => g.plantId === plantId);
  }

  return { garden, addPlant, removePlant, updateNotiz, isInGarden };
}
