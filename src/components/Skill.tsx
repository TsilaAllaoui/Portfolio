import SkillModel from "../models/skill";
import "../styles/Skill.scss";
import { PieChart } from "react-minimal-pie-chart";

function Skill({ skill }: { skill: SkillModel }) {
  return (
    <div id="skill-container">
      <div className="pie">
        <PieChart
          className="chart"
          data={[{ value: skill.perf - 5, color: "url(#gradient-1)" }]}
          totalValue={100}
          lineWidth={25}
          children={
            <linearGradient id="gradient-1">
              <stop offset="25%" stopColor="#740824" />
              <stop offset="75%" stopColor="#4B0C6F" />
            </linearGradient>
          }
          rounded={true}
          animate={true}
          animationDuration={1500}
        />
        <p className="perf">{skill.perf}%</p>
      </div>
      <p className="tech">{skill.tech}</p>
    </div>
  );
}

export default Skill;
