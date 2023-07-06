import "../styles/App.scss";
import Waves from "./Waves";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Engine, tsParticles } from "tsparticles-engine";
import Home from "./Home";
import Skills from "./Skills";

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
      {/* <Home /> */}
      <Skills />
    </div>
  );
}

export default App;
