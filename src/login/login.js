import React, { Component } from 'react';
import {
  View, Text, ImageBackground, TouchableOpacity, TextInput,
} from 'react-native';
import { Api } from 'renative';
import styles from './login.styles';
import firebase from '../config/Firebase';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  }

  handlePassword = (text) => {
    this.setState({ password: text });
  }

  login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        Api.navigation.navigate('Home');
      })
      .catch(err => alert(err));
  };


  render() {
    console.log('Log in');
    const { email, password } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#8D99AE"
            selectionColor="#1b9958"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#8D99AE"
            selectionColor="#1b9958"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.login(email, password)}
            onFocus={() => this.activeStyle(this.loginButton)}
            onBlur={() => this.inactiveStyle(this.loginButton)}
          >
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
