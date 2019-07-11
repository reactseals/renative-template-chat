import { StyleSheet } from 'react-native';
import colors from '../../colors/lightBlueColors';
import fonts from '../../fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  img: {
    height: 200,
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
    fontSize: 18,
    fontFamily: fonts.GillSans,
  },
});
