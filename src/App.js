import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./Pages/Home"));
const Tasks = lazy(() => import("./Pages/Tasks"));
const Settings = lazy(() => import("./Pages/Settings"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
