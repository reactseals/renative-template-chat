import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Api } from 'renative';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDarkGrey: {
    backgroundColor: '#636366',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 4,
    // shadow
    shadowColor: 'rgba(0, 0, 0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, // IOS
  },
  buttonDarkGreyText: {
    color: '#edf2f4',
  },
  buttonLightBlue: {
    backgroundColor: '#3cc1d7',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 4,
    // shadow
    shadowColor: 'rgba(0, 0, 0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, // IOS
  },
  buttonLightBlueText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fafafa',
  },
});

const Home = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.buttonDarkGrey}
      onPress={() => {
        Api.navigation.navigate('ScreenWelcomeGrey');
      }}
    >
      <Text style={styles.buttonDarkGreyText}>Dark Grey</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonLightBlue}
      onPress={() => {
        Api.navigation.navigate('ScreenWelcomeLightBlue');
      }}
    >
      <Text style={styles.buttonLightBlueText}>Light Blue</Text>
    </TouchableOpacity>

  </View>
);
export default Home;
