export default function Education() {
  const projects = [
    "Learning how to think like a developer, build software, and solve real-world problems using technology.",
  ];

  const certifications = [
    "Computer Networks",
    "OS",
    "Data Structures",
    "Algorithms",
    "DBMS",
    "OOPs",
  ];

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-8">
      
      <h2 className="text-2xl font-black mb-12 text-white font-mono">
        <span className="text-white">Education</span>
      </h2>
      

      <div className="flex gap-8">
        

        <div className="flex-1">
          
          <div className="mb-8">
            <h3 className="text-sm font-black text-white font-mono">
              B.E in Computer Science and Engineering
            </h3>

            <div className="flex justify-between items-center mt-2">
              
              <p className="text-[#FF7A1A] font-black text-[10px] uppercase tracking-[0.2em]">
                Prince Dr. K. Vasudevan College of Engg. and Tech, Chennai
              </p>

              <p className="text-gray-500 font-mono italic text-[11px]">
                2023 – 2027
              </p>

            </div>
          </div>

          <ul className="space-y-4 mb-10 max-w-2xl">
            {projects.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 text-gray-400 text-sm leading-relaxed font-mono tracking-tight"
              >
                <span className="text-[#FF7A1A] shrink-0 font-bold">
                  ★
                </span>

                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-6">
            {certifications.map((skill, i) => (
              <span
                key={i}
                className="bg-[#FF7A1A] text-black border-2 border-black px-2 py-0.5 text-[9px] font-black shadow-[3px_3px_0px_0px_white] uppercase cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
            <br />
            <br />
               <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  ---------------------------------------------------------------------------------------------------------------------------------------
</p>
    </section>
  );
}