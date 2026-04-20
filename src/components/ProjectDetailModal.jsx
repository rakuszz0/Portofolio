import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Cpu, Code2, Globe } from "lucide-react";

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="w-full max-w-5xl max-h-[90vh] glass border-primary/30 rounded-[40px] overflow-hidden flex flex-col relative z-10 shadow-[0_0_100px_rgba(0,242,255,0.15)]"
          >
            {/* Header Control */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center rounded-lg">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">Protocol_Detail</p>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">{project.title}</h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-500 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Content Scrollable Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Visuals */}
                <div className="space-y-8">
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group"
                    >
                      <Github className="w-5 h-5 group-hover:text-primary" />
                      <span className="text-sm font-bold">Source_Code</span>
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-2xl hover:bg-primary hover:text-dark transition-all group"
                    >
                      <Globe className="w-5 h-5" />
                      <span className="text-sm font-bold">Live_Preview</span>
                    </a>
                  </div>
                </div>

                {/* Right: Data */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                      <Code2 className="w-4 h-4" /> Overview
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed font-medium">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">Tech_Stack_Modules</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold text-white/60 rounded-xl">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 tech-card bg-primary/5 border-primary/20">
                    <div className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-4">Core_Features</div>
                    <ul className="space-y-3">
                      {(project.features || ["Scalable Architecture", "Optimized Logic", "High-Performance Engine"]).map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,242,255,1)]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Status */}
            <div className="p-4 bg-primary/5 border-t border-white/5 flex justify-between items-center px-8">
              <div className="text-[8px] font-black text-primary/40 uppercase tracking-[0.4em]">Auth_Session: ROOT // Data_Integrity: 100%</div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary/20" />
                <div className="w-2 h-2 rounded-full bg-primary/20" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
