import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          Home
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/tasks"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          Tasks
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.active : s.inActive)}
        >
          Settings
        </NavLink>
      </li>
    </ul>
  );
}
