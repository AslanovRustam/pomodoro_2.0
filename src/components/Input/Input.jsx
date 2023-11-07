import { useState } from "react";
import Button from "../Button/Button";
import s from "./input.module.css";
import { useData } from "../../helpers/DataContext";
import toast from "react-hot-toast";
export const Input = ({ name, type }) => {
  const { timerSettings, setTimerSettings } = useData();

  const [time, setTime] = useState(timerSettings[type] / 60);
  const handleSubmit = () => {
    setTimerSettings({
      ...timerSettings,
      [type]: Math.ceil(Number(time) * 60),
    });
    toast.success(`now your ${name} is ${time}min`, {
      icon: "🍅",
    });
  };

  return (
    <label className={s.label}>
      <p className={s.name}>
        {name} &nbsp;
        <span>{timerSettings[type] / 60}min</span>
      </p>
      <input
        type="number"
        className={s.input}
        name={type}
        placeholder={time}
        // value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Button
        text={`set ${name}`}
        width="100%"
        type="submit"
        onClick={handleSubmit}
      />
    </label>
  );
};
