import { MouseEventHandler } from "react";
import ProjectModel from "../models/project";
import "../styles/Project.scss";

function Project({
  project,
  setPreviewItem,
}: {
  project: ProjectModel;
  setPreviewItem: (name: string) => void;
}) {
  const fontSize = project.desc.length > 40 ? 0.75 : 1;

  const move = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.animation =
      (project.scrollDireciton == "vertical"
        ? "move-vertically"
        : "move-horizontally") + " 15000ms linear infinite alternate";
  };

  const removeAnimation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.animation = "";
  };

  return (
    <div className="project">
      <div id="card-header">
        <p id="name">{project.name}</p>
        <p id="desc">{project.desc}</p>
      </div>
      <div
        id="card-footer"
        style={{ backgroundImage: `url(${project.image})` }}
        onMouseEnter={move}
        onMouseLeave={removeAnimation}
      >
        <div id="buttons">
          <a href="#">
            <button
              id="preview"
              onClick={() => {
                setPreviewItem(project.name);
              }}
            >
              Preview
            </button>
          </a>
          <a href={project.link}>
            <button id="more">More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
