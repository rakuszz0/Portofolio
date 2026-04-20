import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[60px] p-8 md:p-16 overflow-hidden relative">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-black leading-none">
                  Let's work <br />
                  <span className="text-primary italic">together.</span>
                </h2>
                <p className="text-white/60 text-lg max-w-sm">
                  Have a project in mind? Reach out and let's create something extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:ilahir66@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold text-white">ilahir66@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/6281369982308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-lg font-bold text-white">+62 813 6998 2308</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold text-white">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 rounded-[32px] bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors resize-none"
              />
              <button className="button-primary w-full justify-center group py-4">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
