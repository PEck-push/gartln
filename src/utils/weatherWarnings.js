
/**
 * Gibt Frostwarnungen für Gartenpflanzen zurück.
 * @param {number} minTemp - Prognostizierte Mindesttemperatur
 * @param {Array}  gardenPlants - gefilterte Pflanzen aus "Mein Garten"
 * @returns {Array} Pflanzen mit Frostrisiko
 */
export function getFrostRisk(minTemp, gardenPlants) {
  if (minTemp >= 2) return []; // Kein Frost in Sicht
  return gardenPlants.filter((p) => {
    // Risiko wenn Mindesttemp nahe oder unter dem Frostschutzpunkt der Pflanze
    const puffer = 3; // °C Sicherheitspuffer
    return minTemp <= p.frosttemp + puffer + 15; // Warnung ab 15°C über Frostgrenze
  });
}

/**
 * Gibt Hitzewarnungen zurück (>32°C).
 */
export function getHeatRisk(maxTemp, gardenPlants) {
  if (maxTemp < 32) return [];
  return gardenPlants.filter(
    (p) => p.wasserBedarf === "Hoch" || p.licht === "Halbschatten" || p.licht === "Schatten"
  );
}

/**
 * Wetterstatus-Label
 */
export function getWeatherStatus(minTemp, maxTemp) {
  if (minTemp < 0) return { label: "Frostgefahr", level: "danger", icon: "🥶" };
  if (minTemp < 3) return { label: "Frostrisiko", level: "warning", icon: "❄️" };
  if (maxTemp >= 35) return { label: "Extremhitze", level: "danger", icon: "🔥" };
  if (maxTemp >= 30) return { label: "Hitzewelle", level: "warning", icon: "☀️" };
  return { label: "Gut für Gartenpflege", level: "ok", icon: "🌤️" };
}
