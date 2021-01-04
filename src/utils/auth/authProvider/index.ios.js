import AuthProvider from './AuthProvider';
import FirebaseAuthProviderInstance from './instances/RNFirebaseAuthProvider';

const AuthProviderInstance = new AuthProvider(new FirebaseAuthProviderInstance());

export default AuthProviderInstance;
