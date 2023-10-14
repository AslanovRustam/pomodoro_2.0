import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import s from "./task.module.css";

export default function Task({
  item: { done, name, description, id },
  onTaskDone,
  onTaskDelete,
  onTaskUpdate,
}) {
  const handleChange = () => {
    onTaskDone(id, !done);
  };
  return (
    <li className={s.item}>
      <div className={s.textContainer}>
        <p className={`${s.name} ${done && s.crosed}`}>{name}</p>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.container}>
        <NavLink to={`/tasks/${id}/${name}`} className={s.navlink}>
          <Button text="go" />
        </NavLink>
        <div className={s.buttons}>
          <Button text="delete" onClick={() => onTaskDelete(id)} width="5em" />
          <Button
            text="edit"
            onClick={() => onTaskUpdate({ done, name, description, id })}
            width="5em"
          />
          <input
            type="checkbox"
            className={`${s.input} ${done && s.checked}`}
            checked={done}
            onChange={handleChange}
          />
        </div>
      </div>
    </li>
  );
}
