import "../styles/App.scss";
import KUTE from "kute.js";

function App() {

  // const tween = KUTE.fromTo(
  //   "#layer1",
  //   { path: "#layer1" },
  //   { path: "#layer2" },
  //   { repeat: 999, duration: 3000, yoyo: true }
  // );

  // useEffect(() => {
  //   tween.start();
  // }, [])


  return <div className="app">
    <div className="spacer layer1"></div>
    <div className="spacer layer2"></div>
  </div>;
}

export default App;
