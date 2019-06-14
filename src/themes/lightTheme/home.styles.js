import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
  },
  button: {
    backgroundColor: colors.colorGreen,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 4,
  },
});
