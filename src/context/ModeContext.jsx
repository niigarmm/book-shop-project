import { createContext, useEffect, useState } from "react";
export const ModeConext = createContext();

export const ModeProvider = ({ children }) => {
  const [changeMode, setChangeMode] = useState(localStorage.getItem("mode"));
  useEffect(() => {
    localStorage.setItem("mode", "light");
  }, []);

  return (
    <ModeConext.Provider value={[changeMode, setChangeMode]}>
      {children}
    </ModeConext.Provider>
  );
};
