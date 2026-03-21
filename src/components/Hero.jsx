export default function Hero() {
  return (
    <section id="home" className="max-w-3xl mx-auto px-6 pt-24 pb-12 text-left">
      {}
     

      <h1 className="text-4xl md:text-4xl font-black mb-4 flex flex-wrap items-center gap-4 text-white tracking-tight ">
        
                <span className="text-[#ffffff] "> Madhan</span> 

        <span className="text-[#FFDE03] "> Raghuram</span> 
        
      </h1>
      
      {}
      <p className="space-y-6 text-gray-400 text-0.5xl text-sm leading-relaxed font-mono tracking-tight max-w-2xl">
        <br />
Your friendly neighborhood developer!      </p>
  

      {}
      <div className="mt-12">
        <h2 className="text-xl font-black  mb-12 text-white  font-mono">
          About Me
        </h2>
  
        <div className="space-y-6 text-gray-400 text-sm leading-relaxed font-mono tracking-tight max-w-2xl">
          <p>
           I build what interests me and helps me understand how systems work end to end. As a Java Developer, I focus on creating scalable and efficient applications.
          </p>
          <p>
            I learn by doing, building, improving, and understanding things step by step. Each project helps me grow and refine my problem-solving approach.
          </p>
          <p>
            Currently exploring microservices architecture and building scalable applications.
Focused on designing systems that are modular, efficient, and easy to maintain.
Continuously learning how to improve performance and scalability in real-world applications.
          </p>
        </div>
      </div>

      {}
      <style>{`
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
        .animate-wave {
          animation: wave 2.5s;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}