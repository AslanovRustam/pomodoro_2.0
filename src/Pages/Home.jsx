import { useData } from "../helpers/DataContext";
import Container from "../components/Container/Container";
import s from "./pages.module.css";
import Timer from "../components/Timer/Timer";

export default function Home() {
  const { hideSidebar } = useData();
  return (
    <Container>
      <div className={`${s.container} ${hideSidebar && s.hide}`}>
        <Timer />
      </div>
    </Container>
  );
}
