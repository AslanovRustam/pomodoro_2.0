import { useEffect } from "react";
import s from "./break.module.css";

export default function Break({
  breakRunning,
  setBreakRunning,
  breakTimeRemaining,
  setBreakTimeRemaining,
  startMainTimer,
}) {
  useEffect(() => {
    let interval;

    if (breakRunning && breakTimeRemaining > 0) {
      interval = setInterval(() => {
        setBreakTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (breakTimeRemaining === 0) {
      clearInterval(interval);
      setBreakRunning(false);
      startMainTimer();
    }

    return () => clearInterval(interval);
  }, [breakTimeRemaining, breakRunning]);

  const minutes = Math.floor(breakTimeRemaining / 60);
  const seconds = breakTimeRemaining % 60;

  const formattedTime = `${minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
  return <div className={s.timer}>break time {formattedTime}</div>;
}
