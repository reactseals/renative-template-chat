import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './chat.styles';

export default class Chat extends Component {
  state = {
    test: [],
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Chat</Text>
      </View>
    );
  }
}
