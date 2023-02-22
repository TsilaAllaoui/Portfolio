import "../css/App.scss";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return <div className="app">
    <Navbar/>
    <About/>
    <Projects/>
    <Contact/>
    </div>;
}

export default App;
