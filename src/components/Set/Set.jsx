import { Input } from "../Input/Input";
import s from "./set.module.css";

export default function Set() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>🤖 Settings 🛠</h2>
      <div className={s.inputsContainer}>
        <Input name="Work time" type="work" />
        <Input name="Break time" type="rest" />
      </div>
    </div>
  );
}
