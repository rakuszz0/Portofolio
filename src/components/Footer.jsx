import React from "react";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/rakuszz0" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rahmat-ilahi/" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/mat__ila/" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-black text-primary">
            RAHMAT<span className="text-white">.</span>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Rahmat Ilahi. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-all duration-300 text-white/40 hover:text-primary border border-white/5 hover:border-primary/20"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="p-4 rounded-full glass hover:bg-white/10 transition-colors group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
