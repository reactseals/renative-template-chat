import { StyleSheet } from 'react-native';
import colors from './darkColors';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: colors.color3,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.color7,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.color3,
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
    borderColor: colors.color3,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.color7,
    textAlign: 'left',
  },
  message: {
    backgroundColor: colors.color7,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  nicknameText: {
    color: '#135069',
    fontWeight: 'bold',
  },
  text: {
    color: colors.color1,
  },
  userMessage: {
    backgroundColor: colors.color1,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  userNicknameText: {
    color: colors.color3,
    fontWeight: 'bold',
  },
  userText: {
    color: colors.color7,
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
