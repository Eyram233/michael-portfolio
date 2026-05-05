import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium mb-6">
            Software Engineer & Agentic AI Architect
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            I build data-driven web applications and AI-powered tools that solve real engineering problems.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Computer Science & Engineering Student at UMaT
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, '#projects')}
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#2563EB] text-white font-medium hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#111111] border border-[#1F1F1F] text-white font-medium hover:bg-[#1A1A1A] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-transparent border border-[#2563EB]/30 text-[#2563EB] font-medium hover:bg-[#2563EB]/10 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
