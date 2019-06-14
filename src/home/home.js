import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
import { Api } from 'renative';
import styles from '../themes/lightTheme/home.styles';

const Home = () => (
  <ImageBackground
    source={require('../assets/img/lightBackground.jpg')}
    style={styles.container}
  >

    <Image
      source={require('../assets/img/logoLight.png')}
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
  </ImageBackground>
);
export default Home;
