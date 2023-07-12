import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

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

  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (window.screen.width > 450) {
      return;
    }
    console.log(navbarRef.current!.style.transform);
    navbarRef.current!.style.transform =
      navbarRef.current!.style.transform == "translateX(0px)"
        ? "translateX(-100%)"
        : "translateX(0px)";
    console.log(navbarRef.current!.style.transform);
    menuRef.current!.style.opacity = "100%";
  };

  return (
    <>
      <div id="menu" ref={menuRef} onClick={toggleMenu}>
        <IoMenu />
      </div>
      <div id="navbar" ref={navbarRef}>
        <p id="logo"></p>
        <div id="nav-buttons">
          <Link id="home" className="nav-button" to={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            id="skills"
            className="nav-button"
            to={"skills"}
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            id="projects"
            className="nav-button"
            to={"projects"}
            onClick={toggleMenu}
          >
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
          <Link to={"contact"} onClick={toggleMenu}>
            <button id="hire-button">Hire me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
