import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import CoreSkills from "./components/CoreSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ProgressBar />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Services />

      <TechStack />
      <CoreSkills />
      <Projects />

      <Contact />

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;
