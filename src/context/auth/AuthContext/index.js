import { createContext, useContext } from 'react';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

export default AuthContext;
export { useAuth };
