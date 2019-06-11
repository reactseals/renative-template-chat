import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity,
} from 'react-native';
import { Icon, Api } from 'renative';
import styles from './chat.styles';
import firebase from '../config/Firebase';
import Theme from '../theme';

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

    this.chatRoom = firebase.database().ref().child('chatrooms').child('global');

    this.handleNewMessages = (snap) => {
      console.log(snap.val());
      // if not null then update state
      if (snap.val()) this.setState({ messages: snap.val() });
    };
  }

  componentDidMount() {
    // subscribe
    this.chatRoom.on('value', this.handleNewMessages);
  }

  componentWillUnmount() {
    // unsubscribe
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
    firebase.database().ref().child('nicknames').push({ nickname, email });
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
        <View style={{ flex: 1 }}>
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.loginInput}
              underlineColorAndroid="transparent"
              placeholder="Nickname"
              placeholderTextColor="#8D99AE"
              selectionColor="#fb8357"
              autoCapitalize="none"
              onChangeText={this.handleNickname}
            />

            <TextInput
              style={styles.loginInput}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#8D99AE"
              selectionColor="#fb8357"
              autoCapitalize="none"
              onChangeText={this.handleEmail}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleLogin(nickname, email)}
            >
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
          </View>
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
                  <Text>{messages[message].msg}</Text>
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
            placeholderTextColor="#8D99AE"
            outline="none"
            onChangeText={this.handleMessage}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />
          <Icon
            iconFont="ionicons"
            iconName="md-send"
            iconColor={Theme.color3}
              // style={styles.icon}
            style={{ width: 40, height: 40, alignSelf: 'center' }}
            onPress={() => { this.handleButtonPress(); }}
          />
        </View>
      </View>
    );
  }
}
