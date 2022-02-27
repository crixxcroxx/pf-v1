import "./navbar.css";

const NavLinks = () => {
  return (
    <>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
};

export default function Navbar() {
  const handleClose = () => {
    const sideNav = document.querySelector(".nav-sm-side");
    sideNav.style.transform = "translateX(100vw)";
  };

  const handleOpen = () => {
    const sideNav = document.querySelector(".nav-sm-side");
    sideNav.style.transform = "translateX(0)";
  };

  return (
    <nav>
      <h3 className="logo">CM</h3>

      <div className="nav-links">
        <NavLinks />
      </div>

      <div className="nav-sm-burger" onClick={handleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="nav-sm-side">
        <button onClick={handleClose}>X</button>
        <NavLinks />
      </div>
    </nav>
  );
}
