import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers, Eye } from "lucide-react";
import { cn } from "../lib/utils";
import ProjectDetailModal from "./ProjectDetailModal";
import EM from "../assets/e-m.png";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Neural_Nexus_Platform",
      category: "FULLSTACK_SYSTEM",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      description: "A sustainable Portfolio platform built with Next.js and Tailwind CSS.",
      longDescription: "Neural Nexus is a complex ecosystem architecture designed for high-performance data processing and visualization. It leverages a modern stack to ensure maximum scalability and real-time synchronization across distributed nodes.",
      features: ["Real-time Data Streaming", "Neural Network Integration", "Distributed Ledger Storage", "Modular UI Components"],
      tags: ["React.js", "Vite.js", "Tailwind CSS"],
      link: "#",
      github: "#",
      dataCode: "PRJ_01_X"
    },
    {
      title: "Fintech_Control_Center",
      category: "DATA_VISUALIZATION",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "A modern financial dashboard with real-time analytics and tracking.",
      longDescription: "The Fintech Control Center provides a comprehensive overview of financial markets with sub-second latency. It focuses on clean data visualization and robust security protocols for sensitive transactional data.",
      features: ["Sub-second Latency Updates", "End-to-End Encryption", "Advanced Charting Engine", "Automated Risk Analysis"],
      tags: ["TypeScript", "D3.js", "Firebase", "Go"],
      link: "#",
      github: "#",
      dataCode: "PRJ_02_Y"
    },
    {
      title: "BioMetric_Fitness_OS",
      category: "MOBILE_INTERFACE",
      image: EM,
      description: "E-Wallet Application.",
      longDescription: "BioMetric OS is a next-generation fitness platform that tracks biological markers to provide personalized nutrition and training advice. Built with React Native for seamless cross-platform performance.",
      features: ["E-Wallet Integration", "Real-time Transaction Tracking"],
      tags: ["Dart", "Flutter"],
      link: "#",
      github: "https://github.com/rakuszz0/e-money-clone",
      dataCode: "PRJ_03_Z"
    },
    {
      title: "Quantum_Real_Estate",
      category: "FULLSTACK_SYSTEM",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      description: "A property listing and management system with advanced search.",
      longDescription: "Quantum Real Estate redefines the property search experience with its powerful filtering engine and virtual tour capabilities. It handles massive datasets with ease while maintaining a lightweight frontend.",
      features: ["Advanced Search Engine", "3D Virtual Tours", "Automated Lead Generation", "Secure Document Management"],
      tags: ["Next.js", "Prisma", "AWS", "gRPC"],
      link: "#",
      github: "#",
      dataCode: "PRJ_04_Q"
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6 relative bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-black text-xs tracking-[0.3em] uppercase">
              <Layers className="w-4 h-4" />
              Project_Archive
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none">
              SELECTED <br />
              <span className="text-primary italic">PROTOCOLS.</span>
            </h2>
          </div>
          <button className="button-outline whitespace-nowrap group">
            Decrypt_All_Data
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "tech-card group relative cursor-pointer",
                i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/8]" : "aspect-[4/5]"
              )}
            >
              <div className="scan-line opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0"
              />
              
              {/* Hover View Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                <div className="px-6 py-3 glass border-primary/30 rounded-2xl flex items-center gap-3 scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="text-sm font-black text-white uppercase tracking-widest">Access_Detail</span>
                </div>
              </div>

              {/* Card Header Info */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <div className="text-[10px] font-black text-primary/40 tracking-widest">{project.dataCode}</div>
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[8px] font-black text-white/40 border border-white/10 px-2 py-1 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="absolute bottom-6 left-6 right-6 space-y-4 z-10">
                <div className="space-y-1">
                  <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic">{project.category}</p>
                  <h3 className={cn(
                    "font-black text-white uppercase tracking-tight group-hover:neon-text transition-all duration-500",
                    i === 0 ? "text-4xl md:text-6xl" : "text-2xl"
                  )}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                    <a href={project.github} className="text-white/20 hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-white/20 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Authorized_Access_Only</div>
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 border-b border-l border-primary/20 transition-all group-hover:border-primary group-hover:bg-primary/10" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Projects;
