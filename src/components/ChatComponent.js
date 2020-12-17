import React, { useRef, useEffect } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    SafeAreaView,
    Keyboard,
    StyleSheet,
} from 'react-native';
import { isPlatformWeb, isPlatformAndroid, isPlatformMacos } from 'renative';
import Activity from './ActivityIndicator';
import BackButtonMac from './BackButtonMac';
import ChatInput from './ChatInput';
import colors from '../../platformAssets/runtime/colors.json';
import ChatListRecycler from './ChatListRecycler';

const ChatComponent = ({ nickname, email, sendMessage, messages }) => {
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
            scrollViewRef.current?.scrollToEnd({ animated: false });
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
            scrollViewRef.current?.scrollToEnd({ animated: false });
        } else {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }
    };
    // Keyboard listener
    const keyBoardListener = () => {
        if (nickname) {
            scrollViewRef.current?.scrollToEnd({ animated: false });
        }
    };
    return (
        <SafeAreaView style={styles.chatContainer}>
            {!messages ? (
                <Activity />
            ) : (
                <KeyboardAvoidingView
                    style={{ flex: 1, height: height - 40 }}
                    keyboardVerticalOffset={height / 10}
                    behavior={isPlatformAndroid ? null : 'padding'}
                >
                    <BackButtonMac />
                    <View style={styles.chatContainer}>
                        {/* Could be changed to FlatList for performance */}
                        {/* <ScrollView
                            ref={scrollViewRef}
                            style={styles.chatMessagesContainer}
                            onContentSizeChange={() => handleMobileScroll()}
                        >
                            {Object.keys(messages).map((messageKey) => (
                                <View key={messageKey}>
                                    <ChatMessage
                                        message={messages[messageKey]}
                                        belongsToUser={nickname === messages[messageKey].nickname}
                                    />
                                </View>
                            ))}
                        </ScrollView> */}
                        {messages.length > 0 ? (
                            <ChatListRecycler messageArray={messages} nickname={nickname} />
                        ) : null}

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

let height;
if (isPlatformWeb) {
    height = '100vh - 40';
} else if (isPlatformMacos) {
    height = '100vh';
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        marginBottom: isPlatformWeb ? 30 : 0,
        maxHeight: height,
        minHeight: height,
    },
    chatMessagesContainer: {
        marginTop: isPlatformMacos ? 40 : 0,
    },
});
export default ChatComponent;
