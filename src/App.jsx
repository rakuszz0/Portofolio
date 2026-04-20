import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import TerminalModal from "./components/TerminalModal";
import WeatherHUD from "./components/WeatherHUD";

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative cursor-none">
      <CustomCursor />
      <WeatherHUD />
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
      <main>
        <div className="noise-bg fixed inset-0 pointer-events-none z-0 opacity-[0.03]" />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
