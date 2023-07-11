import Bio from "./Bio";
import Waves from "./Waves";
import "../styles/Home.scss";

function Home() {
  return (
    <div id="home">
      <div id="first-circle"></div>
      <div id="second-circle"></div>
      <div id="third-circle"></div>
      <Bio />
      <Waves />
    </div>
  );
}

export default Home;
