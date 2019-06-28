import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: colors.activeColorSecondary,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.textColor,
    textAlign: 'center',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: colors.activeBackgroundColor,
    height: 41,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    // shadow
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, // IOS
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Optima',
    textAlign: 'center',
    margin: 10,
    color: colors.buttonTextColor,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  chatMessagesContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginTop: 10,
  },
  chatInput: {
    flex: 1,
    height: 28,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    color: colors.textColor,
    textAlign: 'left',
  },
  message: {
    backgroundColor: colors.messageBackground,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  nicknameText: {
    color: colors.nicknameColor,
    fontWeight: 'bold',
    fontFamily: 'Optima',
    fontSize: 17,
  },
  text: {
    color: colors.chatTextColor,
  },
  userMessage: {
    backgroundColor: colors.userMessageBackground,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  userNicknameText: {
    color: colors.userNicknameColor,
    fontWeight: 'bold',
    fontFamily: 'Optima',
    fontSize: 17,
  },
  userText: {
    color: colors.userChatTextColor,
  },
  sendIconContainer: {
    position: 'absolute',
    backgroundColor: colors.activeBackgroundColor,
    width: 40,
    height: 40,
    bottom: 30,
    right: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  test: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});
