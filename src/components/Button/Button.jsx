import s from "./button.module.css";

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      type="button"
      className={s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
