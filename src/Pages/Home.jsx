import Container from "../components/Container/Container";
import Timer from "../components/Timer/Timer";
import s from "./pages.module.css";

export default function Home() {
  return (
    <Container>
      <div className={s.container}>
        <Timer />
      </div>
    </Container>
  );
}
