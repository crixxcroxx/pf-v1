import { useState, useEffect } from "react";

import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

import "./app.css";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => setIsScrolled(window.pageYOffset < 100 ? false : true)

    return () => window.removeEventListener("onscroll", setIsScrolled(false), true)
  }, []);

  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Footer />
      <>
        {isScrolled &&
          <a href="#top" className="back-to-top icon-link">
            <i className="fas fa-arrow-up"></i>
          </a>
        }
      </>
    </div>
  );
}
