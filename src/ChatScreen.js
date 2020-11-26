import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    Keyboard,
    SafeAreaView,
} from 'react-native';
import { Icon, isPlatformIos, isPlatformWeb, isPlatformAndroid } from 'renative';
import styles from '../platformAssets/runtime/chat.styles';
import firebase from '../projectConfig/firebase';
import Activity from './ActivityIndicator';
import BackButtonMac from './BackButtonMac';
import colors from '../platformAssets/runtime/colors';
import { useNavigate } from 'renative';

console.disableYellowBox = true;

const { height } = Dimensions.get('window');

const chatRoom = firebase.database().ref().child('chatrooms').child('global');

// Rewrite from scratch
// Separate Firebase, input and chat messages logic
export default class Chat extends Component {
    state = {
        isUserLaggedIn: false,
        nickname: '',
        email: '',
        msg: '',
        messages: {},
        initialUserLogin: false,
    };

    componentDidMount() {
        chatRoom.on('value', this.getNewMessages);
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this.keyBoardListener
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const { isUserLaggedIn, messages, initialUserLogin } = this.state;
        if (isUserLaggedIn && isPlatformWeb) {
            this.messageInput.focus();
        }

        // Scroll handle on new message arrival for Web
        if (isPlatformWeb && messages !== prevState.messages && isUserLaggedIn) {
            this.scrollView.scrollToEnd({ animated: true });
        }

        // Scroll handle on log in for Web
        if (isPlatformWeb && initialUserLogin) {
            this.scrollView.scrollToEnd({ animated: false });
        }
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        chatRoom.off('value', this.getNewMessages);
    }

    // Get new messages
    getNewMessages = (snap) => {
        // Update state if not null
        if (snap.val()) {
            this.setState({ messages: snap.val() });
        }
    };

    // Add nickname to state
    handleNickname = (text) => {
        this.setState({ nickname: text });
    };

    // Add email to state
    handleEmail = (text) => {
        this.setState({ email: text });
    };

    // Add message to state
    handleMessage = (text) => {
        this.setState({ msg: text });
    };

    // Login
    handleLogin = () => {
        const { nickname, email } = this.state;
        if (nickname && email) {
            this.setState({
                isUserLaggedIn: true,
                initialUserLogin: true,
            });
        }
        setTimeout(() => {
            this.setState({ initialUserLogin: false });
        }, 1000);
    };

    // Push messsage on 'Enter' press
    handleKeyPress = (e) => {
        const { msg, nickname, email } = this.state;
        if (msg.trim() !== '' && e.key === 'Enter') {
            // Send the message from chat input field
            chatRoom.push({
                nickname,
                email,
                msg,
            });
            // Clear chat message input field
            this.setState({ msg: '' });
        }
    };

    // Push messsage on press
    handleButtonPress = () => {
        const { msg, nickname, email } = this.state;
        if (msg.trim() !== '') {
            // Send the message from chat input field
            chatRoom.push({
                nickname,
                email,
                msg,
            });
            // Clear chat message input field
            this.setState({ msg: '' });
        }
    };

    // Set text input active style
    textInputActiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeColorSecondary,
                shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 1,
                shadowRadius: 1,
                outline: 'none',
            },
        });
    };

    // Set text input inactive style
    textInputInactiveStyle = (element) => {
        const shadowOpacity = isPlatformWeb ? 'none' : 0;
        element.setNativeProps({
            style: {
                backgroundColor: colors.backgroundColor,
                shadowOpacity,
            },
        });
    };

    // Set button active style
    buttonActiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeColorTertiary,
                outline: 'none',
            },
        });
    };

    // Set button inactive style
    buttonInactiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeBackgroundColor,
            },
        });
    };

    // Keyboard listener
    keyBoardListener = () => {
        const { isUserLaggedIn } = this.state;
        if (isUserLaggedIn) {
            this.scrollView.scrollToEnd({ animated: false });
        }
    };

    // Scroll handle for mobile
    handleMobileScroll = () => {
        const { initialUserLogin } = this.state;
        if (!isPlatformWeb && initialUserLogin) {
            this.scrollView.scrollToEnd({ animated: false });
        } else if (!isPlatformWeb) {
            this.scrollView.scrollToEnd({ animated: true });
        }
    };

    render() {
        const { msg, messages, isUserLaggedIn, nickname } = this.state;
        const navigate = useNavigate(this.props);
        if (!isUserLaggedIn) {
            return (
                <KeyboardAvoidingView
                    behavior={isPlatformAndroid ? null : 'padding'}
                    style={styles.loginContainer}
                    keyboardVerticalOffset={this.props.headerHeight}
                >
                    <BackButtonMac navigation={navigate} />
                    <TextInput
                        ref={(component) => (this.nicknameInput = component)}
                        onFocus={() => this.textInputActiveStyle(this.nicknameInput)}
                        onBlur={() => this.textInputInactiveStyle(this.nicknameInput)}
                        style={styles.loginInput}
                        underlineColorAndroid="transparent"
                        placeholder="Nickname"
                        placeholderTextColor={colors.activeColorPrimary}
                        selectionColor={colors.activeColorPrimary}
                        autoCapitalize="none"
                        onChangeText={this.handleNickname}
                    />

                    <TextInput
                        ref={(component) => (this.emailInput = component)}
                        onFocus={() => this.textInputActiveStyle(this.emailInput)}
                        onBlur={() => this.textInputInactiveStyle(this.emailInput)}
                        style={styles.loginInput}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor={colors.activeColorPrimary}
                        selectionColor={colors.activeColorPrimary}
                        autoCapitalize="none"
                        onChangeText={this.handleEmail}
                    />

                    <TouchableOpacity
                        ref={(component) => (this.button = component)}
                        onFocus={() => this.buttonActiveStyle(this.button)}
                        onBlur={() => this.buttonInactiveStyle(this.button)}
                        style={styles.loginButton}
                        onPress={() => this.handleLogin()}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            );
        }

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
                        <BackButtonMac navigation={navigate} />
                        <View style={styles.chatContainer}>
                            <ScrollView
                                ref={(view) => {
                                    this.scrollView = view;
                                }}
                                style={styles.chatMessagesContainer}
                                onContentSizeChange={() => this.handleMobileScroll()}
                            >
                                {Object.keys(messages).map((message) => (
                                    <View key={message}>
                                        {nickname === messages[message].nickname ? (
                                            <View style={styles.userMessageContainer}>
                                                <Text style={styles.userNicknameText}>
                                                    {messages[message].nickname}
                                                </Text>
                                                <View style={styles.userMessage}>
                                                    <Text style={styles.userText}>
                                                        {messages[message].msg}
                                                    </Text>
                                                </View>
                                            </View>
                                        ) : (
                                            <View style={styles.messageContainer}>
                                                <Text style={styles.nicknameText}>
                                                    {messages[message].nickname}
                                                </Text>
                                                <View style={styles.message}>
                                                    <Text style={styles.text}>
                                                        {messages[message].msg}
                                                    </Text>
                                                </View>
                                            </View>
                                        )}
                                    </View>
                                ))}
                            </ScrollView>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    ref={(component) => (this.messageInput = component)}
                                    onFocus={() => this.textInputActiveStyle(this.messageInput)}
                                    onBlur={() => this.textInputInactiveStyle(this.messageInput)}
                                    value={msg}
                                    style={styles.chatInput}
                                    selectionColor={colors.activeColorPrimary}
                                    placeholder="Type a message ..."
                                    placeholderTextColor={colors.activeColorPrimary}
                                    outline="none"
                                    onChangeText={this.handleMessage}
                                    onKeyPress={this.handleKeyPress}
                                    maxLength={6018}
                                />
                                <Icon
                                    iconFont="ionicons"
                                    iconName="md-send"
                                    iconColor={colors.activeColorPrimary}
                                    style={{ width: 35, height: 35, alignSelf: 'center' }}
                                    onPress={() => this.handleButtonPress()}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                )}
            </SafeAreaView>
        );
    }
}
