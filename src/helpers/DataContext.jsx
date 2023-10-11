import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);

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
    <DataContext.Provider value={{ hideSidebar, setHideSidebar }}>
      {children}
    </DataContext.Provider>
  );
};
