import "../styles/Skills.scss";
import Skill from "./Skill";
import SkillModel from "../models/skill.js";

function Skills() {
  const skills: SkillModel[] = [
    { tech: "C/C++", perf: 95 },
    { tech: "Web Development", perf: 75 },
    { tech: "Game Development", perf: 95 },
    { tech: "Rust", perf: 90 },
    { tech: "Low Level Development", perf: 95 },
    { tech: "Embedded Technologies", perf: 95 },
  ];
  return (
    <div id="skills-container">
      <div id="skills">
        <h1>Skills</h1>
        <div id="skills-list">
          {skills.map((skill: SkillModel, index) => {
            if (index > 2) return <p key={index}></p>;
            else return <Skill skill={skill} key={skill.tech} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
