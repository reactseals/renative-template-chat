import { AppRegistry, Platform } from 'react-native';
import { Api } from 'renative';
import { IOS, FORM_FACTOR_MOBILE } from 'renative';
import App from './src/navigation/mobileNav';

Api.platform = IOS;
Api.formFactor = FORM_FACTOR_MOBILE;

AppRegistry.registerComponent('App', () => App);
