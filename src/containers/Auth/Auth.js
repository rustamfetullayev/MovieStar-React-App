import React, { useState, useEffect } from 'react';
import base from '../Base/Base';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        base.auth().onAuthStateChanged(setCurrentUser);
    }, [])

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}