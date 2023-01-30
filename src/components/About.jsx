import "../css/About.scss";
import avatar from "../assets/avatar.svg";

function About() {
  return (
    <div class="About-container">
      <div class="About-section-infos">
        <p>Hi! I'm Tsilavo </p>
        <p>IT Developer</p>
        <p id="infos">
          Student in IT dev, created some games as hobby and fanatics of
          electrionic stuffs
        </p>
        <div class="hire-me">
          <button class="hire-button">Hire me</button>
          <button class="projects-button">Projects</button>
        </div>
      </div>
      <div class="About-section-avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default About;
