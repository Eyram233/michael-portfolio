import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    company: "GRIDCo",
    role: "Technical Intern",
    department: "IT Department · Business Applications Unit",
    location: "Tema, Ghana",
    period: "Nov 2024 – Dec 2024",
    contributions: [
      "Asset Management System development (OOP)",
      "Business application workflow support",
      "Team-based development in high-availability environment",
      "Cybersecurity awareness in critical infrastructure"
    ]
  },
  {
    company: "Ghana Ports and Harbours Authority",
    role: "Technical Intern",
    department: "IT Department",
    location: "Port of Takoradi",
    period: "Oct 2023 – Dec 2023",
    contributions: [
      "Scrum-based team collaboration",
      "Python + Odoo web application for inter-departmental communication",
      "Operational requirements translation",
      "Agile methodology in infrastructure environment"
    ]
  }
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors">
      <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-white mb-12 flex items-center gap-4 transition-colors">
        <span className="w-8 h-px bg-[#2563EB]"></span>
        Professional Experience
      </h2>

      <div className="relative border-l border-[#E2E8F0] dark:border-[#1F1F1F] ml-4 md:ml-6 space-y-12 pb-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-3.5 top-1.5 w-7 h-7 bg-[#FFFFFF] dark:bg-[#111111] border-2 border-[#2563EB] rounded-full flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-[#2563EB]" />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white transition-colors">
                {exp.role} <span className="text-[#2563EB]">@ {exp.company}</span>
              </h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] px-3 py-1 rounded-full whitespace-nowrap w-max">
                {exp.period}
              </span>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              {exp.department} · {exp.location}
            </div>

            <ul className="space-y-2">
              {exp.contributions.map((contribution, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-[#2563EB] mr-2 mt-1.5 leading-none">▹</span>
                  <span className="leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
