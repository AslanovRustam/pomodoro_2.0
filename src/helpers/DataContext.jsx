import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const initTask = [
  {
    id: "1",
    done: false,
    name: "initial task",
    description: "start your journey",
  },
  {
    id: "2",
    done: false,
    name: "Second task",
    description: "end your journey",
  },
];

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(
    JSON.parse(window.localStorage.getItem("hideSidebar")) ?? false
  );
  const [showModal, setShowmodal] = useState(false);
  const [taskArr, setTaskArr] = useLocalStorage("all_tasks", initTask);
  const [timerSettings, setTimerSettings] = useState(
    JSON.parse(window.localStorage.getItem("timer")) ?? {
      work: 600,
      rest: 120,
    }
  );
  const [updateableTask, setUpdatebleTask] = useState({
    id: "",
    done: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    window.localStorage.setItem("hideSidebar", JSON.stringify(hideSidebar));
  }, [hideSidebar]);
  useEffect(() => {
    window.localStorage.setItem("timer", JSON.stringify(timerSettings));
  }, [timerSettings]);

  return (
    <DataContext.Provider
      value={{
        hideSidebar,
        setHideSidebar,
        taskArr,
        setTaskArr,
        showModal,
        setShowmodal,
        updateableTask,
        setUpdatebleTask,
        timerSettings,
        setTimerSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
