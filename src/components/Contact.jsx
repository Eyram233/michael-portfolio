import { Mail, MapPin, X } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <SectionWrapper id="contact" className="bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-white mb-6 transition-colors">Get In Touch</h2>

        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto transition-colors">
          Have a project in mind, a problem to solve, or just want to connect? I'm always open to meaningful conversations and new opportunities. Let's build something great together.
        </p>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 mb-12 rounded-md bg-[#2563EB] text-white font-medium hover:bg-[#1d4ed8] transition-colors"
        >
          Say Hello
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto text-left">
          <div className="flex items-center gap-4 bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Email</div>
              <a href="mailto:michaelalomatujr@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[#0A0A0A] dark:hover:text-white transition-colors break-all">
  michaelalomatujr@gmail.com
</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Location</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">
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
            className="text-gray-500 dark:text-gray-400 hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Eyram233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#FFFFFF] dark:bg-[#111111] border border-[#E2E8F0] dark:border-[#1F1F1F] p-6 rounded-lg max-w-md w-full"
    >
      <button
        type="button"
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="w-5 h-5" />
      </button>
      <h3 className="text-xl font-bold mb-4 text-[#0A0A0A] dark:text-white">Contact Me</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSuccess(true);
        }}
        className="space-y-3"
      >
        <input
          type="text"
          placeholder="Your full name"
          className="w-full p-2 border rounded bg-[#F8F9FA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          required
        />
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full p-2 border rounded bg-[#F8F9FA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          required
        />
        <input
          type="text"
          placeholder="What's this about?"
          className="w-full p-2 border rounded bg-[#F8F9FA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          required
        />
        <textarea
          placeholder="Tell me more..."
          rows={4}
          className="w-full p-2 border rounded bg-[#F8F9FA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#2563EB] text-white font-medium rounded hover:bg-[#1d4ed8] transition-colors"
        >
          Send Message
        </button>
        {success && (
          <p className="mt-2 text-green-600 dark:text-green-400">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
      </form>
    </motion.div>
  </div>
)}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
