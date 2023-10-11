import { useData } from "../../helpers/DataContext";
import s from "./container.module.css";

export default function Container({ children }) {
  const { hideSidebar } = useData();
  return (
    <section className={`${s.container} ${hideSidebar && s.hide}`}>
      {children}
    </section>
  );
}
