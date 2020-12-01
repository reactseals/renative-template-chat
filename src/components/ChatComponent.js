import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    SafeAreaView,
    Keyboard,
} from 'react-native';
import { Icon, isPlatformWeb, isPlatformAndroid } from 'renative';
import styles from '../sharedStyles/chatStyles';
import Activity from './ActivityIndicator';
import BackButtonMac from './BackButtonMac';
import colors from '../../platformAssets/runtime/colors.json';
import CustomTextInput from './CustomTextInput';
import ChatMessage from './ChatMessage';

const ChatComponent = ({ nickname, email, sendMessage, messages, ...props }) => {
    const [textInputVal, setTextInputVal] = useState('');
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
        // needs refactor/ later
        // Scroll handle on log in for Web
        if (isPlatformWeb) {
            scrollViewRef.current?.scrollToEnd({ animated: false });
        }
    }, [messages]);

    // Push messsage on 'Enter' press
    const handleKeyPress = (e) => {
        if (textInputVal.trim() !== '' && e.key === 'Enter') {
            // Send the message from chat input field
            sendMessage(nickname, email, textInputVal);
            // Clear chat message input field
            setTextInputVal('');
        }
    };
    // Push messsage on press
    const handleButtonPress = () => {
        if (textInputVal.trim() !== '') {
            // Send the message from chat input field
            sendMessage(nickname, email, textInputVal);
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
    // in the future export to the json styling configs
    const textInputActiveStyle = {
        backgroundColor: colors.activeColorSecondary,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        outline: 'none',
    };

    // in the future export to the json styling configs
    const textInputInactiveStyle = {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: isPlatformWeb ? 'none' : 0,
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

                        <View style={styles.inputContainer}>
                            <CustomTextInput
                                blurredStyle={textInputInactiveStyle}
                                focusedStyle={textInputActiveStyle}
                                value={textInputVal}
                                autofocus={isPlatformWeb}
                                style={styles.chatInput}
                                selectionColor={colors.activeColorPrimary}
                                placeholder="Type a message ..."
                                placeholderTextColor={colors.activeColorPrimary}
                                outline="none"
                                onChangeText={(value) => {
                                    setTextInputVal(value);
                                    console.log(textInputVal);
                                }}
                                onKeyPress={handleKeyPress}
                                maxLength={6018}
                            />
                            <Icon
                                iconFont="ionicons"
                                iconName="md-send"
                                iconColor={colors.activeColorPrimary}
                                style={{ width: 35, height: 35, alignSelf: 'center' }}
                                onPress={() => handleButtonPress()}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            )}
        </SafeAreaView>
    );
};

export default ChatComponent;
