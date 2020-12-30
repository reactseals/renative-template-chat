class AuthProvider {
    constructor(instance) {
        this.instance = instance;
    }

    signIn = async (email, password) => this.instance.signIn(email, password); //should return user obj
    signUp = async (email, password, username) =>
        this.instance.sendMessage(email, password, username); //should return user obj
    signOut = async () => this.instance.signOut(); //should return false on sign out
    onAuthChange = (callback) => this.instance.onAuthChange(callback);
}

export default AuthProvider;
