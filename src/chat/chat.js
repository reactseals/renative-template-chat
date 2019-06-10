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
      msg: '',
      messages: {},
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

  // Add message to state
  handleMessage = (text) => {
    this.setState({ msg: text });
  }

  handleKeyPress = (e) => {
    const { msg } = this.state;
    if (e.key === 'Enter') {
      // send the msg
      this.chatRoom.push({
        // sender: this.state.nickname,
        msg,
      });
      // clear input field
      this.setState({ msg: '' });
    }
  };

  handleButtonPress = () => {
    const { msg } = this.state;
    this.chatRoom.push({
      msg,
    });
    // clear input field
    this.setState({ msg: '' });
  }

  render() {
    const { users, msg, messages } = this.state;
    console.log('Chat');
    console.log(msg);
    console.log(messages);
    return (
      <View style={styles.container}>
        <ScrollView>
          {Object.keys(messages).map(message => (
            <Text>{messages[message].msg}</Text>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={msg}
            style={styles.input}
            selectionColor="#fb8357"
            placeholder="Type a message ..."
            placeholderTextColor="#8D99AE"
            outline="none"
            onChangeText={this.handleMessage}
            onKeyPress={this.handleKeyPress}
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
