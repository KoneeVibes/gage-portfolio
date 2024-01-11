import { createContext, useState } from "react";
import { ContextType, ContextProviderProps } from "../types/context.type";

export const Context = createContext({} as ContextType);

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <Context.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </Context.Provider>
    )
}