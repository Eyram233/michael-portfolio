import SectionWrapper from './SectionWrapper';

const Philosophy = () => {
  return (
    <SectionWrapper id="philosophy" className="bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors">
      <div className="bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] dark:text-white mb-6 flex items-center gap-4 relative z-10 transition-colors">
          <span className="w-8 h-px bg-[#2563EB]"></span>
          How I Work With AI
        </h2>
        
        <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 transition-colors">
          "I use agentic AI tooling as a force multiplier, not a replacement for engineering judgment. In every project, I define the system architecture, decompose tasks, review and validate all generated code, enforce mathematical and logical accuracy, and make all critical design decisions. The AI accelerates implementation. <span className="text-[#2563EB]">The engineering thinking is mine.</span>"
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Philosophy;
