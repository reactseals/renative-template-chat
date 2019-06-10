import React from 'react';
import { View } from 'react-native';
import { createApp } from 'renative';
import { navStructure } from './nav';
import Fonts from '../platformAssets/runtime/fontManager';
import ScreenHome from './home';
import ScreenLogin from './login';
import ScreenChat from './chat';
import ScreenMyPage from './screenMyPage';
import ScreenModal from './screenModal';
import Menu from './menu';

let AppContainer;

class App extends React.Component {
  constructor(props) {
    super(props);
    AppContainer = createApp(navStructure, {
      ScreenHome, ScreenLogin, ScreenChat, ScreenMyPage, ScreenModal, Menu,
    });
  }

  render() {
    return AppContainer;
  }
}

export default App;
