import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Hexagon, Cpu } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "DATA_01", href: "#home", label: "Home" },
    { name: "DATA_02", href: "#about", label: "About Me" },
    { name: "DATA_03", href: "#portfolio", label: "Work" },
    { name: "DATA_04", href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled ? "bg-dark/10 backdrop-blur-2xl border-b border-primary/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <Hexagon className="w-10 h-10 text-primary group-hover:rotate-90 transition-transform duration-500" />
            <Cpu className="w-5 h-5 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white group-hover:neon-text transition-all">RAHMAT</span>
            <span className="text-[8px] font-black text-primary tracking-[0.4em] -mt-1">ENGINEER_OS</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center"
            >
              <span className="text-[8px] font-black text-primary/40 group-hover:text-primary transition-colors mb-1">{link.name}</span>
              <span className="text-xs font-black text-white/60 group-hover:text-white group-hover:neon-text transition-all uppercase tracking-widest">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onOpenTerminal}
            className="hidden md:block px-6 py-2 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-dark transition-all duration-500"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)' }}
          >
            Terminal_Access
          </motion.button>
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-dark border-b border-primary/20 p-8 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-[10px] font-black text-primary/40">{link.name}</span>
              <span className="text-xl font-black text-white hover:text-primary transition-colors">{link.label}</span>
            </a>
          ))}
          <button className="button-primary w-full justify-center" onClick={() => { onOpenTerminal(); setMobileMenuOpen(false); }}>Terminal_Access</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
