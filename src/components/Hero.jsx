import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Github, Linkedin, Mail, Instagram, ArrowRight, Cpu, Terminal, Shield } from "lucide-react";
import { cn } from "../lib/utils";

const Hero = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/rakuszz0", label: "GH" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rahmat-ilahi/", label: "IN" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/mat__ila/", label: "IG" },
  ];

  const techStack = [
    { icon: <Cpu className="w-4 h-4" />, label: "CORE", value: "FULLSTACK" },
    { icon: <Terminal className="w-4 h-4" />, label: "ENV", value: "DEVELOPMENT" },
    { icon: <Shield className="w-4 h-4" />, label: "SEC", value: "ENCRYPTED" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-12 px-6 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 cyber-grid -z-10 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      {/* Decorative HUD Elements */}
      <div className="absolute top-20 left-10 hidden xl:block animate-pulse">
        <div className="w-40 h-1 bg-primary/20" />
        <div className="text-[10px] text-primary/40 font-black mt-1">SYS_STATUS: OPTIMAL</div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Header Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6"
          >
            {techStack.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="p-2 border border-primary/20 rounded-lg mb-2">
                  {item.icon}
                </div>
                <div className="text-[8px] font-black text-primary/40 uppercase tracking-widest">{item.label}</div>
                <div className="text-[10px] font-bold text-white uppercase">{item.value}</div>
              </div>
            ))}
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-primary/40 tracking-[0.5em] uppercase">Identification Required</div>
            <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-none tracking-tighter">
              <span className="text-white relative inline-block glitch-hover">
                RAHMAT
                <span className="absolute -inset-1 bg-primary/5 -z-10 blur-xl opacity-50" />
              </span>
              <br />
              <span className="text-primary neon-text italic">ILAHI</span>
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-[1px] w-20 bg-primary/20" />
              <span className="text-sm md:text-xl font-bold text-white/40 tracking-[0.3em] uppercase">Neural Architect / Engineer</span>
              <div className="h-[1px] w-20 bg-primary/20" />
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <a href="/CV&Portfolio-Rahmat_Ilahi.pdf" download className="button-primary">
              <span className="relative z-10 flex items-center gap-2">
                Init_Resume <Download className="w-4 h-4" />
              </span>
            </a>
            <a href="#portfolio" className="button-outline">
              Access_Archive <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Sidebar - Transformed to Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 pt-12"
          >
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 border border-white/5 rounded-full group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all duration-500">
                  {social.icon}
                </div>
                <span className="text-[8px] font-black text-white/20 group-hover:text-primary transition-colors">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-4">
        <div className="text-[8px] font-black text-primary/40 rotate-90 translate-y-10">SCROLL_TO_ACCESS</div>
        <motion.div 
          animate={{ height: [40, 80, 40] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-primary/40"
        />
      </div>
    </section>
  );
};

export default Hero;
