import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Dock from './components/Dock';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GithubChart from './components/GithubChart';
import ExtraCurricular from './components/ExtraCurricular';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="flex flex-col gap-10 pb-32">
      <main>
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
                <Education /> 

        <Dock />
        <ProjectGrid />
                <GithubChart />

        <ExtraCurricular />
                <Marquee />

        <Footer />

      </main>
    </div>
  )
}

export default App