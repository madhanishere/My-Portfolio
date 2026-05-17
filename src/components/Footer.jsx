export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto px-6 pt-10 pb-10 font-mono">
      
      <div className="flex flex-col items-center text-center gap-6 pt-12 ">
        {}        
          <p className="text-[11px] text-white/40 uppercase tracking-[0.2em]">
            © {currentYear} Madhan Raghuram 
          </p>
        </div>
    </footer>
  );
}