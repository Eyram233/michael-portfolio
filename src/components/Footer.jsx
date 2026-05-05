const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-[#1F1F1F] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} Michael Eyram Alomatu Jr.
        </div>
        <div className="text-gray-500 text-sm flex items-center">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
