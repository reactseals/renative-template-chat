import React, { Component } from 'react';
import {
  View, Text, ImageBackground, TouchableOpacity, TextInput,
} from 'react-native';
import { Api } from 'renative';
import styles from './login.styles';
import firebase from '../config/Firebase';

export default class Login extends Component {
  state = {
    nickname: '',
    email: '',
  }

  handleNickname = (text) => {
    this.setState({ nickname: text });
  }

  handlePassword = (text) => {
    this.setState({ email: text });
  }

  login = () => {
    const { nickname, email } = this.state;
    firebase.database().ref(`users/${nickname}`).set({ name: email });
  };

  render() {
    console.log('Log in');
    const { nickname, email } = this.state;
    console.log(email);
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Nickname"
            placeholderTextColor="#8D99AE"
            selectionColor="#fb8357"
            autoCapitalize="none"
            onChangeText={this.handleNickname}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#8D99AE"
            selectionColor="#fb8357"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={this.email}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.login(nickname, email)}
          >
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
