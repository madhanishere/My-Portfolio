export default function Navbar() {
  const navItems = [
    { name: "home", href: "#home" },
    { name: "experience", href: "#experience" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1F2940]/70 backdrop-blur-xl border-b border-white/5 font-mono">
      
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center select-none">
          <span className="text-sm font-black tracking-tight text-white">
            MR
            <span className="text-[#FF7A1A]">.</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4 text-[12px] tracking-tight">
          
          {navItems.map((item, index) => (
            <div key={item.name} className="flex items-center gap-4">
              
              <a
                href={item.href}
                className="text-gray-400 hover:text-[#FF7A1A] transition-colors duration-200"
              >
                {item.name}
              </a>

              {index !== navItems.length - 1 && (
                <span className="text-gray-700 select-none">
                  /
                </span>
              )}

            </div>
          ))}

        </div>

      </div>
    </nav>
  );
}