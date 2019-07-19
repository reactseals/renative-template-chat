import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from '../../platformAssets/runtime/welcome.styles';
import colors from '../../platformAssets/runtime/colors';

console.disableYellowBox = true;

export default class Home extends Component {
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

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../platformAssets/runtime/logoChat.png')}
          style={styles.img}
          resizeMode="contain"
        />

        <TouchableOpacity
          ref={component => this.button = component}
          onFocus={() => this.buttonActiveStyle(this.button)}
          onBlur={() => this.buttonInactiveStyle(this.button)}
          style={styles.button}
          onPress={() => navigation.navigate('Chat')}
        >
          <Text style={styles.buttonText}>
Let's Chat
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
