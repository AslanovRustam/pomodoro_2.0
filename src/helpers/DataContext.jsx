import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const initTask = [
  {
    id: 1,
    done: false,
    name: "initial task",
    description: "start your journey",
  },
  {
    id: 2,
    done: false,
    name: "Second task",
    description: "end your journey",
  },
  {
    id: 3,
    done: false,
    name: "3 task",
    description: "end your journey",
  },
];

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [showModal, setShowmodal] = useState(false);
  const [taskArr, setTaskArr] = useLocalStorage("all_tasks", initTask);
  const [updateableTask, setUpdatebleTask] = useState({
    id: "",
    done: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem("hideSidebar");
    if (storedValue !== null) {
      setHideSidebar(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hideSidebar", JSON.stringify(hideSidebar));
  }, [hideSidebar]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
