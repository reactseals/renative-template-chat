import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { Icon, Api } from 'renative';
import styles from '../themes/greyTheme/chat.styles';
import firebase from '../../projectConfig/firebase';
import colors from '../themes/greyTheme/colors';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      email: '',
      msg: '',
      messages: {},
      isUserLaggedIn: null,
    };

    // Chat room ref
    this.chatRoom = firebase.database().ref().child('chatrooms').child('global');

    // Login info ref
    this.loginInfo = firebase.database().ref().child('nicknames');


    // Handle new messages
    this.handleNewMessages = (snap) => {
      // Update state if not null
      if (snap.val()) this.setState({ messages: snap.val() });
    };
  }

  componentDidMount() {
    this.chatRoom.on('value', this.handleNewMessages);
  }

  componentWillUnmount() {
    this.chatRoom.off('value', this.handleNewMessages);
  }

  // Add nickname to state
  handleNickname = (text) => {
    this.setState({ nickname: text });
  }

  // Add email to state
  handleEmail = (text) => {
    this.setState({ email: text });
  }

  // Login
  handleLogin = (nickname, email) => {
    this.loginInfo.push({ nickname, email });
    this.setState({ isUserLaggedIn: true });
  };

  // Add message to state
  handleMessage = (text) => {
    this.setState({ msg: text });
  }

  // Push messsage on 'Enter' press
  handleKeyPress = (e) => {
    const { msg, nickname } = this.state;
    if (msg.trim() !== '' && e.key === 'Enter') {
      // Send the message from chat input field
      this.chatRoom.push({
        nickname,
        msg,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
    }
  };

  // Push messsage on press
  handleButtonPress = () => {
    const { msg, nickname } = this.state;
    if (msg.trim() !== '') {
    // Send the message from chat input field
      this.chatRoom.push({
        nickname,
        msg,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
    }
  }

  activeStyle = (element) => {
    element.setNativeProps({
      style: {
        borderColor: colors.activeColorPrimary,
        backgroundColor: colors.activeColorSecondary,
        // shadow
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, // IOS
      },
    });
  }

  inactiveStyle = (element) => {
    element.setNativeProps({
      style: {
        borderColor: colors.activeColorSecondary,
        backgroundColor: colors.backgroundColor,
        // shadow
        shadowOpacity: 0,
      },
    });
  }


  render() {
    const {
      nickname, email, msg, messages, isUserLaggedIn,
    } = this.state;
    if (!isUserLaggedIn) {
      return (
        <View style={styles.loginContainer}>

          <TextInput
            ref={component => this.nicknameInput = component}
            onFocus={() => this.activeStyle(this.nicknameInput)}
            onBlur={() => this.inactiveStyle(this.nicknameInput)}
            style={styles.loginInput}
            underlineColorAndroid="transparent"
            placeholder="Nickname"
            placeholderTextColor={colors.activeColorPrimary}
            selectionColor={colors.activeColorPrimary}
            autoCapitalize="none"
            onChangeText={this.handleNickname}
          />

          <TextInput
            ref={component => this.emailInput = component}
            onFocus={() => this.activeStyle(this.emailInput)}
            onBlur={() => this.inactiveStyle(this.emailInput)}
            style={styles.loginInput}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor={colors.activeColorPrimary}
            selectionColor={colors.activeColorPrimary}
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.handleLogin(nickname, email)}
          >
            <Text style={styles.userText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.chatContainer}>
        <ScrollView
          ref={(view) => { this.scrollView = view; }}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {Object.keys(messages).map(message => (
            <View key={message}>
              {nickname === messages[message].nickname ? (
                <View style={styles.userMessage}>
                  <Text style={styles.userNicknameText}>{messages[message].nickname}</Text>
                  <Text style={styles.userText}>{messages[message].msg}</Text>
                </View>
              ) : (
                <View style={styles.message}>
                  <Text style={styles.nicknameText}>{messages[message].nickname}</Text>
                  <Text style={styles.text}>{messages[message].msg}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            ref={component => this.messageInput = component}
            onFocus={() => this.activeStyle(this.messageInput)}
            onBlur={() => this.inactiveStyle(this.messageInput)}
            value={msg}
            style={styles.chatInput}
            selectionColor={colors.activeColorPrimary}
            placeholder="Type a message ..."
            placeholderTextColor={colors.activeColorPrimary}
            outline="none"
            onChangeText={this.handleMessage}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />
          <Icon
            iconFont="ionicons"
            iconName="md-send"
            iconColor={colors.activeColorPrimary}
              // style={styles.icon}
            style={{ width: 40, height: 40, alignSelf: 'center' }}
            onPress={() => { this.handleButtonPress(); }}
          />
        </View>
      </View>


    );
  }
}
