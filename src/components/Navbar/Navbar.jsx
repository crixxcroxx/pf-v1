import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h3 className="logo">CM</h3>

      <div className="nav-links">
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}