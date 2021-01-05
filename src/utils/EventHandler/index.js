import { EventRegister } from 'react-native-event-listeners';

const updateMessages = (messagesArray) => {
    EventRegister.emit('message', messagesArray);
};
const listenForMessages = (callback) => {
    return EventRegister.addEventListener('message', callback);
};
const updateAuth = (user) => {
    EventRegister.emit('authChange', user);
};
const listenForAuthChange = (callback) => {
    return EventRegister.addEventListener('authChange', callback);
};
const removeEventListener = (listener) => {
    EventRegister.removeEventListener(listener);
};

export { updateMessages, listenForMessages, updateAuth, listenForAuthChange, removeEventListener };
