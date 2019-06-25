import React from 'react';
import { View } from 'react-native';
import { createApp } from 'renative';
import { navStructure } from './nav';
import Fonts from '../platformAssets/runtime/fontManager';
import ScreenHome from './screenHome';
import ScreenWelcomeGrey from './welcomeGrey';
import ScreenChatGrey from './chatGrey';
import ScreenWelcomeLightBlue from './welcomeLightBlue';
import ScreenChatLightBlue from './chatLightBlue';
import ScreenMyPage from './screenMyPage';
import ScreenModal from './screenModal';
import Menu from './menu';

let AppContainer;

class App extends React.Component {
  constructor(props) {
    super(props);
    AppContainer = createApp(navStructure, {
      ScreenHome,
      ScreenWelcomeGrey,
      ScreenChatGrey,
      ScreenWelcomeLightBlue,
      ScreenChatLightBlue,
      ScreenMyPage,
      ScreenModal,
      Menu,
    });
  }

  render() {
    return AppContainer;
  }
}

export default App;
