import React from 'react';
import {
  Text, Image, View, TouchableOpacity, StyleSheet, ScrollView, Platform,
} from 'react-native';
import { Api, Button, Icon } from 'renative';
import LinearGradient from 'react-native-linear-gradient';
import { isTopMenuBased } from './nav';
import colors from './themes/greyTheme/colors';

let isTop;

const styles = StyleSheet.create({
  containerVertical: {
    paddingTop: 40,
    paddingLeft: 20,
    width: '100%',
    height: '100%',
    // backgroundColor: colors.color13,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#AAAAAA',
    flexDirection: 'column',
  },
  containerHorizontal: {
    paddingLeft: 40,
    width: '100%',
    height: '100%',
    // backgroundColor: colors.color13,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'TimeBurner',
    color: colors.textColor,
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
      <LinearGradient
        colors={[colors.activeColorTertiary, colors.activeColorSecondary]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={[isTop ? styles.containerHorizontal : styles.containerVertical, this.props.style]}>


          <Text style={styles.text}>
Menu
          </Text>
          <Button
            title="Home"
            iconFont="ionicons"
            iconName="md-home"
            iconColor={colors.activeColorPrimary}
            style={styles.button}
            onPress={() => {
              Api.navigation.navigate('Home', {
                onSuccess: () => {

                },
              });
            }}
          />
          <Button
            title="Chat Grey"
            iconFont="ionicons"
            iconName="md-list-box"
            iconColor={colors.activeColorPrimary}
            style={styles.button}
            onPress={() => {
              Api.navigation.navigate('ChatGrey');
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
      </LinearGradient>

    );
  }
}

export default Menu;
