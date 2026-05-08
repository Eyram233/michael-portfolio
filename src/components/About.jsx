import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative">
            {/* Accent Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#2563EB] transform scale-[1.05] opacity-50"></div>
            {/* Image Placeholder */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#FFFFFF] dark:bg-[#111111] border-4 border-[#E2E8F0] dark:border-[#1F1F1F] flex items-center justify-center overflow-hidden relative z-10 transition-colors">
              <img src="/src/assets/profile.png" alt="Michael Eyram Alomatu Jr." className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-white mb-6 flex items-center gap-4 transition-colors">
            <span className="w-8 h-px bg-[#2563EB]"></span>
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
            <p>
              I specialize in bridging traditional software engineering with modern agentic AI workflows — designing autonomous systems that compress development timelines and turn complex technical requirements into clean, functional products.
            </p>
            <p>
              My hands-on experience spans internships at Ghana Grid Company and the Ghana Ports and Harbours Authority, where I translated real-world engineering challenges into working software. I have a particular interest in applying software to engineering and infrastructure challenges.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
