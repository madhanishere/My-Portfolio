import Education from "../components/Education";

import Skills from "../components/Skills";
import Footer from "../components/Footer";
import GithubChart from "../components/GithubChart";
export default function ExperiencePage() {
  return (
    <div className="min-h-screen text-white">
      <GithubChart />
      <Education/>
      <Skills/>
            <Footer />
      
    </div>
  );
}