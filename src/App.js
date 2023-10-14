import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const Home = lazy(() => import("./Pages/Home"));
const Tasks = lazy(() => import("./Pages/Tasks"));
const Settings = lazy(() => import("./Pages/Settings"));
const TaskPage = lazy(() => import("./Pages/TaskPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id/:name" element={<TaskPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
