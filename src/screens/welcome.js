import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from '../../platformAssets/runtime/welcome.styles';

console.disableYellowBox = true;

const Home = props => (
  <View style={styles.container}>
    <Image
      source={require('../../platformAssets/runtime/logoChat.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('Chat')}
    >
      <Text style={styles.text}>
Let's Chat
      </Text>
    </TouchableOpacity>
  </View>
);
export default Home;
