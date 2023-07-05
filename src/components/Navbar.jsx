import "../styles/Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div id="navbar">
      <p id="logo">LOGO</p>
      <div id="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">Skills</button>
        <button className="nav-button">Projects</button>
      </div>
      <div id="social">
        <FaFacebookF className="social-icon" />
        <FaLinkedinIn className="social-icon" />
        <FaGithub className="social-icon" />
        <button id="hire-button">Hire me</button>
      </div>
    </div>
  );
}

export default Navbar;
