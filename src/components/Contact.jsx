import { Mail, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8 4.9 4.9 0 0 0 .15-3.7s-1.2-.38-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a4.9 4.9 0 0 0 .15 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.66 3.32 6.8 6.5 7.15a4.8 4.8 0 0 0-1 3.05v4" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Currently open to National Service placement and junior software development roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:michaelalomatujr@gmail.com" 
          className="inline-block px-8 py-4 mb-12 rounded-md bg-[#2563EB] text-white font-medium hover:bg-[#1d4ed8] transition-colors"
        >
          Say Hello
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto text-left">
          <div className="flex items-center gap-4 bg-[#111111] border border-[#1F1F1F] p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Email</div>
              <a href="mailto:michaelalomatujr@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                michaelalomatujr@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#111111] border border-[#1F1F1F] p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Location</div>
              <div className="text-gray-300">
                Takoradi / Accra, Ghana
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a 
            href="https://linkedin.com/in/mealomatu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#2563EB] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Eyram233" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
