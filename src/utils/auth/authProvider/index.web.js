import AuthProvider from './AuthProvider';
import FirebaseAuthProviderInstance from './instances/FirebaseAuthProvider';

const AuthProviderInstance = new AuthProvider(new FirebaseAuthProviderInstance());

export default AuthProviderInstance;
