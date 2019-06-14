import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { Icon, Api } from 'renative';
import styles from '../themes/darkTheme/chat.styles';
import firebase from '../../projectConfig/firebase';
import colors from '../themes/darkTheme/darkColors';

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

  render() {
    const {
      nickname, email, msg, messages, isUserLaggedIn,
    } = this.state;
    if (!isUserLaggedIn) {
      return (
        <ImageBackground
          source={require('../assets/img/darkBackground.jpg')}
          style={styles.loginContainer}
        >
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.loginInput}
              underlineColorAndroid="transparent"
              placeholder="Nickname"
              placeholderTextColor={colors.colorLightGrey}
              selectionColor={colors.color3}
              autoCapitalize="none"
              onChangeText={this.handleNickname}
            />

            <TextInput
              style={styles.loginInput}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor={colors.colorLightGrey}
              selectionColor={colors.color3}
              autoCapitalize="none"
              onChangeText={this.handleEmail}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleLogin(nickname, email)}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
    return (
      <ImageBackground
        source={require('../assets/img/darkBackground.jpg')}
        style={styles.chatContainer}
      >
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
            value={msg}
            style={styles.chatInput}
            selectionColor="#fb8357"
            placeholder="Type a message ..."
            placeholderTextColor={colors.colorDarkGrey}
            outline="none"
            onChangeText={this.handleMessage}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />
          <Icon
            iconFont="ionicons"
            iconName="md-send"
            iconColor={colors.color3}
              // style={styles.icon}
            style={{ width: 40, height: 40, alignSelf: 'center' }}
            onPress={() => { this.handleButtonPress(); }}
          />
        </View>
      </ImageBackground>


    );
  }
}
