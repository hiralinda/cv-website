import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import MoreProjects from "./MoreProjects";
import FAQ from "./components/FAQ/FAQ";
import { Route, Routes, Router } from "react-router-dom";

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
              <Skills />
              <Certificates />
              <Projects />
              <FAQ />
            </>
          }
        />
        <Route path="/projects" element={<MoreProjects />} />
      </Routes>
    </>
  );
}

export default App;
