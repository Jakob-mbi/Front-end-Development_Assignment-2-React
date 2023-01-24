import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { storageRead } from "../shared/storage";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}