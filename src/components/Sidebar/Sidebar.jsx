import { Suspense, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useData } from "../../helpers/DataContext";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import sound from "../../assets/music.mp3";
import { ReactComponent as PlayIco } from "../../assets/play.svg";
import s from "./sidebar.module.css";

export default function Sidebar() {
  const {
    hideSidebar,
    setHideSidebar,
    showModal,
    setShowmodal,
    setUpdatebleTask,
  } = useData();

  const [isPlaying, setIsPlaying] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  const togleSideBar = () => {
    setHideSidebar(!hideSidebar);
  };

  const audioRef = useRef(new Audio(sound));

  const toggleAudio = () => {
    const audio = audioRef.current;
    audio.loop = true;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={s.section}>
      <div className={`${s.sidebar} ${hideSidebar && s.hide}`}>
        <Navbar togleModal={togleModal} togleSideBar={togleSideBar} />
        <div
          className={`${s.hideBtn} ${hideSidebar && s.position}`}
          onClick={togleSideBar}
        >
          {hideSidebar ? "show" : "hide"}
        </div>
        <div className={s.player}>
          <PlayIco className={s.playIcon} onClick={toggleAudio} />
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {showModal && (
        <Modal
          showModal={showModal}
          togleModal={togleModal}
          setUpdatebleTask={setUpdatebleTask}
        />
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "3em",
          },
        }}
      />
      ;
    </section>
  );
}
