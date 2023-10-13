import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import Form from "../Form/Form";

const modalRoot = document.querySelector("#modal");

export default function Modal({ togleModal, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      togleModal();
    }
  };

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={s.container}>
        <Form onClose={togleModal} />
      </div>
    </div>,
    modalRoot
  );
}
