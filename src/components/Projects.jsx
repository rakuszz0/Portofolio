import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers, Eye } from "lucide-react";
import { cn } from "../lib/utils";
import ProjectDetailModal from "./ProjectDetailModal";
import EM from "../assets/e-m.png";
import HS from "../assets/Housy.png";
import R from "../assets/RaI.jpeg";
import LT from "../assets/LandTick.jpeg";
import Campaign from "../assets/Za.jpeg";
import Mm from "../assets/MM.jpeg";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Porto_Platform",
      category: "FULLSTACK_SYSTEM",
      image: R,
      description: "A sustainable Portfolio platform built with Next.js and Tailwind CSS.",
      longDescription: "Neural Nexus is a complex ecosystem architecture designed for high-performance data processing and visualization. It leverages a modern stack to ensure maximum scalability and real-time synchronization across distributed nodes.",
      features: ["Contact Form", "Responsive Design", "About Me", "Modular UI Components"],
      tags: ["React.js", "Vite.js", "Tailwind CSS"],
      link: "https://rahmat-pearl.vercel.app/",
      github: "https://github.com/rakuszz0/Portofolio",
      dataCode: "PRJ_01_X"
    },
    {
      title: "E-Money_BioMetric_OS",
      category: "MOBILE_INTERFACE",
      image: EM,
      description: "E-Wallet Application.",
      longDescription: "E-Money BioMetric OS is a cutting-edge mobile application that combines biometric authentication with a secure e-wallet system. It provides a seamless and secure payment experience with real-time transaction tracking.",
      features: ["E-Wallet Integration", "Real-time Transaction Tracking"],
      tags: ["Dart", "Flutter"],
      link: "#",
      github: "https://github.com/rakuszz0/e-money-clone",
      dataCode: "PRJ_03_Y"
    },
    {
      title: "Quantum_Real_Estate",
      category: "FULLSTACK_SYSTEM",
      image: HS,
      description: "A property listing and management system with advanced search.",
      longDescription: "Quantum Real Estate redefines the property search experience with its powerful filtering engine and virtual tour capabilities. It handles massive datasets with ease while maintaining a lightweight frontend.",
      features: ["Advanced Search Engine", "Room Listing Page", "Room Detail Page", "Tenant Data Management"],
      tags: ["React.js", "Figma", "GoLang", "gRPC", "postgreSQL"],
      link: "https://housy-e.vercel.app/",
      github: "https://github.com/rakuszz0/Housy-E",
      dataCode: "PRJ_04_Z"
    },
    {
      title: "Transportation_Intelligence_Hub",
      category: "FULLSTACK_SYSTEM",
      image: LT,
      description: "A comprehensive platform for managing and optimizing transportation networks.",
      longDescription: "Transportation Intelligence Hub is a comprehensive platform for managing and optimizing transportation networks. It features real-time traffic analysis, route optimization, and predictive maintenance scheduling for fleets.",
      features: ["Advanced Search Engine", "Ticket Booking System", "Real-time Traffic Analysis", "Predictive Maintenance Scheduling"],
      tags: ["React.js", "Figma", "Bootstrap", "GoLang", "GORM", "MYSQL"],
      link: "#",
      github: "https://github.com/rakuszz0/crash",
      dataCode: "PRJ_05_A"
    },
    {
      title: "Campaign_Management_Dashboard",
      category: "FULLSTACK_SYSTEM",
      image: Campaign,
      description: "A dashboard for managing and analyzing marketing campaigns with real-time data visualization.",
      longDescription: "Campaign Management Dashboard is a powerful tool for managing and analyzing marketing campaigns with real-time data visualization. It provides insights into campaign performance and helps in making data-driven decisions.",
      features: ["Campaign Creation and Management", "Real-time Performance Analytics", "Audience Segmentation", "Integration with Major Ad Platforms"],
      tags: ["React.js", "Bootstrap", "GoLang", "GORM", "MYSQL"],
      link: "https://amal-sas.vercel.app/",
      github: "https://github.com/rakuszz0/Campaigns",
      dataCode: "PRJ_06_B"
    },
    {
      title: "Mac-Monitor",
      category: "Backend_System",
      image: Mm,
      description: "A system for monitoring and managing macOS performance.",
      longDescription: "Mac-Monitor is a comprehensive system for monitoring and managing macOS performance. It provides real-time insights into system resources and helps in identifying potential issues before they become critical.",
      features: ["Real-time Performance Monitoring", "Resource Usage Tracking", "Alerting System", "Data Visualization"],
      tags: ["GoLang"],
      link: "#",
      github: "https://github.com/rakuszz0/mac-monitor",
      dataCode: "PRJ_07_C"
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
