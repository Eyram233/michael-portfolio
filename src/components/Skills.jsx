import SectionWrapper from './SectionWrapper';

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "HTML/CSS", "SQL", "C#"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Django", "Streamlit", "Pandas"]
  },
  {
    category: "Tools & Platforms",
    items: ["Google Antigravity", "Firebase", "Git", "GitHub"]
  },
  {
    category: "Core Competencies",
    items: ["Agentic AI Orchestration", "Technical Architecture", "Web Development", "Rapid Prototyping"]
  }
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-[#0A0A0A]">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
        <span className="w-8 h-px bg-[#2563EB]"></span>
        Technical Arsenal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-6 hover:border-[#2563EB]/50 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-[#0A0A0A] border border-[#1F1F1F] text-gray-300 rounded-md text-sm font-medium hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
