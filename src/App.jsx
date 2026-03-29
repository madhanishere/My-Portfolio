
import Navbar from "./components/Navbar";

import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Dock from "./components/Dock";
import ProjectGrid from "./components/ProjectGrid";
import GithubChart from "./components/GithubChart";
import ExtraCurricular from "./components/ExtraCurricular";

import Footer from "./components/Footer";
import Hero from "./components/Hero";


function App() {
  return (
    <div 
      className="min-h-screen bg-[#141414] text-white selection:bg-[#FFDE03] selection:text-black"
      
      style={{
        backgroundImage: `radial-gradient(#222 1.2px, transparent 1.2px)`,
        backgroundSize: '28px 28px', 
      }}
    >
        <main className=" flex-col gap-1">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Education /> 

        <Dock />
        <ProjectGrid />
        <GithubChart />

        <ExtraCurricular />
        

        <Footer />
      </main>
    </div>
  );
}

export default App;