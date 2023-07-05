import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";

function Navbar() {

  const [activeNavBar, setActiveNavBar] = useState("home");
  const [name, setName] = useState("");
  const fullName = "Tsilavo";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const navButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".nav-button");

    navButtons.forEach((button) => {
      if (button.id == activeNavBar) {
        button.style.opacity = "1";
      }
      else button.style.opacity = "0.5";
    });
  }, [activeNavBar])

  useEffect(() => {
    setInterval(() => {
      if (name.length >= fullName.length)
        return;
      setName((name) => name + fullName[index]);
      setIndex((index) => index++);
      console.log(index)
    }, 1000);
  }, []);

  return (
    <div id="navbar">
      <p id="logo">Tsilavo</p>
      <div id="nav-buttons">
        <button className="nav-button" id="home"><a href="#">Home</a></button>
        <button className="nav-button" id="skills"><a href="#">Skills</a></button>
        <button className="nav-button" id="projects"><a href="">Projects</a></button>
      </div>
      <div id="social">
        <div id="icons">
         <a href="https://www.facebook.com/tsilavomaminiaina.rasoloallaoui"><FaFacebookF className="social-icon" /></a>
         <a href="#"><FaLinkedinIn className="social-icon" /></a>
         <a href="https://github.com/TsilaAllaoui"><FaGithub className="social-icon" /></a>
        </div>
        <button id="hire-button">Hire me</button>
      </div>
    </div>
  );
}

export default Navbar;
