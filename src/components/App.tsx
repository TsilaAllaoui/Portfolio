import "../styles/App.scss";
import Navbar from "./Navbar";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { tsParticles } from "tsparticles-engine";
import { Outlet } from "react-router-dom";

function App() {
  let engine = async () => await loadLinksPreset(tsParticles);

  return (
    <div className="app">
      <Particles
        options={{
          preset: "links",
        }}
        init={engine}
        id="particles"
      />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
