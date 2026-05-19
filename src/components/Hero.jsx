import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-3xl mx-auto px-6 pt-2 pb-12 text-justify"
    >
<br />
      <h1 className="text-xl md:text-3xl font-black mb-6 flex flex-wrap items-center gap-4 tracking-tight">
        
        <span className="text-4xl  text-white font-black font-mono tracking-tight">
          Madhan
        </span>

        <span className=" text-4xl text-[#FF7A1A] font-black font-mono tracking-tight">
          Raghuram
        </span>
        


<div className="flex items-center gap-3 mt-2 md:mt-0 md:ml-70">
          <a
            href="https://github.com/madhanishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF7A1A] transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/madhan-raghuram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF7A1A] transition"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:madhanraghuram@gmail.com"
            className="text-gray-400 hover:text-[#FF7A1A] transition"
          >
            <Mail size={27} />
          </a>
        </div>
      </h1>
               <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  ---------------------------------------------------------------------------------------------------------------------------------------
</p>
<br />
    
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl absolute inset-0 bg-black/30">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/public/hailuo-2_3_cozy_pixel_art_programmer_room_rainy_window_retro_computer_cat_near_fireplace_an-0.mp4" type="video/mp4" />
  </video>
</div>
      <div className="mt-10">
        
        <h2 className="text-2xl font-black mb-10  text-white font-mono tracking-tight">
          About Me
        </h2>

        <div className="space-y-8 text-gray-400 text-sm leading-8 font-mono tracking-tight text-justify max-w-2.5xl">
<p>
  Software Developer with a strong interest in building scalable and efficient systems.
  Focused on understanding how applications work end to end and designing solutions
  that are simple and maintainable.
</p>

<p>
  Currently exploring AI engineering and working towards integrating intelligent,
  data-driven features into modern software systems.
</p>

        </div>
        <br />
         <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  --------------------------------------------------------------------------------------------------------------------------------
</p>

      </div>
    </section>
  );
}