import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import s from "./timer.module.css";

export default function Timer() {
  const percentage = 66;
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const [minutes, setMinutes] = useState(
    JSON.parse(window.localStorage.getItem("minutes")) ?? 15
  );
  const [seconds, setSeconds] = useState(0);
  const [initialMin] = useState(
    JSON.parse(window.localStorage.getItem("minutes")) ?? 10
  );
  const [initialSec] = useState(0);
  return (
    <div className={s.container}>
      <CircularProgressbar
        value={minutes}
        maxValue={initialMin}
        minValue={initialSec}
        strokeWidth={10}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          pathColor: "#f60",

          //   textSize: "1em",
          trailColor: `rgba(255, 136, 136)`,
          backgroundColor: "#3e98c7",
        })}
        text={`${minutes >= 10 ? minutes : "0" + minutes}:${
          seconds >= 10 ? seconds : "0" + seconds
        }`}
      />
      ;
    </div>
  );
}
