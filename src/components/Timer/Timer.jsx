import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import Button from "../Button/Button";
import s from "./timer.module.css";

export default function Timer() {
  const [initialtimeForTask] = useLocalStorage("setMinutes", 600);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useLocalStorage(
    "remainingMinutes",
    600
  );

  useEffect(() => {
    let interval;

    if (timerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      clearInterval(interval);
      setTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [timeRemaining, timerRunning, setTimeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
  const start = () => {
    setTimerRunning(!timerRunning);
  };
  const reset = () => {
    setTimerRunning(false);
    setTimeRemaining(600);
  };
  const textStartBtn = timerRunning ? "take a breath" : "start";
  return (
    <div className={s.container}>
      <CircularProgressbar
        value={timeRemaining}
        maxValue={initialtimeForTask}
        minValue={0}
        strokeWidth={5}
        counterClockwise={true}
        background={true}
        className={s.circle}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          pathColor: "#fdeedf",
          trailColor: `#f60 `,
        })}
        text={formattedTime}
      />
      <div className={s.buttons}>
        <Button text={textStartBtn} onClick={start} fontSize="2em" />
        {timeRemaining !== initialtimeForTask && (
          <div className={s.resetBtn}>
            <Button
              text="reset"
              onClick={reset}
              fontSize="2em"
              disabled={timeRemaining === initialtimeForTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}
