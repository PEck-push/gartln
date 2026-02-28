import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Lexikon from "./pages/Lexikon";
import MeinGarten from "./pages/MeinGarten";
import { useGarden } from "./hooks/useGarden";
import { plants } from "./data/plants";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const gardenHook = useGarden();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "lexikon", label: "Lexikon", icon: "📖" },
    { id: "garten", label: "Mein Garten", icon: "🌿" },
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
