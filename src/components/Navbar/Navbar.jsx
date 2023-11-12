import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar({ togleModal }) {
  return (
    <ul className={s.list}>
      <li className={s.item} data-name="Home">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          <p className={s.text}>Home</p>
        </NavLink>
      </li>
      <li className={s.item} data-name="All tasks">
        <NavLink
          to="/tasks"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          <p className={s.text}>All tasks</p>
        </NavLink>
      </li>
      <li className={s.item} data-name="Add NEW task" onClick={togleModal}>
        <p className={s.text}> Add NEW task</p>
      </li>
      <li className={s.item} data-name="Settings">
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          <p className={s.text}>Settings</p>
        </NavLink>
      </li>
    </ul>
  );
}
