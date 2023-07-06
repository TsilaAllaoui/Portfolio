import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeNavBar, setActiveNavBar] = useState("home");

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
        <button className="nav-button" id="home">
          <a href="#">Home</a>
        </button>
        <button className="nav-button" id="skills">
          <a href="#">Skills</a>
        </button>
        <button className="nav-button" id="projects">
          <a href="">Projects</a>
        </button>
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
