import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05668D',
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
    color: '#EDF2F4',
    textAlign: 'center',
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
    color: '#EDF2F4',
    textAlign: 'left',
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
  text: {
    color: '#EDF2F4',
    fontWeight: 'bold',
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
