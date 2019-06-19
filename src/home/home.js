import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
import { Api } from 'renative';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../themes/darkTheme/home.styles';

const Home = () => (
  <ImageBackground
    source={require('../assets/img/darkBackground.jpg')}
    style={styles.container}
  >

    <Image
      source={require('../assets/img/logoDark.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Api.navigation.navigate('Chat');
      }}
    >
      <Text>Let's Chat</Text>
    </TouchableOpacity>

    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <Text style={styles.buttonText}>
    Sign in with Facebook
      </Text>
    </LinearGradient>

  </ImageBackground>
);
export default Home;
