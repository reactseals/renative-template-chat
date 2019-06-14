import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: colors.colorGreen,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.colorBlack,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.colorGreen,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  chatInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    margin: 10,
    paddingLeft: 10,
    borderColor: colors.colorDarkGreen,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.colorBlack,
    textAlign: 'left',
  },
  message: {
    backgroundColor: colors.colorWhite,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  nicknameText: {
    color: colors.colorBlue,
    fontWeight: 'bold',
  },
  text: {
    color: colors.colorBlack,
  },
  userMessage: {
    backgroundColor: colors.colorDarkGreen,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  userNicknameText: {
    color: colors.colorDarkYellow,
    fontWeight: 'bold',
  },
  userText: {
    color: colors.colorWhite,
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
