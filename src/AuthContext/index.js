import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import authProvider from './authProvider';

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
        authProvider.onAuthChange((usr) => {
            if (usr) {
                setUser(usr);
            } else {
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => authProvider.offAuthChange();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn: authProvider.signIn,
                signUp: authProvider.signUp,
                signOut: authProvider.signOut,
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
