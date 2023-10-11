import { useState } from "react";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import Button from "../Button/Button";
import s from "./task.module.css";

export default function Task({
  item: { done, name, description, id },
  onTaskChange,
}) {
  const handleChange = () => {
    onTaskChange(id, !done);
  };
  return (
    <li className={s.item}>
      <div className={s.textContainer}>
        <p className={s.name}>{name}</p>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.buttons}>
        <button type="button" className={s.button}>
          delete
        </button>
        <button type="button" className={s.button}>
          edit
        </button>
        <input
          type="checkbox"
          className={`${s.input} ${done && s.checked}`}
          checked={done}
          onChange={handleChange}
        />
      </div>
    </li>
  );
}
