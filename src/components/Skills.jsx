export default function Skills() {
  const skillCategories = [
    {
      title: "languages",
      skills: ["Java", "Python", "JavaScript", "C", "PHP"]
    },
    {
      title: "backend & cloud",
      skills: ["Spring Boot", "Laravel", "REST APIs", "AWS", "Spring","MySQL"]
    },
    {
      title: "frontend & tools",
      skills: ["React", "Tailwind CSS", "Git","GitHub", "Postman"]
    },
    {
      title: "core competencies",
      skills: ["Computer Networks", "DSA", "OOPs","Microservices"]
    }
  ];

  return (

    <section id="skills" className="max-w-3xl mx-auto px-6 py-4 mb-8 font-mono">
      
      {}
      <h2 className="text-2xl font-bold  text-white  mb-8">
        Technical <span className="text-[#FFDE03]">Skills</span>
      </h2>

      {}
      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="flex flex-col gap-3 group">
            {}
            <h3 className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold group-hover:text-[#FFDE03] transition-colors">
              {category.title}
            </h3>

            {}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1.5 bg-[#111111] border border-white/10 text-[11px] text-gray-400 hover:border-[#FFDE03]/50 hover:text-white transition-all cursor-default rounded-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}