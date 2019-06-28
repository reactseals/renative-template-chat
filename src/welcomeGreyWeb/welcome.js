import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ImageBackground, TouchableHighlight,
} from 'react-native';
import { Api } from 'renative';
import styles from '../themes/greyTheme/welcome.styles';

const Home = props => (
  <View style={styles.container}>
    <Image
      source={require('../assets/img/logoGreyColors.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('ChatGrey')}
    >
      <Text style={styles.text}>Let's Chat</Text>
    </TouchableOpacity>
  </View>
);
export default Home;
