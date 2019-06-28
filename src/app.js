import React from 'react';
import { View } from 'react-native';
import { createApp } from 'renative';
import { navStructure } from './nav';
import Fonts from '../platformAssets/runtime/fontManager';
import ScreenHome from './screenHome';
import ScreenWelcomeGrey from './welcomeGreyWeb';
import ScreenChatGrey from './chatGreyWeb';
import ScreenWelcomeLightBlue from './welcomeLightBlue';
import ScreenChatLightBlue from './chatLightBlue';
import ScreenWelcomeLightGreen from './welcomeLightGreen';
import ScreenChatLightGreen from './chatLightGreen';
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
      ScreenWelcomeLightGreen,
      ScreenChatLightGreen,
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
