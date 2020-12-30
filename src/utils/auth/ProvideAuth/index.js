import React from 'react';
import authContext from '../authContext';
import useProvideAuth from '../useProvideAuth';

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
