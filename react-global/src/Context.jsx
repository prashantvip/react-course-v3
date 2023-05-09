import { createContext, useState } from "react";

export const globalContext = createContext();

// custom hook

// export const useGlobalContext = () => useContext(globalContext)

export const AppContext = ({ children }) => {
    const [name, setName] = useState('peter')
    return <globalContext.Provider value={{ name, setName }}>{children}</globalContext.Provider>
}