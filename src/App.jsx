
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GithubChart from "./components/GithubChart";
import ExtraCurricular from "./components/ExtraCurricular";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <Experience />
      <Education />
<Projects />
      <Skills />
      <GithubChart />
      <ExtraCurricular />
<Footer />

    </div>
  );
}