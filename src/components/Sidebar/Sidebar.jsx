import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useData } from "../../helpers/DataContext";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import s from "./sidebar.module.css";

export default function Sidebar() {
  const { hideSidebar, setHideSidebar, showModal, setShowmodal } = useData();

  const togleModal = () => {
    setShowmodal(!showModal);
  };
  return (
    <section className={s.section}>
      <div className={`${s.sidebar} ${hideSidebar && s.hide}`}>
        <Navbar togleModal={togleModal} />
        <div
          className={`${s.hideBtn} ${hideSidebar && s.position}`}
          onClick={() => setHideSidebar(!hideSidebar)}
        >
          {hideSidebar ? "show" : "hide"}
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {showModal && <Modal showModal={showModal} togleModal={togleModal} />}
    </section>
  );
}
