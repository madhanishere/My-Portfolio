import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Research Assistant",
    subtitle: "AI-Powered Browser Extension",
    description: "A browser extension that extracts and summarizes web content. Architected a full-stack solution using Spring Boot REST APIs for high-performance content ingestion. Integrated note taking feature.",
    tags: ["Spring Boot", "REST API", "JavaScript", "AI"],
    github: "https:
  },
  {
    title: "BulkMailer",
    subtitle: "Automated bulk email delivery system.",
    description: "Developed a Python-based CLI tool to automate bulk email delivery. Integrated Gmail SMTP and CSV processing to handle secure, personalized outreach for professional financial environments. Automated bulk email delivery system. Implemented for Galada Finance Pvt.Ltd.",
    tags: ["Python", "CLI", "Automation"],
    github: "https:
  },
  {
    title: "Weather App",
    subtitle: "Real-time weather tracking via PyScript",
    description: "A browser-based weather dashboard utilizing PyScript to run Python logic directly in the frontend. Integrates OpenWeatherMap API for live updates without a backend.",
    tags: ["Python", "PyScript", "API", "Web Development "],
    github: "https:
  }
];

export default function ProjectList() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20 ">
      <h2 className="text-xl font-black mb-12 text-white font-mono ">
        <span className="text-[#ffffff]"> Projects</span>
      </h2>

      <div className="space-y-6 ">
        {projects.map((project, i) => (
          <div 
            key={i} 
            
            className="relative border-2 border-white/10 bg-[#111] p-8 "
          >
            {}
            <div className="flex justify-between items-start mb-4 font-mono">
              <div>
                <h3 className="text-0.5xl font-black text-[#ffffff]">
                  {project.title} <span className="text-gray-500 font-normal mx-2">—</span> 
                  <span className="text-sm text-gray-400 font-medium">{project.subtitle}</span>
                </h3>
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                className="text-white flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
              >
                view repo <ExternalLink size={14} />
              </a>
            </div>

            {}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-3xl font-mono">
              • {project.description}
            </p>

            {}
            <div className="flex flex-wrap gap-2"> {}
  {project.tags.map((tag) => (
    <span 
                key={i} 
                className="bg-[#FFDE03] text-black border-2 border-black px-2 py-0.5 text-[9px] font-black shadow-[3px_3px_0px_0px_white] uppercase cursor-default"
              >
      {tag}
    </span>
  ))}
</div>
          </div>
        ))}
      </div>
    </section>
  );
}