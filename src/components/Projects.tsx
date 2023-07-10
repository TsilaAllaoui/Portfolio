import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import Project from "./Project";
import ProjectModel from "../models/project";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Projects() {
  const projects: ProjectModel[] = [
    {
      name: "GasyBoy",
      desc: "Gameboy emulator written with C++ / SDL2",
      image: "./projects-bg/GasyBoy.png",
      link: "https://github.com/TsilaAllaoui/GasyBoy",
      scrollDireciton: "vertical",
    },
    {
      name: " Akaonty-iT",
      desc: "Expense and Debt/Loan Management Android App",
      image: "./projects-bg/Akaonty-iT.jpg",
      link: "https://github.com/TsilaAllaoui/Akaonty-iT",
      scrollDireciton: "vertical",
    },
    {
      name: "Nintendo-Switch-HomeMenu",
      desc: "A recreation of the Nintendo Switch Home menu in ReactJS/Tauri",
      image: "./projects-bg/Nintendo-Switch-HomeMenu.png",
      link: "https://github.com/TsilaAllaoui/Nintendo-Switch-HomeMenu---React-Tauri",
      scrollDireciton: "horizontal",
    },
    {
      name: "ChitChat",
      desc: "Chat app made with ReactJS and FireBase",
      image: "./projects-bg/ChitChat.png",
      link: "https://github.com/TsilaAllaoui/ChitChat",
      scrollDireciton: "horizontal",
    },
    {
      name: "MazeRunner",
      desc: "Maze Runner with BFS and Randomized Prim's Algorithm for maze the generation",
      image: "./projects-bg/MazeRunner.png",
      link: "https://github.com/TsilaAllaoui/MazeRunner",
      scrollDireciton: "vertical",
    },
    {
      name: "RustyChip8",
      desc: "CHIP8 in Rust",
      image: "./projects-bg/placeholder.png",
      link: "https://github.com/TsilaAllaoui/RustyChip8",
      scrollDireciton: "vertical",
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeProjects, setActiveProjects] = useState(projects.slice(0, 3));

  useEffect(() => {
    setActiveProjects(projects.slice(index, index + 3));
    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".indicator");
    indicators.forEach((item, i) => {
      item.style.width = index / 3 == i ? "0.5rem" : "0.3rem";
    });
  }, [index]);

  const updateIndex = (
    event: React.MouseEvent<SVGElement>,
    direction: string
  ) => {
    if (direction == "left" && index > 0) {
      setIndex((index) => index - 3);
    } else if (direction == "right" && index < projects.length - 3) {
      setIndex((index) => index + 3);
    }
  };

  return (
    <div id="projects-container">
      <div id="header">
        <h3>Here are some of my projects. Feel free to test them. Enjoy!</h3>
      </div>
      <div className="projects">
        <div id="prev-container">
          <IoIosArrowBack
            id="prev"
            style={{
              animation: "jiggle-left 1000ms infinite alternate",
              opacity: index > 0 ? "1" : "0",
            }}
            onClick={(e) => updateIndex(e, "left")}
          />
        </div>
        {activeProjects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
        <div id="next-container">
          <IoIosArrowForward
            id="next"
            style={{
              animation: "jiggle-left 1000ms infinite alternate",
              opacity: index < projects.length - 3 ? "1" : "0",
            }}
            onClick={(e) => updateIndex(e, "right")}
          />
        </div>
      </div>
      <div id="indicators">
        {Array.from(Array(Math.floor(projects.length / 3)), (e, i) => {
          return <div className="indicator" key={i}></div>;
        })}
      </div>
    </div>
  );
}

export default Projects;
