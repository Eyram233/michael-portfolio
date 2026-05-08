const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#111111] border-t border-[#E2E8F0] dark:border-[#1F1F1F] py-8 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 dark:text-gray-400 font-medium transition-colors">
          &copy; {new Date().getFullYear()} Michael Eyram Alomatu Jr.
        </div>
        <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center transition-colors">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
