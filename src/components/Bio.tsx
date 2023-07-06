import "../styles/Bio.scss";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile-pic.svg";

function Bio() {
  return (
    <div id="bio">
      <div id="desc">
        <p id="welcome">Welcome to my portfolio.</p>
        <div id="presentation">
          Hi! I'm{" "}
          <div id="name">
            <Typewriter
              words={["Tsilavo."]}
              typeSpeed={250}
              deleteSpeed={100}
              cursor={true}
              loop={false}
            />
          </div>
        </div>
        <p>
          My name is Tsila and I am a computer science student. Passionate about
          new technologies but also a fanatic of old ones especially retro
          consoles. Spending most of my time doing electronics and coding.
        </p>
      </div>
      <img id="profile-pic" src={profilePic} alt="" />
    </div>
  );
}

export default Bio;
