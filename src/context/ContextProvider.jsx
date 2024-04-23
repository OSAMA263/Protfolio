import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
  const [easterEgg, setEasterEgg] = useState(false);
  return (
    <Context.Provider value={{ easterEgg, setEasterEgg }}>
      {children}
    </Context.Provider>
  );
};
