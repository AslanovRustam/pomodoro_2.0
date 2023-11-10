import { useEffect, useRef, useState } from "react";
import { useData } from "../../helpers/DataContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Button from "../Button/Button";
import s from "./timer.module.css";
import Break from "../Break/Break";
import finish from "../../assets/alarm.mp3";
import btnClick from "../../assets/press.wav";

export default function Timer() {
  const { timerSettings } = useData();
  const [initialtimeForTask] = useState(timerSettings.work);
  const [timerRunning, setTimerRunning] = useState(false);
  const [breakRunning, setBreakRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timerSettings.work);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(
    timerSettings.rest
  );
  const audioClickRef = useRef(null);
  const audioFinishRef = useRef(new Audio(finish));

  useEffect(() => {
    if (breakRunning) {
      document.body.classList.add(s.breakTime);
      return;
    }
    document.body.classList.remove(s.breakTime);
  }, [breakRunning]);

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
      const audio = audioFinishRef.current;
      audio.play();
    }

    return () => clearInterval(interval);
  }, [timeRemaining, timerRunning, setTimeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
  const onBtnClickAudio = () => {
    const audio = audioClickRef.current;
    audio.play();
  };
  const start = () => {
    setTimerRunning(!timerRunning);
    onBtnClickAudio();
  };
  const pause = () => {
    setBreakRunning(!breakRunning);
    setTimerRunning(!timerRunning);
    onBtnClickAudio();
  };
  const reset = () => {
    setTimerRunning(false);
    setBreakRunning(false);
    setTimeRemaining(timerSettings.work);
    setBreakTimeRemaining(timerSettings.rest);
    onBtnClickAudio();
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
        <audio ref={audioClickRef} src={btnClick} preload="auto" />

        <Button
          text={textStartBtn}
          onClick={timeRemaining !== initialtimeForTask ? pause : start}
          fontSize="2em"
        />

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
      <div className={s.break}>
        {timeRemaining !== initialtimeForTask && breakRunning && (
          <Break
            breakRunning={breakRunning}
            setBreakRunning={setBreakRunning}
            breakTimeRemaining={breakTimeRemaining}
            setBreakTimeRemaining={setBreakTimeRemaining}
          />
        )}
      </div>
    </div>
  );
}
