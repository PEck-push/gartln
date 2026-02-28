export function getTasksForMonth(plants, monthIndex) {
  return plants
    .flatMap((plant) =>
      plant.aufgaben
        .filter((a) => a.monatIndex === monthIndex)
        .map((a) => ({ ...a, plant }))
    )
    .sort((a, b) => a.typ.localeCompare(b.typ));
}

export function getTasksForGarden(gardenEntries, allPlants, monthIndex) {
  const myPlants = allPlants.filter((p) =>
    gardenEntries.some((g) => g.plantId === p.id)
  );
  return getTasksForMonth(myPlants, monthIndex);
}

export function getMonthName(index) {
  return new Date(2000, index - 1, 1).toLocaleString("de-AT", { month: "long" });
}

export function getCurrentMonthIndex() {
  return new Date().getMonth() + 1; // 1–12
}
