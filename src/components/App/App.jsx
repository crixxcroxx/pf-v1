import Triangle from "../Triangle";
import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Skills from "../Skills";
import Footer from "../Footer";

import "./app.css";

export default function App() {

  return (
    <div className="app">
      <Header />
      <Triangle />
      <About />
      <Projects />
      <Skills />
      <div className="triangle-rev-container">
        <Triangle reverse />
      </div>
      <Footer />
    </div>
  );
}
