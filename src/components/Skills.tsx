import "../styles/Skills.scss";
import Skill from "./Skill";
import SkillModel from "../models/skill.js";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState } from "react";

function Skills() {
  const skills: SkillModel[] = [
    { tech: "C/C++", perf: 95 },
    { tech: "Web Development", perf: 75 },
    { tech: "Game Development", perf: 98 },
    { tech: "Rust", perf: 90 },
    { tech: "Low Level Development", perf: 95 },
    { tech: "Embedded Technologies", perf: 95 },
  ];

  const [activeSkills, setActiveSkills] = useState<SkillModel[]>([...skills.slice(0, 3)]);
  const [index, setIndex] = useState(0);

  const nextSkills = () => {
    if (index > skills.length - 3)
      return;
    setIndex((index) => index + 1);
    setActiveSkills(skills.slice(index, index + 3));
  };

  const prevSkills = () => {
    if (index <= 1)
      return;
    setIndex((index) => index - 1);
    setActiveSkills(skills.slice(index, index + 3));
  };

  return (
    <div id="skills-container">
      <div id="skills">
        <h1>Skills</h1>
        <div id="skills-list">
          <div onClick={prevSkills}>
            <GrPrevious id="prev" />
          </div>
          {activeSkills.map((skill: SkillModel, index) => <Skill skill={skill} key={skill.tech} />)}
          <div onClick={nextSkills}>
            <GrNext id="next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
