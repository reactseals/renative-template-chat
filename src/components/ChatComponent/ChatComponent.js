import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { isPlatformWeb, isPlatformAndroid, isPlatformMacos } from 'renative';
import Activity from '../ActivityIndicator';
import BackButtonMac from '../BackButton';
import ChatInput from './ChatInput';
import { theme as colors } from '../../../platformAssets/renative.runtime.json';
import ChatListRecycler from './ChatListRecycler';

const ChatComponent = ({ nickname, email, sendMessage, messages }) => {
    const { height } = Dimensions.get('window');
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
