import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity,
} from 'react-native';
import { Icon } from 'renative';
import { IS_WEB } from 'rnv-platform-info';
import styles from '../../platformAssets/runtime/chat.styles';
import firebase from '../../projectConfig/firebase';
import Activity from '../components/activityIndicator';
import colors from '../../platformAssets/runtime/colors';

console.disableYellowBox = true;

const chatRoom = firebase.database().ref().child('chatrooms').child('global');

export default class Chat extends Component {
  state = {
    isUserLaggedIn: null,
    nickname: '',
    email: '',
    msg: '',
    messages: {},
  };

  componentDidMount() {
    chatRoom.on('value', this.getNewMessages);
  }

  componentWillUnmount() {
    chatRoom.off('value', this.getNewMessages);
  }

  // Get new messages
  getNewMessages = (snap) => {
    // Update state if not null
    if (snap.val()) this.setState({ messages: snap.val() });
  };

  // Add nickname to state
  handleNickname = (text) => {
    this.setState({ nickname: text });
  }

  // Add email to state
  handleEmail = (text) => {
    this.setState({ email: text });
  }

  // Add message to state
  handleMessage = (text) => {
    this.setState({ msg: text });
  }

  // Login
  handleLogin = () => {
    this.setState({ isUserLaggedIn: true });
  };

  // Push messsage on 'Enter' press
  handleKeyPress = (e) => {
    const {
      msg, nickname, email,
    } = this.state;
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
    const {
      msg, nickname, email,
    } = this.state;
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
  }

  // Set active style
  activeStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.activeColorSecondary,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    });
  }

  // Set inactive style
  inactiveStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: 0,
      },
    });
  }


  render() {
    const {
      msg, messages, isUserLaggedIn, nickname,
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
            onPress={() => {
              this.handleLogin();
            }}
          >
            <Text style={styles.buttonText}>
Sign In
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.chatContainer}>
        {!messages ? (
          <Activity />
        ) : (
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
                    <View>
                      <View style={styles.userMessage}>
                        <Text style={styles.userNicknameText}>
                          {messages[message].nickname}
                        </Text>
                        <Text style={styles.userText}>
                          {messages[message].msg}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <View>
                      <View style={styles.message}>
                        <Text style={styles.nicknameText}>
                          {messages[message].nickname}
                        </Text>
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
                style={{ width: 35, height: 35, alignSelf: 'center' }}
                onPress={() => { this.handleButtonPress(); }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}