import s from "./button.module.css";

export default function Button({
  text,
  onClick,
  disabled,
  fontSize = "inherit",
  width = "auto",
  type = "button",
}) {
  return (
    <button
      type={type}
      style={{ fontSize: fontSize, width: width }}
      className={s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
