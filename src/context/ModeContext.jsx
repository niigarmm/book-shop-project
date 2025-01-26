import { createContext, useEffect, useState } from "react";
export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [changeMode, setChangeMode] = useState(localStorage.getItem("mode"));
  useEffect(() => {
    localStorage.setItem("mode", "light");
  }, []);

  return (
    <ModeContext.Provider value={[changeMode, setChangeMode]}>
      {children}
    </ModeContext.Provider>
  );
};
