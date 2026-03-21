export default function Education() {
  const projects = [
    "Learning how to think like a developer, build software, and solve real-world problems using technology.",
  ];

  const certifications = ["Computer Networks", "OS", "Data Structures", "Algorithms", "DBMS","OOPs"];

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-black mb-12 text-white font-mono">
         <span className="text-[#ffffff]">Education</span>
      </h2>

      <div className="flex gap-8">
        {/* Vertical Accent Bar - Reduced from w-[6px] to w-[1px] */}
        <div className="w-[1px] bg-[#FFDE03] shrink-0 h-auto opacity-80" />

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-0.5xl font-black  text-white  font-mono">
              B.E in Computer Science and Engineering
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#FFDE03] font-black text-[10px] uppercase tracking-[0.2em]">
                Prince Dr. K. Vasudevan College of Engg. and Tech, chennai
              </p>
              <p className="text-gray-500 font-mono italic text-[11px]">
                2023 – 2027 
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 mb-10 max-w-2xl">
            {projects.map((point, i) => (
              <li key={i} className="flex gap-4 text-gray-400 text-sm leading-relaxed font-mono tracking-tight">
                <span className="text-[#FFDE03] shrink-0 font-bold">★</span>
                {point}
              </li>
            ))}
          </ul>

          {/* Static Sticker Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {certifications.map((skill, i) => (
              <span 
                key={i} 
                className="bg-[#FFDE03] text-black border-2 border-black px-2 py-0.5 text-[9px] font-black shadow-[3px_3px_0px_0px_white] uppercase cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}