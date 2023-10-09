import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal");

export default function Modal({ togleModal, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      onClick={togleModal}
    >
      <div className={s.container}>1</div>
    </div>,
    modalRoot
  );
}
