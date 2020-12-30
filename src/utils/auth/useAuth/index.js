import { useContext } from 'react';
import authContext from '../authContext';

// Hook for child components to get the auth object
const useAuth = () => useContext(authContext);

export default useAuth;
