import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
import { Api } from 'renative';
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
  </ImageBackground>
);
export default Home;
