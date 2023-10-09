import { Suspense } from "react";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import s from "./header.module.css";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <Container>
          <Navbar />
        </Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </header>
    </>
  );
}
