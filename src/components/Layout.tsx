import Navbar from "./Navbar";
import "../styles/Layout.scss";

import { loadLinksPreset } from "tsparticles-preset-links";
import { tsParticles } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { Outlet, useLocation, useNavigate } from "react-router";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

function Layout() {
  let engine = async () => await loadLinksPreset(tsParticles);

  const location = useLocation();
  const navigate = useNavigate();

  function updateRouteDown(event: React.MouseEvent<SVGElement, MouseEvent>) {
    console.log(location);
    if (location.pathname.replace("/", "") == "") {
      navigate("/skills");
    } else if (location.pathname.replace("/", "") == "skills") {
      navigate("/projects");
    }
  }

  function updateRouteUp(event: React.MouseEvent<SVGElement, MouseEvent>) {
    console.log(location);
    if (location.pathname.replace("/skills", "") == "") {
      navigate("/");
    } else if (location.pathname.replace("/", "") == "projects") {
      navigate("/skills");
    }
  }

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
      <div id="arrows">
        {location.pathname == "/projects" ? null : (
          <IoIosArrowDown
            id="down-arrow"
            onClick={updateRouteDown}
            style={
              location.pathname == "/"
                ? { position: "absolute", bottom: "1rem" }
                : {}
            }
          />
        )}
        {location.pathname == "/" ? null : (
          <IoIosArrowUp id="up-arrow" onClick={updateRouteUp} />
        )}
      </div>
    </div>
  );
}

export default Layout;
