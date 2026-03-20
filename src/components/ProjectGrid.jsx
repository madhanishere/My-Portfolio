import { Github, X, Zap, Code2 } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Research Assistant",
    description: "A browser extension that extracts and summarizes web content.",
    details: "Architected a full-stack solution using Spring Boot REST APIs for high-performance content ingestion. Developed a browser extension that processes live web data and implements local persistence for structured note management.",
    tags: ["Spring Boot", "REST API", "JavaScript","Ai-powered"],
    github: "https://github.com/madhanishere/Research-Assistant",
  },
  {
    title: "BulkMailer",
    description: "Automated bulk email delivery system. Developed for Galada Finance Pvt.Ltd.",
    details: "Developed a Python-based CLI tool to automate bulk email delivery. Integrated Gmail SMTP and CSV processing to handle secure, personalized outreach.",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/madhanishere/Bulk-Mail-Sender",
  },{
    title: "Weather App",
    description: "Real-time weather tracking via PyScript. No backend required.",
    details: "A browser-based weather dashboard utilizing PyScript to run Python logic directly in the frontend. Integrates OpenWeatherMap API for live temperature and condition.",
    tags: ["Python", "PyScript", "API", "HTML/CSS"],
    github: "https://github.com/madhanishere/Weather-App", // Ensure this link is correct
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20 font-mono">
      <h2 className="text-2xl font-black  mb-12 text-white">
        My <span className="text-[#FFDE03]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedProject(project)}
            className="group border-2 border-white/10 rounded-2xl overflow-hidden bg-[#1E1E1E] transition-all hover:border-white/30 cursor-pointer active:scale-[0.98]"
          >
            {}
            <div className="bg-white p-8 aspect-video flex items-center justify-center relative overflow-hidden">
               {}
               <div className="w-[85%] h-[85%] bg-[#0A0A0A] border-[4px] border-[#333] rounded-t-lg relative shadow-2xl flex items-center justify-center">
                  
                  {}
                  <div className="z-10 bg-[#FFDE03] text-black font-black text-xs md:text-sm px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_black] uppercase tracking-tighter">
                     {project.title}
                  </div>
                  
                  {}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
               </div>

               {}
               <div className="absolute bottom-4 w-[92%] h-1.5 bg-[#222] rounded-b-md border-t border-white/10" />
            </div>

            {}
            <div className="p-6">
              <h3 className="text-xl font-black text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="bg-[#FFDE03] text-black px-4 py-2 rounded-lg font-black text-xs flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <Code2 size={14} /> Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
          
          <div className="relative bg-[#0A0A0A] border-2 border-white/20 w-full max-w-2xl rounded-2xl shadow-[12px_12px_0px_0px_#FFDE03] overflow-hidden">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white hover:text-[#FFDE03] z-10 p-2">
              <X size={24} />
            </button>

            <div className="p-8">
              
              <h3 className="text-3xl font-black text-white mb-6 uppercase">
                {selectedProject.title}
              </h3>

              <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                <p className="border-l-2 border-[#FFDE03] pl-4 bg-white/5 py-4 rounded-r shadow-inner">
                   {selectedProject.details}
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black text-center py-4 rounded-xl font-black text-xs hover:bg-[#FFDE03] transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] uppercase"
                >
                  <Github size={16} /> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}