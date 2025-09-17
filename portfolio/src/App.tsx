import Navbar from "./components/Navbar/Navbar";
import HeroBackground from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Project/Project";
import FadeSection from "./components/FadeSection/FadeSection";
import Home from "./sections/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative">
      <HeroBackground />
      <Navbar />

      <main className="relative z-10">
        <FadeSection id="home">
          <Home />
        </FadeSection>
        <FadeSection id="about">
          <About />
        </FadeSection>
        <FadeSection id="experience">
          <Experience />
        </FadeSection>
        <FadeSection id="projects">
          <Projects />
          <Footer />
        </FadeSection>
      </main>
    </div>
  );
}

export default App;
