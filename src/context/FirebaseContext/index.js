import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import auth from './firebaseAuth';

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
        const unsubscribe = auth.onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr);
            } else {
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const signIn = async (email, password) => {
        const response = await auth.signInWithEmailAndPassword(email, password);
        return response.user;
    };

    const signUp = async (email, password, username) => {
        const response = await auth.createUserWithEmailAndPassword(email, password);
        await response.user.updateProfile({
            displayName: username,
        });
        return response.user;
    };

    const signOut = async () => {
        await auth.signOut();
        return false;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signUp,
                signOut,
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
