import { ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8 4.9 4.9 0 0 0 .15-3.7s-1.2-.38-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a4.9 4.9 0 0 0 .15 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.66 3.32 6.8 6.5 7.15a4.8 4.8 0 0 0-1 3.05v4" />
  </svg>
);

const projectsData = [
  {
    title: "Advanced Bearing Capacity Analyzer",
    problem: "Geotechnical engineers rely on manual computation or expensive proprietary software for foundation design calculations.",
    built: "Browser-based tool implementing Terzaghi's Bearing Capacity Theory. Architected task decomposition, validated all mathematical logic, built live HTML5 Canvas foundation diagram.",
    stack: ["HTML5", "Vanilla CSS3", "Vanilla JavaScript", "HTML5 Canvas"],
    demoLink: "https://eyram233.github.io/bearing-capacity-analyzer/",
    repoLink: "https://github.com/Eyram233/bearing-capacity-analyzer"
  },
  {
    title: "Soil Compaction Analyzer",
    problem: "Processing raw Proctor test data into compaction curves is tedious and error-prone for field engineers.",
    built: "Decision-support tool using agentic iteration workflow with rigorous human-in-the-loop review. Calculates MDD and renders interactive compaction curves.",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "Chart.js"],
    demoLink: "https://eyram233.github.io/soil-compaction-analyzer/",
    repoLink: "https://github.com/Eyram233/soil-compaction-analyzer"
  },
  {
    title: "Water Chlorination & Dosage Dashboard",
    problem: "Water treatment operators lack accessible real-time tools for chlorine dosage calculation across varying flow conditions.",
    built: "Operational web dashboard integrating flow rate inputs with real-time dosage visualization. Managed full architecture and UI validation.",
    stack: ["HTML5", "Vanilla CSS3", "Vanilla JavaScript", "Chart.js", "Google Fonts"],
    demoLink: "https://eyram233.github.io/water-chlorination-dashboard/",
    repoLink: "https://github.com/Eyram233/water-chlorination-dashboard"
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors">
      <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-white mb-10 flex items-center gap-4 transition-colors">
        <span className="w-8 h-px bg-[#2563EB]"></span>
        Featured Projects
      </h2>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="group bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] rounded-xl p-8 hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
              <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#2563EB] transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-[#F8F9FA] dark:bg-[#0A0A0A] border border-[#E2E8F0] dark:border-[#1F1F1F] rounded-md text-gray-500 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-[#F8F9FA] dark:bg-[#0A0A0A] border border-[#E2E8F0] dark:border-[#1F1F1F] rounded-md text-gray-500 dark:text-gray-400 hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 transition-colors">
              <div>
                <span className="text-[#0A0A0A] dark:text-white font-medium transition-colors">Problem: </span>
                {project.problem}
              </div>
              <div>
                <span className="text-[#0A0A0A] dark:text-white font-medium transition-colors">What I Built: </span>
                {project.built}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
