import SectionWrapper from './SectionWrapper';
import ProfilePic from '../assets/profile.png';

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
              <img src={ProfilePic} alt="Michael Eyram Alomatu Jr." className="w-full h-full object-cover" />
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
              Hi, I'm Michael. You can call me BIG MIKE!
            </p>
            <p>
              I'm a Full Stack Software Engineer who builds data-driven web applications from scratch, starting with a clear problem and finishing with something people can actually use. My foundation is in the core web stack: HTML5, CSS3, and Vanilla JavaScript, with hands-on experience in React, Python, Django, and SQL across both frontend and backend work. Part of how I work is using AI tooling, specifically Google Antigravity, to move faster and build better. I use it the same way a carpenter uses a power tool: it doesn't replace the skill or the judgment, it just means I can deliver more, in less time, without cutting corners on quality. Every architectural decision, every line of logic, every final output, that's still entirely mine.
            </p>
            <p>
              I've built functional web tools that solve real problems across technical and operational domains, and contributed to enterprise systems during internships at GRIDCo and the Ghana Ports and Harbours Authority. I like working on software that solves real, specific problems and I bring the technical range and the workflow discipline to see it through from idea to deployment.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
