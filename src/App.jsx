import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Skills />
        <Certificates />
      </div>
    </>
  );
}

export default App;
