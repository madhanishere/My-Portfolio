export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto px-6 pt-20 pb-12 font-mono">
      {}

      {}
      <div className="flex flex-col items-center text-center gap-6 pt-12 border-t border-white/5">
        {}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            Built with <span className="text-neo-yellow">React & Tailwind</span>
          </p>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
            © {currentYear} Madhan Raghuram 
          </p>
        </div>
      </div>
    </footer>
  );
}