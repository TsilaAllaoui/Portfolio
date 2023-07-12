import { MouseEventHandler, useEffect, useRef } from "react";
import ProjectModel from "../models/project";
import "../styles/Project.scss";

function Project({
  project,
  setPreviewItem,
  index,
}: {
  project: ProjectModel;
  setPreviewItem: (name: string) => void;
  index: number;
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

  const updatePreview = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPreviewItem(project.name);
  };

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 100 * index;
    projectRef.current!.style.animation = `hide ${
      500 + delay
    }ms ease-in-out, show 1250ms ${500 + delay}ms  ease-in-out`;
  }, []);

  return (
    <div ref={projectRef} className="project">
      <div id="card-header">
        <p id="name">{project.name}</p>
        <p id="desc">{project.desc}</p>
      </div>
      <div
        id="card-footer"
        style={{
          backgroundImage: `url(${project.image})`,
          animation:
            window.screen.width <= 4
              ? "move-" +
                project.scrollDireciton +
                "ly 15000ms linear infinite alternate"
              : "",
        }}
        onMouseEnter={move}
        onMouseLeave={removeAnimation}
      >
        <div id="buttons">
          <a href="#">
            <button id="preview" onClick={updatePreview}>
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
