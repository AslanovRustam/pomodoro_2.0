import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Timer from "../components/Timer/Timer";

export default function Home() {
  const [showModal, setShowmodal] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };
  return (
    <>
      <button type="button" onClick={togleModal}>
        Add NEW Task
      </button>
      <Timer />
      <Modal showModal={showModal} togleModal={togleModal} />
    </>
  );
}
