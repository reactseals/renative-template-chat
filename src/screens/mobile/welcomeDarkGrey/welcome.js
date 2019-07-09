import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from '../../../themes/darkGreyThemeMobile/welcome.styles';

console.disableYellowBox = true;

const Home = props => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/img/logoGreyColors.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('ChatDarkGrey')}
    >
      <Text style={styles.text}>Let's Chat</Text>
    </TouchableOpacity>
  </View>
);
export default Home;
