import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skill";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { ScrollProgress, BackToTop } from "./components/chrome/pageChrome";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <BackToTop />
    </>
  );
}

export default App;
