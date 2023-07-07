import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [activeNavBar, setActiveNavBar] = useState(
    window.location.pathname.replace("/", "")
  );

  useEffect(() => {
    const navButtons: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".nav-button");

    navButtons.forEach((button) => {
      if (button.id == activeNavBar) {
        button.style.opacity = "1";
      } else button.style.opacity = "0.5";
    });
  }, [activeNavBar]);

  const goToContact = () => {
    location.href = "#";
  };

  return (
    <div id="navbar">
      <p id="logo"></p>
      <div id="nav-buttons">
        <Link
          id="home"
          className="nav-button"
          to={"/"}
          onClick={() => setActiveNavBar("home")}
        >
          Home
        </Link>
        <Link
          id="skills"
          className="nav-button"
          to={"skills"}
          onClick={() => setActiveNavBar("skills")}
        >
          Skills
        </Link>
        <Link
          id="projects"
          className="nav-button"
          to={"projects"}
          onClick={() => setActiveNavBar("projects")}
        >
          Projects
        </Link>
      </div>
      <div id="social">
        <div id="icons">
          <a href="https://www.facebook.com/tsilavomaminiaina.rasoloallaoui">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/rasolo-allaoui-tsilavo-maminiaina-manatombo-948634201">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://github.com/TsilaAllaoui">
            <FaGithub className="social-icon" />
          </a>
        </div>
        <button id="hire-button" onClick={goToContact}>
          Hire me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
