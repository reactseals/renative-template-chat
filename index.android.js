import { AppRegistry, Platform } from 'react-native';
import { Api, ANDROID, FORM_FACTOR_MOBILE } from 'renative';
import App from './src/navigation/mobileNav';

Api.platform = ANDROID;
Api.formFactor = FORM_FACTOR_MOBILE;

AppRegistry.registerComponent('App', () => App);
