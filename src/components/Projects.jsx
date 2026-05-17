import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Med-Bot",
    subtitle: "Hospital Query System",
    description:
      "Built a RAG-based hospital query system using LangChain, FastAPI, Streamlit, and FAISS. Engineered an end-to-end pipeline for document ingestion, text chunking, embedding generation, and vector storage. Architected an admin panel for document management, content updates, and chat-log monitoring.",
    tags: ["LangChain", "FastAPI", "Streamlit", "FAISS", "Python", "RAG"],
    github: "https://github.com/madhanishere/med-bot",
  },

  {
    title: "Research Assistant",
    subtitle: "AI-Powered Browser Extension",
    description:
      "A browser extension that extracts and summarizes web content. Architected a full-stack solution using Spring Boot REST APIs for high-performance content ingestion. Integrated note taking feature.",
    tags: ["Spring Boot", "REST API", "JavaScript", "AI"],
    github: "https://github.com/madhanishere/research-assistant",
  },

  {
    title: "Bulk Mailer",
    subtitle: "Automated bulk email delivery system.",
    description:
      "Developed a Python-based CLI tool to automate bulk email delivery. Integrated Gmail SMTP and CSV processing to handle secure, personalized outreach for professional financial environments.",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/madhanishere/Bulk-Mail-Sender",
  },
{
  title: "RAG Chatbot",
  subtitle: "LangChain + Ollama",
  description:
  "Built a RAG chatbot using LangChain and Ollama with embeddings, vector search, and local LLM-based response generation from custom datasets.",
  tags: ["LangChain", "Ollama", "Python", "RAG", "Vector DB", "Embeddings"],
  github: "https://github.com/madhanishere/Local-AI-Agent",
},
  {
    title: "Weather App",
    subtitle: "Real-time weather tracking via PyScript",
    description:
      "A browser-based weather dashboard utilizing PyScript to run Python logic directly in the frontend. Integrates OpenWeatherMap API for live updates without a backend.",
    tags: ["Python", "PyScript", "API", "Web Development"],
    github: "https://github.com/madhanishere/weather-app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-6 py-8"
    >
      <h2 className="text-2xl font-black mb-14 text-white font-mono tracking-tight">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-start gap-6 mb-5 font-mono">
              
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  {project.title}

                  <span className="text-gray-500 font-normal mx-2">
                    —
                  </span>

                  <span className="text-sm text-gray-400 font-medium">
                    {project.subtitle}
                  </span>
                </h3>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#FF7A1A] flex items-center gap-1 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-white transition-colors shrink-0"
              >
                View Repo <ExternalLink size={14} />
              </a>
            </div>

            <p className="text-gray-400 text-sm leading-7 mb-7 max-w-3xl font-mono">
               {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#FF7A1A] text-black border-2 border-black px-2 py-0.5 text-[9px] font-black shadow-[3px_3px_0px_0px_white] uppercase cursor-default"
                >
                  {tag}
                  
                </span>
                
              )
              )
              }

            </div><br />
                                         <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  ---------------------------------------------------------------------------------------------------------------------------------------
</p>

          </div>
        ))}
      </div>
    </section>
  );
}