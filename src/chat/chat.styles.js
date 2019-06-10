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
  input: {
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
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },

});
