import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from '../../../themes/mobile/lightBlueThemeMobile/welcome.styles';

console.disableYellowBox = true;

const Home = props => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/img/logoLightBlueColors.png')}
      style={styles.img}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('ChatLightBlue')}
    >
      <Text style={styles.buttonText}>Let's Chat</Text>
    </TouchableOpacity>
  </View>
);
export default Home;
