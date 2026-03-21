import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Research Assistant",
    subtitle: "AI-Powered Browser Extension",
    description: "A browser extension that extracts and summarizes web content. Architected a full-stack solution using Spring Boot REST APIs for high-performance content ingestion. Integrated note taking feature.",
    tags: ["Spring Boot", "REST API", "JavaScript", "AI"],
    github: "https://github.com/madhanishere/Research-Assistant",
  },
  {
    title: "BulkMailer",
    subtitle: "Automated bulk email delivery system.",
    description: "Developed a Python-based CLI tool to automate bulk email delivery. Integrated Gmail SMTP and CSV processing to handle secure, personalized outreach for professional financial environments. Automated bulk email delivery system. Implemented for Galada Finance Pvt.Ltd.",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/madhanishere/Bulk-Mail-Sender",
  },
  {
    title: "Weather App",
    subtitle: "Real-time weather tracking via PyScript",
    description: "A browser-based weather dashboard utilizing PyScript to run Python logic directly in the frontend. Integrates OpenWeatherMap API for live updates without a backend.",
    tags: ["Python", "PyScript", "API", "Web Development "],
    github: "https://github.com/madhanishere/Weather-App",
  }
];

export default function ProjectList() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20 font-mono">
      <h2 className="text-xl font-black mb-12 text-white ">
        <span className="text-[#ffffff]"> Projects</span>
      </h2>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <div 
            key={i} 
            /* Removed shadow-[8px_8px_0px_0px_#FFDE03] and transition classes */
            className="relative border-2 border-white/10 bg-[#111] p-8"
          >
            {/* Header: Title and Link */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-0.5xl font-black text-[#ffffff]">
                  {project.title} <span className="text-gray-500 font-normal mx-2">—</span> 
                  <span className="text-sm text-gray-400 font-medium">{project.subtitle}</span>
                </h3>
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                className="text-gray-400 hover:text-white flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
              >
                view repo <ExternalLink size={14} />
              </a>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-3xl">
              • {project.description}
            </p>

            {/* Tags - The only parts with shadows now */}
            <div className="flex flex-wrap gap-2"> {/* Reduced gap from 3 to 2 */}
  {project.tags.map((tag) => (
    <span 
      key={tag} 
      
      className="px-2 py-0.5 bg-[#FFDE03] border-[1.5px] border-black text-black text-[9px] font-black uppercase  shadow-[2.5px_2.5px_0px_0px_white] cursor-default whitespace-nowrap"
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