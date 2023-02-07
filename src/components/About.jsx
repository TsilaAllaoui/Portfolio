import "../css/About.scss";
import Skills from "./Skills"
import avatar from "../assets/630.png";

function About() {
  return (
    <div class="About-container">
      <div class="About-section-infos">
        <p>Hi! I'm Tsilavo </p>
        <p>IT Developer</p>
        <p id="infos">
          Working in IT dev environment, created some games as hobby and fanatics of
          electrionic stuffs
        </p>
        <div class="hire-me">
          <button class="hire-button">Hire me</button>
          <button class="projects-button">Projects</button>
        </div>
        <div className="skills">
            <Skills/>
        </div>
      </div>
      <div class="About-section-avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default About;
