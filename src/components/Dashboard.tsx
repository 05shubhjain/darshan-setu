import { useState } from "react";
import { DashboardSelector } from "./DashboardSelector";
import { SomnathDashboard } from "./SomnathDashboard";
import { DwarkaDashboard } from "./DwarkaDashboard";
import { AmbajiDashboard } from "./AmbajiDashboard";
import { PavagadhDashboard } from "./PavagadhDashboard";

export function Dashboard() {
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);

  const handleSelectTemple = (temple: string) => {
    setSelectedTemple(temple);
  };

  const handleBackToSelector = () => {
    setSelectedTemple(null);
  };

  // Render individual temple dashboard based on selection
  if (selectedTemple) {
    switch (selectedTemple) {
      case "somnath":
        return <SomnathDashboard onBack={handleBackToSelector} />;
      case "dwarka":
        return <DwarkaDashboard onBack={handleBackToSelector} />;
      case "ambaji":
        return <AmbajiDashboard onBack={handleBackToSelector} />;
      case "pavagadh":
        return <PavagadhDashboard onBack={handleBackToSelector} />;
      default:
        return <DashboardSelector onSelectTemple={handleSelectTemple} />;
    }
  }

  // Render dashboard selector by default
  return <DashboardSelector onSelectTemple={handleSelectTemple} />;
}