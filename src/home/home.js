import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { Api } from 'renative';
import styles from './home.styles';

const Home = () => (
  <View style={styles.center}>
    <Image
      source={require('../assets/img/chatlogo.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Api.navigation.navigate('MyPage');
      }}
    >
      <Text>Let's Chat</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
