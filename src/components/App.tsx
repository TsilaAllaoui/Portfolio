import "../styles/App.scss";
import Navbar from "./Navbar";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { tsParticles } from "tsparticles-engine";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Layout from "./Layout";
import Projects from "./Projects";
import ErrorPage from "./ErrorPage";

let first = true;

function App() {
  let engine = async () => await loadLinksPreset(tsParticles);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
