import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import aiImage from "../assets/AI.png";

const WelcomeNotification = ({ onOpenTerminal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[120] w-full max-w-[350px]"
        >
          <div className="relative group">
            {/* Cyber Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative glass border-primary/30 rounded-2xl p-6 overflow-hidden">
              {/* Scanline Effect */}
              <div className="scan-line opacity-20" />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border border-primary/50 p-0.5 bg-dark overflow-hidden flex items-center justify-center">
                    <img 
                      src={aiImage} 
                      alt="AI" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-primary/10 animate-pulse pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">Rahmat_Ilahi</h4>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">System_Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-white/20 hover:text-primary transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="space-y-3">
                <p className="text-white/80 text-xs leading-relaxed font-medium">
                  Hi there! Welcome to my <span className="text-primary font-bold italic">Neural_Archive</span>. 🚀
                </p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  Feel free to explore my latest protocols. If you need any assistance, just hit the <button onClick={() => { onOpenTerminal(); setIsVisible(false); }} className="text-white underline decoration-primary/30 hover:text-primary transition-colors cursor-pointer">Terminal_Access</button>.
                </p>
              </div>

              {/* Footer Tags */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <ShieldCheck className="w-3 h-3 text-primary/40" />
                  <Zap className="w-3 h-3 text-primary/40" />
                </div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Just Now // JKT_OS</span>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 border-b border-l border-primary/20" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeNotification;
