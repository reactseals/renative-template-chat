import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { Api } from 'renative';
import styles from '../themes/lightBlueTheme/welcome.styles';

const Home = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/img/logoLightBlue.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Api.navigation.navigate('ScreenChatLightBlue');
      }}
    >
      <Text style={styles.buttonText}>Let's Chat</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
