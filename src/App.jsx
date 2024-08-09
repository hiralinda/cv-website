import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import MoreProjects from "./MoreProjects";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="skills">
                <Skills />
              </section>
              <section id="certificates">
                <Certificates />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="faq">
                <FAQ />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </>
          }
        />
        <Route path="/projects" element={<MoreProjects />} />
      </Routes>
    </>
  );
}

export default App;
