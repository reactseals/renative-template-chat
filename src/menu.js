import React from 'react';
import {
  Text, Image, View, TouchableOpacity, StyleSheet, ScrollView, Platform,
} from 'react-native';
import { Api, Button, Icon } from 'renative';
import { isTopMenuBased } from './nav';
import Theme from './theme';
import colors from './themes/colors';

let isTop;

const styles = StyleSheet.create({
  containerVertical: {
    paddingTop: 40,
    paddingLeft: 20,
    width: '100%',
    height: '100%',
    backgroundColor: colors.colorDarkBlue,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#AAAAAA',
    flexDirection: 'column',
  },
  containerHorizontal: {
    paddingLeft: 40,
    width: '100%',
    height: '100%',
    backgroundColor: colors.colorDarkBlue,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'TimeBurner',
    color: colors.colorWhite,
    fontSize: 20,
    marginTop: 10,
    textAlign: 'left',
  },
  button: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    maxWidth: 400,
    minWidth: 50,
    borderWidth: 0,
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    isTop = isTopMenuBased();
  }

  render() {
    return (
      <View style={[isTop ? styles.containerHorizontal : styles.containerVertical, this.props.style]}>
        <Text style={styles.text}>
Menu
        </Text>
        <Button
          title="Home"
          iconFont="ionicons"
          iconName="md-home"
          iconColor={colors.colorWhite}
          style={styles.button}
          onPress={() => {
            Api.navigation.navigate('Home', {
              onSuccess: () => {

              },
            });
          }}
        />
        <Button
          title="Chat"
          iconFont="ionicons"
          iconName="md-list-box"
          iconColor={colors.colorWhite}
          style={styles.button}
          onPress={() => {
            Api.navigation.navigate('Chat');
          }}
        />
        {/* <Button
          title="My Modal"
          iconFont="ionicons"
          iconName="ios-albums"
          iconColor={Theme.color3}
          style={styles.button}
          onPress={() => {
            Api.navigation.navigate('MyModal');
          }}
        /> */}
      </View>
    );
  }
}

export default Menu;
