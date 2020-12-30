import { useState, useEffect } from 'react';
import authProvider from '../authProvider';

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        authProvider.signOut(); //testing reasons remove afterwards
        authProvider.onAuthChange((usr) => {
            if (usr) {
                console.log(usr.email);
                setUser(usr);
            } else {
                console.log(usr);
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        // return () => unsubscribe();
    }, []);

    // Return the user object and auth methods
    return {
        user,
        signIn: authProvider.signIn,
        signUp: authProvider.signUp,
        signOut: authProvider.signOut,
    };
};
export default useProvideAuth;
