import Navbar from "./Navbar";
import "../styles/Layout.scss";

import { loadLinksPreset } from "tsparticles-preset-links";
import { tsParticles } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { Outlet } from "react-router";

function Layout() {
  let engine = async () => await loadLinksPreset(tsParticles);

  return (
    <div id="layout">
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

export default Layout;
