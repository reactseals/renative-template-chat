import { StyleSheet } from 'react-native';
import { IS_WEB } from 'rnv-platform-info';
import colors from '../colors';
import fonts from '../chatFonts';

let position;
if (IS_WEB) {
  position = 'fixed';
}

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  inputContainerWeb: {
    width: '100%',
    flexDirection: 'row',
    position,
    bottom: 0,
    backgroundColor: colors.backgroundColor,
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: colors.activeColorSecondary,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.inputTextColor,
    textAlign: 'center',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: colors.activeBackgroundColor,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    color: colors.textColor,
    shadowColor: 'rgba(0,0,0, .4)',
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
  chatContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  chatContainerWeb: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingBottom: 60,
    height: 500,
  },
  chatInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    margin: 10,
    paddingLeft: 10,
    borderColor: colors.activeColorSecondary,
    borderWidth: 1,
    alignItems: 'center',
    color: colors.textColor,
    textAlign: 'left',
  },
  messageContainerWithAvatar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
  },
  messageWithAvatar: {
    backgroundColor: colors.messageBackground,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'center',
    maxWidth: '80%',
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
    marginBottom: 3,
  },
  text: {
    color: colors.chatTextColor,
  },
  userMessageContainerWithAvatar: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
  },
  userMessageWithAvatar: {
    backgroundColor: colors.userMessageBackground,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'center',
    maxWidth: '80%',
  },
  userMessageNoAvatar: {
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
    marginBottom: 3,
  },
  userText: {
    color: colors.textColor,
  },
});
