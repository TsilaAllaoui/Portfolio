import "../styles/App.scss";
import Waves from "./Waves";
import Navbar from "./Navbar";
import Bio from "./Bio";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Bio />
      <Waves />
    </div>
  );
}

export default App;
