import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [targetSection, setTargetSection] = useState(null);
  return (
    <ScrollContext.Provider value={{ targetSection, setTargetSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
