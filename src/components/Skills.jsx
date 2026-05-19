export default function Skills() {
  const skillCategories = [
    {
      title: "languages & frameworks",
      skills: [
        "Python",
        "Java",
        "C",
        "SQL",
        "React",
        "Spring Boot",
        "FastAPI"
      ]
    },
    {
      title: "databases & cloud",
      skills: [
        "AWS",
        "SQLite",
        "MySQL",
        "MongoDB",
        "FAISS",
        "ChromaDB"
      ]
    },
    {
      title: "core competencies",
      skills: [
        "DSA",
        "AI-Assisted Development",
        "Agile Development",
        "API Development"
      ]
    },
    {
      title: "tools & platforms",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Ollama",
        "Claude Code",
        "GitHub Copilot"
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto px-6 py-4 mb-8"
    >
      <h2 className="text-2xl font-black font-mono text-white mb-8">
        <span className="text-white">Skills</span>
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="flex flex-col gap-3 group">
            
            <h3 className="text-[10px] uppercase tracking-wide font-bold text-gray-400 mb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-[#1F2432] border border-[#FF7A1A]/20 text-[11px] text-gray-300  hover:text-white hover:bg-[#ca6c29] transition-all cursor-default rounded-sm"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
      <br />
      <br />
                                               <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  ---------------------------------------------------------------------------------------------------------------------------------------
</p>
    </section>
  );
}