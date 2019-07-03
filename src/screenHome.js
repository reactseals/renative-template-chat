import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

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
  },
  buttonLightBlueText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fafafa',
  },
  buttonLightGreen: {
    backgroundColor: '#6fbf49',
    height: 45,
    width: 110,
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
  buttonLightGreenText: {
    fontSize: 18,
    fontFamily: 'Optima',
    textAlign: 'center',
    margin: 10,
    color: '#fafafa',
  },
});

const Home = props => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.buttonDarkGrey}
      onPress={() => props.navigation.navigate('WelcomeGrey')}
    >
      <Text style={styles.buttonDarkGreyText}>Dark Grey</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonLightBlue}
      onPress={() => props.navigation.navigate('WelcomeLightBlue')}
    >
      <Text style={styles.buttonLightBlueText}>Light Blue</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonLightGreen}
      onPress={() => props.navigation.navigate('WelcomeLightGreen')}
    >
      <Text style={styles.buttonLightGreenText}>Light Green</Text>
    </TouchableOpacity>

  </View>
);
export default Home;
