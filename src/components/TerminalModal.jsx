import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon, Github, Linkedin, Instagram, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "RAHMAT_OS v1.0.4 initialized..." },
    { type: "system", content: "Type 'help' to see available commands." },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const scrollToSection = (id) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === "") return;

    let newHistory = [...history, { type: "user", content: cmd }];

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd === "exit") {
      onClose();
      setInput("");
      return;
    }

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "Available commands: whoami, skills, projects, contact, clear, exit" });
        break;
      
      case "whoami":
        newHistory.push({ 
          type: "system", 
          content: (
            <div className="space-y-2">
              <p>Rahmat Ilahi - Backend-Heavy Fullstack Architect. Ex-Geophysical Engineer.</p>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-primary hover:underline flex items-center gap-1 text-xs"
              >
                [Access_Full_Profile] <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )
        });
        break;

      case "skills":
        newHistory.push({ 
          type: "system", 
          content: (
            <div className="space-y-3 mt-2">
              <div>
                <p className="text-primary font-black text-[10px] tracking-widest uppercase">[Backend_Core]</p>
                <p className="text-white/80">Go, Node.JS, Express.JS, gRPC, REST, MongoDB, Redis, PostgreSQL, MySQL, Python, PHP</p>
              </div>
              <div>
                <p className="text-primary font-black text-[10px] tracking-widest uppercase">[Frontend_Interface]</p>
                <p className="text-white/80">React.js, Next.JS, Vite, Flutter, CSS, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-primary font-black text-[10px] tracking-widest uppercase">[DevOps_Cloud]</p>
                <p className="text-white/80">Docker, Kubernetes, AWS (EC2, ECS, EKS)</p>
              </div>
              <div>
                <p className="text-primary font-black text-[10px] tracking-widest uppercase">[Specialized_Analysis]</p>
                <p className="text-white/80">Seismic Interpretation, Spatial Analysis, Graphic Design</p>
              </div>
            </div>
          )
        });
        break;

      case "projects":
        newHistory.push({ 
          type: "system", 
          content: (
            <div className="space-y-2">
              <p>Active Protocols: Neural_Nexus, Fintech_Control, BioMetric_OS, Quantum_Real_Estate.</p>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-primary hover:underline flex items-center gap-1 text-xs"
              >
                [Decrypt_Project_Archive] <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )
        });
        break;

      case "contact":
        newHistory.push({ 
          type: "system", 
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <a href="mailto:ilahir66@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> ilahir66@gmail.com
              </a>
              <a href="https://wa.me/6281369982308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" /> +62 813 6998 2308
              </a>
              <a href="https://github.com/rakuszz0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> rakuszz0
              </a>
              <a href="https://www.linkedin.com/in/rahmat-ilahi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" /> rahmat-ilahi
              </a>
              <a href="https://www.instagram.com/mat__ila/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" /> mat__ila
              </a>
            </div>
          )
        });
        break;

      default:
        newHistory.push({ type: "error", content: `Command not found: ${cmd}. Type 'help' for assistance.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-3xl h-[500px] glass border-primary/30 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,242,255,0.1)] relative z-10"
          >
            {/* Terminal Header */}
            <div className="bg-primary/10 px-4 py-2 flex items-center justify-between border-b border-primary/20">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">rahmat_ilahi_terminal -- 80x24</span>
              </div>
              <button onClick={onClose} className="hover:bg-primary/20 p-1 rounded transition-colors text-primary">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-2 custom-scrollbar"
            >
              {history.map((line, i) => (
                <div key={i} className="flex gap-2">
                  {line.type === "user" && <span className="text-primary font-bold">$</span>}
                  <div className={cn(
                    line.type === "system" ? "text-emerald-400" : 
                    line.type === "error" ? "text-rose-500" : "text-white",
                    "flex-1"
                  )}>
                    {line.content}
                  </div>
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex gap-2 pt-2">
                <span className="text-primary font-bold">$</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/10"
                  placeholder="type here..."
                />
              </form>
            </div>
            
            <div className="bg-primary/5 px-4 py-1 text-[8px] text-primary/40 font-black uppercase tracking-[0.2em]">
              Authorized_Session_Active // UID: 0x9921
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TerminalModal;
