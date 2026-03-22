export default function Experience() {
  const points = [
    "Developed backend logic for Chatbot using Laravel, enabling automated handling of employee-related queries",
    "Implemented fuzzy string matching + OpenAI GPT API integration to improve natural language understanding and response accuracy",
    "Assisted in developing a centralized social media dashboard facilitating multi-platform post scheduling."
  ];

  const skills = ["AI-INTEGRATION", "NLP", "LARAVEL", "POSTMAN", "APIS", "BACKEND"];

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-black mb-12 text-white font-mono  ">
        Experience
      </h2>

      <div className="flex gap-8">
        {}
        <div className="w-[1px] bg-[#FFDE03] shrink-0 h-auto opacity-80" />

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-0.5xl font-black text-white font-mono  ">
              Software Development Intern
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#FFDE03] font-black text-[10px] uppercase tracking-[0.2em]">
                Iproat Solutions, Chennai
              </p>
              <p className="text-gray-500 font-mono italic text-[11px]">
                June 2025 – July 2025
              </p>
            </div>
          </div>

          {}
          <ul className="space-y-4 mb-10 max-w-2xl">
            {points.map((point, i) => (
              <li key={i} className="flex gap-4 text-gray-400 text-sm leading-relaxed font-mono tracking-tight">
                <span className="text-[#FFDE03] shrink-0 font-bold">★</span>
                {point}
              </li>
            ))}
          </ul>

          {}
          <div className="flex flex-wrap gap-3 mt-6">
            {skills.map((skill, i) => (
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