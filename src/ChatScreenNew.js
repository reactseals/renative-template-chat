import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    SafeAreaView,
    Keyboard,
} from 'react-native';
import { Icon, isPlatformWeb, isPlatformAndroid, useNavigate } from 'renative';
import styles from '../platformAssets/runtime/chat.styles';
import firebase from '../projectConfig/firebase';
import Activity from './ActivityIndicator';
import BackButtonMac from './BackButtonMac';
import colors from '../platformAssets/runtime/colors';
import CustomTextInput from './CustomTextInput';

const ChatScreenNew = ({ nickname, email, initialUserLogin, ...props }) => {
    // should prolly rename msg to currentMsg
    const [chatState, setChatState] = useState({ msg: '', messages: {} });
    const scrollViewRef = useRef(null);
    const chatRoom = firebase.database().ref().child('chatrooms').child('global');
    const navigate = useNavigate(props);
    const { height } = Dimensions.get('window');
    let keyboardDidShowListener;
    useEffect(() => {
        chatRoom.on('value', getNewMessages);
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyBoardListener);

        return () => {
            keyboardDidShowListener.remove();
            chatRoom.off('value', getNewMessages);
        };
    });

    // Add message to state
    const handleMessage = (text) => {
        setChatState((prevState) => ({ ...prevState, msg: text }));
    };
    // Push messsage on 'Enter' press
    const handleKeyPress = (e) => {
        const { msg } = chatState;
        if (msg.trim() !== '' && e.key === 'Enter') {
            // Send the message from chat input field
            chatRoom.push({
                nickname,
                email,
                msg,
            });
            // Clear chat message input field
            setChatState((prevState) => ({ ...prevState, msg: '' }));
        }
    };
    // Get new messages
    const getNewMessages = (snap) => {
        // Update state if not null
        if (snap.val()) {
            setChatState((prevState) => ({ ...prevState, messages: snap.val() }));
        }
    };
    // Push messsage on press
    const handleButtonPress = () => {
        const { msg } = chatState;
        if (msg.trim() !== '') {
            // Send the message from chat input field
            chatRoom.push({
                nickname,
                email,
                msg,
            });
            // Clear chat message input field
            setChatState((prevState) => ({ ...prevState, msg: '' }));
        }
    };
    // Scroll handle for mobile
    const handleMobileScroll = () => {
        if (!isPlatformWeb && initialUserLogin) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        } else if (!isPlatformWeb) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };
    // Keyboard listener
    const keyBoardListener = () => {
        /*         const { isUserLaggedIn } = this.state;
        if (isUserLaggedIn) {
            this.scrollView.scrollToEnd({ animated: false });
        } */
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
            {!chatState.messages ? (
                <Activity />
            ) : (
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={height / 10}
                    behavior={isPlatformAndroid ? null : 'padding'}
                >
                    <BackButtonMac navigation={navigate} />
                    <View style={styles.chatContainer}>
                        <ScrollView
                            ref={scrollViewRef}
                            style={styles.chatMessagesContainer}
                            onContentSizeChange={() => handleMobileScroll()}
                        >
                            {Object.keys(chatState.messages).map((message) => (
                                <View key={message}>
                                    {nickname === chatState.messages[message].nickname ? (
                                        <View style={styles.userMessageContainer}>
                                            <Text style={styles.userNicknameText}>
                                                {chatState.messages[message].nickname}
                                            </Text>
                                            <View style={styles.userMessage}>
                                                <Text style={styles.userText}>
                                                    {chatState.messages[message].msg}
                                                </Text>
                                            </View>
                                        </View>
                                    ) : (
                                        <View style={styles.messageContainer}>
                                            <Text style={styles.nicknameText}>
                                                {chatState.messages[message].nickname}
                                            </Text>
                                            <View style={styles.message}>
                                                <Text style={styles.text}>
                                                    {chatState.messages[message].msg}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            ))}
                        </ScrollView>

                        <View style={styles.inputContainer}>
                            <CustomTextInput
                                blurredStyle={textInputInactiveStyle}
                                focusedStyle={textInputActiveStyle}
                                value={chatState.msg}
                                style={styles.chatInput}
                                selectionColor={colors.activeColorPrimary}
                                placeholder="Type a message ..."
                                placeholderTextColor={colors.activeColorPrimary}
                                outline="none"
                                onChangeText={handleMessage}
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

export default ChatScreenNew;
