import React, { useRef, useEffect } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    SafeAreaView,
    Keyboard,
} from 'react-native';
import { isPlatformWeb, isPlatformAndroid } from 'renative';
import styles from '../sharedStyles/chatStyles';
import Activity from './ActivityIndicator';
import BackButtonMac from './BackButtonMac';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatComponent = ({ nickname, email, sendMessage, messages, ...props }) => {
    const scrollViewRef = useRef(null);
    const { height } = Dimensions.get('window');
    let keyboardDidShowListener;
    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyBoardListener);
        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        // Scroll handle on new message arrival for Web
        if (isPlatformWeb) {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }
    }, [messages]);

    // Push messsage on 'Enter' press
    const handleKeyPress = (e, value, setTextInputVal) => {
        if (value.trim() !== '' && e.key === 'Enter') {
            // Send the message from chat input field
            sendMessage(nickname, email, value);
            // Clear chat message input field
            setTextInputVal('');
        }
    };
    // Push messsage on press
    const handleButtonPress = (value, setTextInputVal) => {
        if (value.trim() !== '') {
            // Send the message from chat input field
            sendMessage(nickname, email, value);
            // Clear chat message input field
            setTextInputVal('');
        }
    };
    // Scroll handle for mobile
    const handleMobileScroll = () => {
        if (!isPlatformWeb) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        } else {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };
    // Keyboard listener
    const keyBoardListener = () => {
        if (nickname) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        }
    };
    return (
        <SafeAreaView style={styles.chatContainer}>
            {!messages ? (
                <Activity />
            ) : (
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={height / 10}
                    behavior={isPlatformAndroid ? null : 'padding'}
                >
                    <BackButtonMac />
                    <View style={styles.chatContainer}>
                        <ScrollView
                            ref={scrollViewRef}
                            style={styles.chatMessagesContainer}
                            onContentSizeChange={() => handleMobileScroll()}
                        >
                            {Object.keys(messages).map((message) => (
                                <View key={message}>
                                    <ChatMessage
                                        message={messages[message]}
                                        belongsToUser={nickname === messages[message].nickname}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                        <ChatInput
                            handleButtonPress={handleButtonPress}
                            handleKeyPress={handleKeyPress}
                        />
                    </View>
                </KeyboardAvoidingView>
            )}
        </SafeAreaView>
    );
};

export default ChatComponent;
