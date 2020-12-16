export default class Comment {
    constructor(message) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    getNickname() {
        return this.message.nickname;
    }

    getEmail() {
        return this.message.email;
    }

    getMessageText() {
        return this.message.msg;
    }
}
