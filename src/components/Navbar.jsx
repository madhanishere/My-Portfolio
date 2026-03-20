export default function Navbar() {
  const navItems = [
    { name: "home", href: "#home" },
    { name: "experience", href: "#experience" },
            { name: "skills", href: "#skills" },

    { name: "projects", href: "#projects" }

  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/50 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between font-mono">
        
        {}
        <a 
          href="#home" 
          className="text-white font-black tracking-tighter text-lg hover:text-[#FFDE03] transition-colors"
        >
          M<span className="text-[#FFDE03]">R</span>
        </a>

        {}
        <div className="flex items-center gap-4 text-[12px] tracking-tight">
          {navItems.map((item, index) => (
            <div key={item.name} className="flex items-center gap-4">
              <a
                href={item.href}
                className="text-gray-400 hover:text-[#FFDE03] transition-colors"
              >
                {item.name}
              </a>
              
              {}
              {index !== navItems.length - 1 && (
                <span className="text-gray-800 font-light select-none">/</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}