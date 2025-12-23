import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
