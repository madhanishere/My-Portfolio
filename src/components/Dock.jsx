import { Home, Folder, Linkedin, Github, Moon, Mail } from 'lucide-react';

export default function Dock() {

  const links = {
    github: "https://github.com/madhanishere",
    linkedin: "https://linkedin.com/in/madhan-raghuram",
    email: "mailto:madhanraghuram@gmail.com",
    projects: "#projects",
    home: "#home"
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {}
      <div className="bg-[#0A0A0A]/90 border border-white/10 px-6 py-3 rounded-full flex gap-6 items-center shadow-2xl backdrop-blur-md">
        

        {}
        <a href={links.github} target="_blank" rel="noreferrer" title="GitHub">
          <Github className="w-5 h-5 text-gray-400 hover:text-[#FFDE03] cursor-pointer hover:scale-110 transition-transform" />
        </a>

        <a href={links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#3b82f6] cursor-pointer hover:scale-110 transition-transform" />
        </a>

        <a href={links.email} title="Contact">
          <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}