import SkillModel from "../models/skill";
import "../styles/Skill.scss";

function Skill({ skill }: { skill: SkillModel }) {
  return (
    <div id="skill-container">
      <div
        id="skill"
        style={{
          background: `radial-gradient(closest-side, #151315 79%, transparent 80% 100%), conic-gradient(transparent ${
            100 - skill.perf
          }%, #3a2e73 ${100 - skill.perf}%)`,
        }}
      >
        <progress
          value={50}
          max={100}
          style={{ visibility: "hidden", height: "0", width: "0" }}
        >
          50%
        </progress>
        <p>{skill.perf}%</p>
      </div>
      <p>{skill.tech}</p>
    </div>
  );
}

export default Skill;
