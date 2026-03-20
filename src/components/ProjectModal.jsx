import { X, Github, ExternalLink, Zap } from 'lucide-react';

export default function ProjectDetail({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {}
      <div className="relative bg-[#1A1A1A] border-2 border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_#FFDE03] font-mono animate-in zoom-in duration-200">
        
        {}
        <div className="h-48 bg-[#FFDE03] flex items-center justify-center border-b-2 border-black">
             <h2 className="text-4xl font-black text-black uppercase tracking-tighter italic">
                {project.title.split(' ')[0]}
             </h2>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black rounded-full border border-white/20 text-white hover:text-[#FFDE03]">
          <X size={20} />
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-black text-white mb-4 uppercase">{project.title}</h3>
          
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            {}
            <div className="bg-white/5 border-l-4 border-[#FFDE03] p-4">
              <p className="text-white font-bold mb-2 flex items-center gap-2">
                <Zap size={14} className="text-[#FFDE03]" /> Technical Breakdown
              </p>
              {project.longDescription || "Developing a scalable solution using microservices architecture to handle high-concurrency requests."}
            </div>

            <div>
              <p className="text-white font-bold mb-2">Key Features:</p>
              <ul className="list-disc list-inside space-y-2">
                {project.features?.map((f, i) => <li key={i}>{f}</li>) || (
                  <>
                    <li>Integrated Gemini API for real-time code analysis.</li>
                    <li>Containerized using Docker for seamless deployment.</li>
                    <li>Designed for sub-100ms latency in response generation.</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
             <a href={project.github} className="flex-1 bg-white text-black text-center py-3 rounded-xl font-black text-xs hover:bg-[#FFDE03] transition-colors">GITHUB REPO</a>
             <a href={project.website} className="flex-1 bg-black border border-white/20 text-white text-center py-3 rounded-xl font-black text-xs hover:border-[#FFDE03] transition-colors">LIVE DEMO</a>
          </div>
        </div>
      </div>
    </div>
  );
}