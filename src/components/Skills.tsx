import "../styles/Skills.scss";
import Skill from "./Skill";
import SkillModel from "../models/skill.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

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
    setIndex((index) => index + 3);
    setActiveSkills(skills.slice(index + 3, index + 6));
  };

  const prevSkills = () => {
    if (skills.slice(index - 3, index).length == 0) return;
    setIndex((index) => index - 3);
    setActiveSkills(skills.slice(index - 3, index));
  };

  useEffect(() => {
    console.log((index % 3) + ":" + index / 3);
    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".indicator");
    indicators.forEach((item, i) => {
      item.style.width = index / 3 == i ? "0.5rem" : "0.3rem";
    });
  }, [index]);

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
    </div>
  );
}

export default Skills;
