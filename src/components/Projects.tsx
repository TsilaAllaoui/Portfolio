import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import Project from "./Project";
import ProjectModel from "../models/project";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Preview from "./Preview";
import { FaGithub } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

function Projects() {
  const projects: ProjectModel[] = [
    {
      name: "GasyBoy",
      desc: "Gameboy emulator written with C++ / SDL2",
      image: "./projects-bg/GasyBoy/GasyBoy.png",
      link: "https://github.com/TsilaAllaoui/GasyBoy",
      scrollDireciton: "vertical",
      screenshots: [
        "./projects-bg/GasyBoy/dr_mario_1.png",
        "./projects-bg/GasyBoy/dr_mario_2.png",
        "./projects-bg/GasyBoy/mario_land_1.png",
        "./projects-bg/GasyBoy/mario_land_2.png",
        "./projects-bg/GasyBoy/nintendo_screen.png",
        "./projects-bg/GasyBoy/tetris_1.png",
        "./projects-bg/GasyBoy/tetris_2.png",
      ],
    },
    {
      name: " Akaonty-iT",
      desc: "Expense and Debt/Loan Management Android App",
      image: "./projects-bg/Akaonty-iT/Akaonty-iT.jpg",
      link: "https://github.com/TsilaAllaoui/Akaonty-iT",
      scrollDireciton: "vertical",
      screenshots: [
        "./projects-bg/Akaonty-iT/1.jpg",
        "./projects-bg/Akaonty-iT/2.jpg",
        "./projects-bg/Akaonty-iT/3.jpg",
        "./projects-bg/Akaonty-iT/4.jpg",
        "./projects-bg/Akaonty-iT/5.jpg",
        "./projects-bg/Akaonty-iT/6.jpg",
        "./projects-bg/Akaonty-iT/7.jpg",
        "./projects-bg/Akaonty-iT/8.jpg",
        "./projects-bg/Akaonty-iT/9.jpg",
        "./projects-bg/Akaonty-iT/10.jpg",
        "./projects-bg/Akaonty-iT/11.jpg",
      ],
    },
    {
      name: "Nintendo-Switch-HomeMenu",
      desc: "A recreation of the Nintendo Switch Home menu in ReactJS/Tauri",
      image:
        "./projects-bg/Nintendo-Switch-HomeMenu/Nintendo-Switch-HomeMenu.png",
      link: "https://github.com/TsilaAllaoui/Nintendo-Switch-HomeMenu---React-Tauri",
      scrollDireciton: "horizontal",
      screenshots: [
        "./projects-bg/Nintendo-Switch-HomeMenu/Nintendo-Switch-HomeMenu.png",
      ],
    },
    {
      name: "ChitChat",
      desc: "Chat app made with ReactJS and FireBase",
      image: "./projects-bg/ChitChat/ChitChat.png",
      link: "https://github.com/TsilaAllaoui/ChitChat",
      scrollDireciton: "horizontal",
      screenshots: [
        "./projects-bg/ChitChat/ChitChat.png",
        "./projects-bg/ChitChat/main.png",
        "./projects-bg/ChitChat/message.png",
      ],
    },
    {
      name: "MazeRunner",
      desc: "Maze Runner with BFS and Randomized Prim's Algorithm for maze the generation",
      image: "./projects-bg/MazeRunner/MazeRunner.png",
      link: "https://github.com/TsilaAllaoui/MazeRunner",
      scrollDireciton: "vertical",
      screenshots: ["./projects-bg/MazeRunner/capture.gif"],
    },
    {
      name: "Sudoku C++",
      desc: "Sudoku made with C++/SDL2",
      image: "./projects-bg/Sudoku/start.png",
      link: "https://github.com/TsilaAllaoui/Sudoku-CPP-SDL2",
      scrollDireciton: "vertical",
      screenshots: [
        "./projects-bg/Sudoku/start.png",
        "./projects-bg/Sudoku/sudoku.png",
        "./projects-bg/Sudoku/help.png",
      ],
    },
    {
      name: "RustyChip8",
      desc: "CHIP8 in Rust",
      image: "./projects-bg/placeholder.png",
      link: "https://github.com/TsilaAllaoui/RustyChip8",
      scrollDireciton: "vertical",
      screenshots: ["./projects-bg/placeholder.png"],
    },
  ];

  const sliceCount = window.screen.width > 450 ? 3 : 1;

  const [index, setIndex] = useState(0);
  const [activeProjects, setActiveProjects] = useState(
    projects.slice(0, sliceCount)
  );
  const [currentPrieviewItem, setCurrentPrieviewItem] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    setActiveProjects(projects.slice(index, index + sliceCount));
    const indicators: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".indicator");
    indicators.forEach((item, i) => {
      item.style.width = index / sliceCount == i ? "0.75rem" : "0.3rem";
      item.style.backgroundColor =
        index / sliceCount == i ? "#740824" : "white";
    });
  }, [index]);

  useEffect(() => {
    if (currentPrieviewItem == "") {
      setPreviews([]);
    }
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.name == currentPrieviewItem) {
        setPreviews(project.screenshots);
        break;
      }
    }
  }, [currentPrieviewItem]);

  const updateIndex = (
    event: React.MouseEvent<SVGElement> | null,
    direction: string
  ) => {
    if (direction == "left" && index > 0) {
      setIndex((index) => index - sliceCount);
    } else if (direction == "right" && index < projects.length) {
      setIndex((index) => index + sliceCount);
    }
  };

  const swipeHanlders = useSwipeable({
    onSwipedLeft: (event) => updateIndex(null, "right"),
    onSwipedRight: (event) => updateIndex(null, "left"),
  });

  return (
    <div id="projects-container">
      <div id="header">
        <h3>
          {index >= projects.length
            ? "Want to see more projects? "
            : "Here are some of my projects. Feel free to test them. Enjoy!"}
        </h3>
      </div>
      <div className="projects" {...swipeHanlders}>
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
        {activeProjects.map((project, index) => (
          <Project
            project={project}
            setPreviewItem={setCurrentPrieviewItem}
            key={project.name}
            index={index}
          />
        ))}
        {index >= projects.length ? (
          <div id="github">
            <a href="https://github.com/TsilaAllaoui">
              <FaGithub className="github-icon" />
              <p>Go to github profile</p>
            </a>
          </div>
        ) : null}
        <div id="next-container">
          <IoIosArrowForward
            id="next"
            style={{
              animation: "jiggle-left 1000ms infinite alternate",
              opacity: index < projects.length ? "1" : "0",
            }}
            onClick={(e) => updateIndex(e, "right")}
          />
        </div>
      </div>
      <div id="indicators">
        {Array.from(
          Array(
            Math.floor(projects.length / sliceCount) + (sliceCount == 1 ? 0 : 1)
          ),
          (e, i) => {
            return <div className="indicator" key={i}></div>;
          }
        )}
      </div>
      {previews.length > 0 ? (
        <div id="preview-container">
          <Preview
            previews={previews}
            setCurrentPrieviewItem={setCurrentPrieviewItem}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
