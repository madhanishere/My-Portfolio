export default function ExtraCurricular() {
  const activities = [
    {
      role: "Campus Ambassador",
      org: "E-Cell, IIT Bombay",
      details: "Promoted entrepreneurship and networked with student leaders."
    },
    {
      role: "National Service Scheme (NSS)",
      org: "Volunteer",
      details: "Engaged in community service and social impact initiatives."
    },
    {
      role: "Rajya Puraskar Awardee",
      org: "Bharat Scouts and Guides",
      details: "Received prestigious State-level recognition for leadership and discipline."
    }
  ];

  return (
    <section id="extra-curricular" className="max-w-3xl mx-auto px-6 py-4 mb-8 font-mono">
      <h2 className="text-xl font-bold  text-white  mb-8">
        Extra Curriculars
      </h2>

      <ul className="space-y-6">
        {activities.map((act, i) => (
          <li key={i} className="group list-none relative pl-6">
            {}
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#FFDE03] rounded-full group-hover:scale-150 transition-transform" />
            
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-white  ">
                  {act.role}
                </h3>
                <span className="text-[10px] text-gray-600 uppercase ">

                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {act.details}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}