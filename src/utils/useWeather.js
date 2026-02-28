import { useState, useEffect } from "react";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Standort ermitteln (Browser Geolocation)
    if (!navigator.geolocation) {
      // Fallback: Wien
      fetchWeather(48.2082, 16.3738, "Wien");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        // Reverse Geocode über Open-Meteo's kostenlose Geocoding API
        reverseGeocode(latitude, longitude).then((city) => {
          fetchWeather(latitude, longitude, city);
        });
      },
      () => {
        // Geolocation verweigert → Fallback Wien
        fetchWeather(48.2082, 16.3738, "Wien");
      },
      { timeout: 5000 }
    );
  }, []);

  async function reverseGeocode(lat, lon) {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await res.json();
      return (
        data?.address?.city ||
        data?.address?.town ||
        data?.address?.village ||
        "Mein Standort"
      );
    } catch {
      return "Mein Standort";
    }
  }

  async function fetchWeather(lat, lon, city) {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m",
        daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code",
        timezone: "Europe/Vienna",
        forecast_days: 4,
      });
      const res = await fetch(`${BASE_URL}?${params}`);
      if (!res.ok) throw new Error("Wetter-API Fehler");
      const data = await res.json();

      setLocation(city);
      setWeather({
        current: {
          temp: Math.round(data.current.temperature_2m),
          feelsLike: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
          weatherCode: data.current.weather_code,
        },
        daily: data.daily.time.map((date, i) => ({
          date,
          maxTemp: Math.round(data.daily.temperature_2m_max[i]),
          minTemp: Math.round(data.daily.temperature_2m_min[i]),
          precipProb: data.daily.precipitation_probability_max[i],
          weatherCode: data.daily.weather_code[i],
        })),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { weather, location, loading, error };
}

// WMO Weather Code → Beschreibung & Emoji
export function getWeatherInfo(code) {
  if (code === 0) return { label: "Klar", emoji: "☀️" };
  if (code <= 2) return { label: "Teils bewölkt", emoji: "⛅" };
  if (code === 3) return { label: "Bewölkt", emoji: "☁️" };
  if (code <= 49) return { label: "Nebel", emoji: "🌫️" };
  if (code <= 59) return { label: "Nieselregen", emoji: "🌦️" };
  if (code <= 69) return { label: "Regen", emoji: "🌧️" };
  if (code <= 79) return { label: "Schneefall", emoji: "❄️" };
  if (code <= 84) return { label: "Schauer", emoji: "🌦️" };
  if (code <= 94) return { label: "Schneeregen", emoji: "🌨️" };
  return { label: "Gewitter", emoji: "⛈️" };
}


// ============================================================
// src/hooks/useGarden.js
// ============================================================
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

  // Persistieren bei jeder Änderung
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(garden));
  }, [garden]);

  function addPlant(plantId, notiz = "") {
    if (garden.some((g) => g.plantId === plantId)) return; // Duplikat verhindern
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
