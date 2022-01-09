import Navbar from "../Navbar";

import "./header.css";

export default function Header() {

  return (
    <header id="top">
      <Navbar />

      <div className="hero">
        <img
          className="hero-img"
          src="https://source.unsplash.com/vUwJ8uu_C1M"
          alt="banner"
        />

        <div className="hero-details">
          <span>Cris Montajes</span>
          <span className="hero-title">web developer</span>
        </div>
      </div>
    </header>
  );
}