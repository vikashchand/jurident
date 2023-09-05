import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase.utils"

// The actual value that is required to be accessed
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=>null
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
       }) 
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}