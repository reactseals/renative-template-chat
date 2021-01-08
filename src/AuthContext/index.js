import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import authFirebase from '../utils/authFirebase';

const AuthContext = createContext();

export default function ProvideAuth({ children }) {
    const [user, _setUser] = useState(null);

    const setUser = (usr) => {
        userRef.current = usr;
        _setUser(usr);
    };

    const userRef = useRef(user);
    // Subscribe to user on mount
    useEffect(() => {
        authFirebase.onAuthChange((usr) => {
            if (usr) {
                setUser(usr);
            } else {
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => authFirebase.offAuthChange();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn: authFirebase.signIn,
                signUp: authFirebase.signUp,
                signOut: authFirebase.signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(`useAuth must be used within a ProvideAuth`);
    }
    return context;
};

export { useAuth };
