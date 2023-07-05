import Wave from "react-wavify";
import "../styles/Waves.scss";

function Waves() {
  return (
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
            <stop offset="25%" stopColor="#740824" />
            <stop offset="75%" stopColor="#4B0C6F" />
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
            <stop offset="25%" stopColor="#105E6A" />
            <stop offset="75%" stopColor="#4A0D71" />
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
            <stop offset="25%" stopColor="#01A469" />
            <stop offset="75%" stopColor="#213F3B" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
}

export default Waves;
