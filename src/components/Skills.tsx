import "../styles/Skills.scss";
import Skill from "./Skill";
import SkillModel from "../models/skill.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import arduino from "../assets/arduino-original.svg";
import bash from "../assets/bash-plain.svg";
import bootstrap from "../assets/bootstrap-original.svg";
import c from "../assets/c-original.svg";
import cpp from "../assets/cplusplus-original.svg";
import cmake from "../assets/cmake-original.svg";
import css from "../assets/css3-plain-wordmark.svg";
import flutter from "../assets/flutter-original.svg";
import html from "../assets/html5-original.svg";
import js from "../assets/javascript-original.svg";
import linux from "../assets/linux-original.svg";
import nodejs from "../assets/nodejs-original.svg";
import python from "../assets/python-original.svg";
import raspberry from "../assets/raspberrypi-original.svg";
import react from "../assets/react-original.svg";
import sdl from "../assets/sdl-original.svg";
import ts from "../assets/typescript-original.svg";
import vs from "../assets/visualstudio-plain.svg";
import { element } from "prop-types";

function Skills() {
  const skills: SkillModel[] = [
    { tech: "C/C++", perf: 95 },
    { tech: "Web Development", perf: 75 },
    { tech: "Game Development", perf: 98 },
    { tech: "Rust", perf: 90 },
    { tech: "Low Level Development", perf: 95 },
    { tech: "Embedded Technologies", perf: 95 },
    { tech: "Mobile Technologies", perf: 90 },
  ];

  const [activeSkills, setActiveSkills] = useState<SkillModel[]>([
    ...skills.slice(0, 3),
  ]);
  const [index, setIndex] = useState(0);

  const nextSkills = () => {
    if (skills.slice(index + 3, index + 6).length == 0) return;

    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".skill-item");
    indicators.forEach((item) => {
      item.style.animation = "fade-out-right 500ms linear";
    });

    setIndex((index) => index + 3);
    setActiveSkills(skills.slice(index + 3, index + 6));
    // setTimeout(() => {}, 500);
  };

  const prevSkills = () => {
    if (skills.slice(index - 3, index).length == 0) return;

    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".skill-item");
    indicators.forEach((item) => {
      item.style.animation = "fade-out-left 500ms linear";
    });

    setIndex((index) => index - 3);
    setActiveSkills(skills.slice(index - 3, index));
  };

  useEffect(() => {
    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".indicator");
    indicators.forEach((item, i) => {
      item.style.width = index / 3 == i ? "0.5rem" : "0.3rem";
    });
  }, [index]);

  useEffect(() => {
    const otherSkills: NodeListOf<HTMLImageElement> = document.querySelectorAll(
      "#other-skills > img"
    );
    let delay = 0;
    otherSkills.forEach((skill) => {
      skill.style.animation = `hide ${
        1250 + delay
      }ms ease-in-out, show 1250ms ${1250 + delay}ms ease-in-out`;
      delay += 75;
    });
  }, []);

  return (
    <div id="skills-container">
      <div id="skills">
        <h1>Skills</h1>
        <div id="skills-list">
          <div className="prev-container" onClick={prevSkills}>
            <IoIosArrowBack id="prev" />
          </div>
          <div id="skill-items">
            {activeSkills.map((skill: SkillModel, index) => {
              return (
                <div className="skill-item" key={skill.tech}>
                  <Skill skill={skill} />
                </div>
              );
            })}
          </div>
          <div className="next-container" onClick={nextSkills}>
            <IoIosArrowForward id="next" />
          </div>
        </div>
        <div id="indicators">
          {Array.from(Array(Math.floor(skills.length / 3) + 1), (e, i) => {
            return <div className="indicator" key={i}></div>;
          })}
        </div>
      </div>
      <div id="other-skills-container">
        <p>Others</p>
        <div id="other-skills">
          <img src={c} title="c" alt="c" />
          <img src={cpp} title="cplusplus" alt="cplusplus" />
          <img src={flutter} title="Flutter" alt="Flutter" />
          <img src={css} title="CSS3" alt="CSS" />
          <img src={html} title="HTML5" alt="HTML" />
          <img src={js} title="JavaScript" alt="JavaScript" />
          <img src={ts} title="TypeScript" alt="TypeScript" />
          <img src={react} title="React" alt="React" />
          <img src={nodejs} title="Nodejs" alt="Nodejs" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
          <img src={arduino} title="Arduino" alt="Arduino" />
          <img src={raspberry} title="RaspberryPi" alt="RaspberryPi" />
          <img src={bash} title="Bash" alt="Bash" />
          <img src={cmake} title="Cmake" alt="Cmake" />
          <img src={linux} title="Linux" alt="Linux" />
          <img src={sdl} title="SDL" alt="SDL" />
          <img src={python} title="Python" alt="Python" />
          <img src={vs} title="Visualstudio" alt="Visualstudio" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
