import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#2563EB]/30 selection:text-white relative">
      {/* Consistent Animated Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(#1F1F1F_1px,transparent_1px)] [background-size:24px_24px] opacity-30"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 10%, transparent 100%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
