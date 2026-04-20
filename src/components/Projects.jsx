import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers } from "lucide-react";
import { cn } from "../lib/utils";

const Projects = () => {
  const projects = [
    {
      title: "Neural_Nexus_Platform",
      category: "ECOSYSTEM_ARCH",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      description: "A sustainable living platform built with Next.js and Tailwind CSS.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#",
      dataCode: "PRJ_01_X"
    },
    {
      title: "Fintech_Control_Center",
      category: "DATA_VISUALIZATION",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "A modern financial dashboard with real-time analytics and tracking.",
      tags: ["TypeScript", "D3.js", "Firebase"],
      link: "#",
      github: "#",
      dataCode: "PRJ_02_Y"
    },
    {
      title: "BioMetric_Fitness_OS",
      category: "MOBILE_INTERFACE",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      description: "Cross-platform mobile application for fitness tracking and nutrition.",
      tags: ["React Native", "Expo", "Redux"],
      link: "#",
      github: "#",
      dataCode: "PRJ_03_Z"
    },
    {
      title: "Quantum_Real_Estate",
      category: "FULLSTACK_SYSTEM",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      description: "A property listing and management system with advanced search.",
      tags: ["Next.js", "Prisma", "AWS"],
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
          <a href="#" className="button-outline whitespace-nowrap group">
            Decrypt_All_Data
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "tech-card group relative",
                i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/8]" : "aspect-[4/5]"
              )}
            >
              <div className="scan-line opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0"
              />
              
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
                  <div className="flex gap-4">
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
    </section>
  );
};

export default Projects;
