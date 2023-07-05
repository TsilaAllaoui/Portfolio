import "../styles/App.scss";
import Waves from "./Waves";
import Navbar from "./Navbar";
import React from "react";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Waves />
    </div>
  );
}

export default App;
