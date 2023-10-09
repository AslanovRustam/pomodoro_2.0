import s from "./container.module.css";

export default function Container({ children }) {
  return <section className={s.container}>{children}</section>;
}
