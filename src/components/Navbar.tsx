import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const navButtons: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".nav-button");

    navButtons.forEach((button) => {
      if (location.pathname.replace("/", "") == "" && button.id == "home") {
        button.style.opacity = "1";
        return;
      }
      if (location.pathname.replace("/", "") == button.id) {
        button.style.opacity = "1";
      } else button.style.opacity = "0.5";
    });
  }, [location]);

  return (
    <div id="navbar">
      <p id="logo"></p>
      <div id="nav-buttons">
        <Link id="home" className="nav-button" to={"/"}>
          Home
        </Link>
        <Link id="skills" className="nav-button" to={"skills"}>
          Skills
        </Link>
        <Link id="projects" className="nav-button" to={"projects"}>
          Projects
        </Link>
      </div>
      <div id="social">
        <div id="icons">
          <div className="icon">
            <a href="https://www.facebook.com/tsilavomaminiaina.rasoloallaoui">
              <FaFacebookF />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/rasolo-allaoui-tsilavo-maminiaina-manatombo-948634201">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/TsilaAllaoui">
              <FaGithub />
            </a>
          </div>
        </div>
        <Link to={"contact"}>
          <button id="hire-button">Hire me</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
