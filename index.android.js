import { AppRegistry, Platform } from 'react-native';
import App from './src/navigation/mobileNav';
import { Api } from 'renative';
import { ANDROID, FORM_FACTOR_MOBILE } from 'renative';

Api.platform = ANDROID;
Api.formFactor = FORM_FACTOR_MOBILE;

AppRegistry.registerComponent('App', () => App);
