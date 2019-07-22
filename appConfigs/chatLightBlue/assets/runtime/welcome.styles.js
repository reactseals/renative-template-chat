import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './chatFonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  img: {
    height: 250,
    width: 250,
  },
  button: {
    backgroundColor: colors.activeBackgroundColor,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  buttonText: {
    color: colors.buttonTextColor,
    fontSize: 16,
    fontFamily: fonts.GillSans,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
