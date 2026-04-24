import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Globe, Cpu, Hexagon, Zap, Anchor, Layers } from "lucide-react";

const About = () => {
  const expertises = [
    {
      title: "Backend_Specialist",
      description: "Architecting high-performance systems using Go, Node.JS, and Express. Expert in gRPC, MongoDB, and distributed database design.",
      icon: <Database className="w-6 h-6 text-primary" />,
      code: "BE_CORE_01"
    },
    {
      title: "DevOps_&_Orchestration",
      description: "Scaling applications with Docker & Kubernetes. Proficient in AWS ecosystems (EC2, ECS, EKS) and automated CI/CD pipelines.",
      icon: <Layers className="w-6 h-6 text-primary" />,
      code: "OPS_02"
    },
    {
      title: "Frontend_Architect",
      description: "Crafting lightweight interfaces using Next.JS, React.js, and Vite. Experienced in Flutter for cross-platform mobile systems.",
      icon: <Layout className="w-6 h-6 text-primary" />,
      code: "FE_03"
    },
    {
      title: "Analytical_Intelligence",
      description: "Leveraging a background in Geophysics for advanced spatial analysis, seismic interpretation, and complex problem solving.",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      code: "DATA_04"
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-secondary/30">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* About Text Area */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-black text-xs tracking-[0.3em] uppercase">
                <Hexagon className="w-4 h-4" />
                Origin_Story
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                FROM_EARTH <br />
                TO_THE <span className="text-primary italic">CLOUD.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-white/60 text-lg leading-relaxed font-medium">
              <p className="border-l-2 border-primary/30 pl-6">
                I am a <span className="text-white font-bold">Backend-Heavy Fullstack Engineer</span> with a unique analytical edge. While most started with code, I started with the Earth's crust as a <span className="text-primary italic">Geophysical Engineer</span>.
              </p>

              <p>
                My core strength lies in the <span className="text-white">Backend Ecosystem</span>. I don't just write code; I architect high-performance, scalable systems using <span className="text-primary">Go</span>,<span className="text-primary">Node.JS</span> and <span className="text-primary">Express.JS</span>. Whether it's building modular APIs with <span className="text-white font-bold">gRPC</span> or orchestrating complex clusters with <span className="text-white font-bold">Kubernetes and Docker</span>, I thrive in the logic-heavy depths of the server side.
              </p>

              <div className="p-8 tech-card relative group bg-primary/5 border-primary/20">
                <div className="scan-line" />
                <h3 className="text-primary font-black text-sm mb-4 tracking-widest uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Why the Pivot?
                </h3>
                <p className="text-white/80 text-base italic leading-relaxed">
                  "In Geophysics, I was searching for resources. In Fullstack Development, I found my obsession. It's the only field that gives me that 'Game Mode' feeling—where time, sleep, and even a wife's playful teasing in sexy clothes are easily ignored because the logic is just that addictive. 😆 I traded seismic waves for digital ones, and I've never looked back."
                </p>
              </div>

              <p>
                Beyond the terminal, I bring professional expertise in <span className="text-white">Graphic Design</span>, <span className="text-white">Seismic Interpretation</span>, and <span className="text-white">Spatial Analysis</span>—a blend of visual artistry and mathematical precision that makes me a formidable problem solver.
              </p>
            </div>
          </div>

          {/* Expertises & Stats Area */}
          <div className="lg:col-span-6 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertises.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-card p-8 group relative flex flex-col h-full"
                >
                  <div className="scan-line opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 border border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all duration-500 bg-dark">
                      {skill.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] font-black text-primary/30 uppercase tracking-widest">Protocol</div>
                      <div className="text-[10px] font-black text-primary/60">{skill.code}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{skill.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">
                    {skill.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="mt-auto pt-6 flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="h-[1px] flex-1 bg-primary/30" />
                    <div className="w-1 h-1 bg-primary rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Background Story Highlight */}
            <div className="p-8 border border-white/5 glass rounded-[40px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Anchor className="w-20 h-20 text-white" />
              </div>
              <h4 className="text-white font-black text-xs tracking-[0.4em] uppercase mb-4">Core_Competencies</h4>
              <div className="flex flex-wrap gap-3">
                {["Go", "gRPC", "Kubernetes", "Docker", "Express.JS", "React.js", "Next.JS", "Node.JS", "MongoDB", "Redis", "PostgreSQL", "MySQL", "Python", "PHP", "AWS", "Flutter", "Vite", "Spatial Analysis", "Graphic Design"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold border border-white/10 text-white/60 hover:border-primary/50 hover:text-primary transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
