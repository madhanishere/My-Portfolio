export default function ExtraCurricular() {
  const activities = [
    {
      role: "Campus Ambassador",
      org: "E-Cell IIT Bombay",
      details:
        "Promoted entrepreneurship on campus through events, outreach, and NEC initiatives organized by E-Cell IIT Bombay."
    },
    {
      role: "Problem Solver",
      org: "LeetCode",
      details:
        "Solved 150+ coding problems with a strong focus on Data Structures and Algorithms."
    },
    {
      role: "Scout",
      org: "The Bharat Scouts and Guides",
      details:
        "Received Rajya Puraskar, the highest state-level Scouting honor for leadership and discipline."
    }
  ];

  return (
    <section
      id="extra-curricular"
      className="max-w-3xl mx-auto px-6"
    >
      <div>
        
        <h2 className="text-2xl font-black font-mono text-[#E5E7EB] mb-14 tracking-tight">
          Personal Pursuits
        </h2>

        <ul className="space-y-8">
          {activities.map((act, i) => (
            <li key={i} className="space-y-1 text-xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                
                <h3 className="text-lg font-black text-[#E5E7EB] tracking-tight">
                  {act.role}
                </h3>

                <span className="text-[11px] uppercase tracking-[0.2em] text-[#FF7A1A] font-bold">
                  {act.org}
                </span>

              </div>

              <p className="text-[13px] text-gray-400 leading-8 max-w-3xl">
                {act.details}
              </p>

            </li>
          ))}
        </ul>

      </div>
              <br />
              <br />  
         <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  --------------------------------------------------------------------------------------------------------------------------------
</p>
    </section>
  );
}