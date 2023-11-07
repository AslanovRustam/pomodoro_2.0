import { useEffect, useState } from "react";
import { useData } from "../../helpers/DataContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Button from "../Button/Button";
import s from "./timer.module.css";
import Break from "../Break/Break";

export default function Timer() {
  const { timerSettings } = useData();
  const [initialtimeForTask] = useState(timerSettings.work);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timerSettings.work);

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
    setTimeRemaining(timerSettings.work);
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
      <Break />
    </div>
  );
}
