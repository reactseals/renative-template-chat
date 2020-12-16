class Provider {
    constructor(instance) {
        this.instance = instance;
    }

    getMessages = async () => this.instance.getMessages();
    sendMessage = (nickname, email, message) => this.instance.sendMessage(nickname, email, message);
    on = (event, callback) => this.instance.on(event, callback);
}

export default Provider;
