import "../css/App.scss";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";

function App() {
  return <div className="app">
    <Navbar/>
    <About/>
    <Projects/>
    </div>;
}

export default App;
