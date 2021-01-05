import React, { useState, useEffect } from 'react';
import AuthContext from '../AuthContext';
import authProvider from '../authProvider';

export default function ProvideAuth({ children }) {
    const [user, setUser] = useState(null);

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
