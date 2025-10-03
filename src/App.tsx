import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AmbajiPage } from "./components/AmbajiPage";
import { ChamundaPage } from "./components/ChamundaPage";
import { DwarkaPage } from "./components/DwarkaPage";
import { SomnathDashboard } from "./components/SomnathDashboard"; // ✅ Import Somnath
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "ambaji":
        return <AmbajiPage onNavigate={handleNavigate} />;
      case "chamunda":
        return <ChamundaPage onNavigate={handleNavigate} />;
      case "dwarka":
        return <DwarkaPage onNavigate={handleNavigate} />;
      case "somnath": // ✅ Added Somnath
        return <SomnathDashboard onBack={() => handleNavigate("home")} />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderCurrentPage()}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
