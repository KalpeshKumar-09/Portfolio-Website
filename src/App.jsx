import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee.jsx/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";

function App() {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Project />
      <About />
      <Contact />
    </main>
  );
}

export default App;
