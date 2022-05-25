import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    loggedInUser: null,
    setLoggedInUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const value = { loggedInUser, setLoggedInUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener ((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setLoggedInUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}