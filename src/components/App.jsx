import "../styles/App.scss";
import Wave from "react-wavify";
import { useEffect } from "react";

function App() {
  return (
    <div className="app">
      <div className="waves">
        <Wave
          id="wave-1"
          fill="url(#gradient-1)"
          paused={false}
          options={{
            height: 20,
            amplitude: 100,
            speed: 0.1,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient-1">
              <stop offset="25%" stopColor="#901D4A" />
              <stop offset="75%" stopColor="#4C0C71" />
            </linearGradient>
          </defs>
        </Wave>
        <Wave
          id="wave-2"
          fill="url(#gradient-2)"
          paused={false}
          options={{
            height: 90,
            amplitude: 50,
            speed: 0.15,
            points: 4,
          }}
        >
          <defs>
            <linearGradient id="gradient-2">
              <stop offset="25%" stopColor="#4C0C71" />
              <stop offset="75%" stopColor="#0D334B" />
            </linearGradient>
          </defs>
        </Wave>

        <Wave
          className="path-0"
          id="wave-3"
          fill="url(#gradient3)"
          paused={false}
          options={{
            height: 75,
            amplitude: 26,
            speed: 0.15,
            points: 6,
          }}
        >
          <defs>
            <linearGradient id="gradient3">
              <stop offset="25%" stopColor="#6D0C28" />
              <stop offset="75%" stopColor="#0D344C" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
}

export default App;
