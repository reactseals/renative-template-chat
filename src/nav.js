import React from 'react';
import { PixelRatio, Platform } from 'react-native';
import {
  Icon,
  Api,
  IOS,
  ANDROID,
  WEB,
  WEBOS,
  TIZEN,
  MACOS,
  ANDROID_TV,
  ANDROID_WEAR,
  FIREFOX_TV,
  WINDOWS,
  TVOS,
  TIZEN_WATCH,
  KAIOS,
} from 'renative';
import LinearGradient from 'react-native-linear-gradient';
import Theme from './theme';
import colors from './themes/greyTheme/colors';

const isDrawerMenuBased = () => navStructure.root.menus.drawerMenu.isVisibleIn.includes(Api.platform);
const isTopMenuBased = () => navStructure.root.menus.topMenu.isVisibleIn.includes(Api.platform);

const navStructure = {
  root: {
    menus: {
      drawerMenu: {
        position: 'left',
        isVisibleIn: [IOS, ANDROID],
        component: 'Menu',
        options: {
          drawerBackgroundColor: colors.color13,
          drawerWidth: 250,
        },
        navigationOptions: {},
      },
      sideMenu: {
        position: 'left',
        isVisibleIn: [MACOS, WINDOWS, WEB],
        component: 'Menu',
        options: {
          menuWidth: 200,
        },
        navigationOptions: {},
      },
      topMenu: {
        isVisibleIn: [TVOS, ANDROID_TV, TIZEN, FIREFOX_TV, WEBOS],
        component: 'Menu',
        options: {
          menuHeight: 100,
        },
        navigationOptions: {},
      },
      tabMenu: {
        position: 'bottom',
        isVisibleIn: [TVOS, ANDROID_TV, TIZEN],
        component: 'Menu',
        navigationOptions: {},
      },
      modalMenu: {
        position: 'hidden',
        isVisibleIn: [KAIOS],
        component: 'Menu',
        navigationOptions: {},
      },
      swipeMenu: {
        isVisibleIn: [ANDROID_WEAR, TIZEN_WATCH],
      },
    },
    screens: {
      Home: {
        screen: 'ScreenHome',
        navigationOptions: {
          title: 'Home',
        },
        stacks: ['Chat', 'stacks.MyPage2', 'stacks.MyPage3'],
      },
      // MyPage: {
      //   screen: 'ScreenMyPage',
      //   tabMenu: {
      //     position: 'bottom',
      //     isVisibleIn: [IOS, ANDROID],
      //     screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
      //   },
      //   navigationOptions: {
      //     title: 'My Page',
      //   },
      //   stacks: ['stacks.MyPage2'],
      // },
      ScreenWelcomeLightGreen: {
        screen: 'ScreenWelcomeLightGreen',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
      ScreenChatLightGreen: {
        screen: 'ScreenChatLightGreen',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
      ScreenWelcomeLightBlue: {
        screen: 'ScreenWelcomeLightBlue',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
      ScreenChatLightBlue: {
        screen: 'ScreenChatLightBlue',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
      ScreenWelcomeGrey: {
        screen: 'ScreenWelcomeGrey',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
      ScreenChatGrey: {
        screen: 'ScreenChatGrey',
        tabMenu: {
          position: 'bottom',
          isVisibleIn: [IOS, ANDROID],
          screens: ['root.MyPage2', 'root.MyPage', 'stacks.MyPage2', 'stacks.MyPage3'],
        },
        navigationOptions: {
          title: 'Chat',
        },
        stacks: ['stacks.MyPage2'],
      },
    },
    navigationOptions: {
      headerTitleStyle: {
        color: colors.textColor,
        fontFamily: Theme.primaryFontFamily,
      },
      headerStyle: {
        borderBottomWidth: isTopMenuBased ? 0 : 1,
      },
      headerBackground: (
        <LinearGradient
          colors={[colors.activeColorTertiary, colors.activeColorSecondary]}
          style={{ flex: 1 }}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 0 }}
        />
      ),
      headerLeft: (n) => {
        if (!isDrawerMenuBased()) return null;
        return (
          <Icon
            iconFont="ionicons"
            iconName="md-menu"
            iconColor={colors.activeColorPrimary}
            style={{ width: 40, height: 40, marginLeft: 10 }}
            onPress={() => {
              Api.navigation.openDrawer();
            }}
          />
        );
      },
    },
  },
  stacks: {
    screens: {
      Chat: {
        screen: 'Chat',
        navigationOptions: {
          title: 'Chat',
        },
      },
      // MyPage3: {
      //   screen: 'ScreenMyPage',
      //   navigationOptions: {
      //     title: 'My Page 3',
      //   },
      // },
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.color1,
      },
      headerTintColor: Theme.color3,
      headerTitleStyle: {
        color: Theme.color3,
        fontFamily: Theme.primaryFontFamily,
      },
    },
  },
  modals: {
    screens: {
      MyModal: {
        screen: 'ScreenModal',
        navigationOptions: {
          title: 'My Modal',
        },
      },
    },
    navigationOptions: {
      header: null,
    },
  },
};

export { navStructure, isDrawerMenuBased, isTopMenuBased };
