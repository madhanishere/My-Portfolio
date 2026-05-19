import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ExtraCurricular from "../components/ExtraCurricular";
import GithubChart from "../components/GithubChart";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ExtraCurricular />
      <Footer />
    </>
  );
}