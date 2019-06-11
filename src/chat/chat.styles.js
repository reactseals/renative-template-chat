import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05668d',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#05668d',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: '#fb8357',
    borderWidth: 1,
    alignItems: 'center',
    color: '#edf2f4',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fb8357',
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
    borderColor: '#fb8357',
    borderWidth: 1,
    alignItems: 'center',
    color: '#edf2f4',
    textAlign: 'left',
  },
  message: {
    backgroundColor: '#bcb6ae',
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
    color: '#edf2f4',
  },
  userMessage: {
    backgroundColor: '#222222',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  userNicknameText: {
    color: '#fb8d62',
    fontWeight: 'bold',
  },
  userText: {
    color: '#edf2f4',
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
