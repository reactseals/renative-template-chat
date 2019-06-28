export default () => {
  const style = document.createElement('style');

  // entypo
  const entypoFont = require('react-native-vector-icons/Fonts/Entypo.ttf');
  const entypoFontStyles = `@font-face {
  src: url(${entypoFont});
  font-family: 'Entypo';
  }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = entypoFontStyles;
  } else {
    style.appendChild(document.createTextNode(entypoFontStyles));
  }

  // fontAwesome
  const fontAwesomeFont = require('react-native-vector-icons/Fonts/FontAwesome.ttf');
  const fontAwesomeFontStyles = `@font-face {
  src: url(${fontAwesomeFont});
  font-family: 'FontAwesome';
  }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = fontAwesomeFontStyles;
  } else {
    style.appendChild(document.createTextNode(fontAwesomeFontStyles));
  }

  // material-community
  const materialCommunityFont = require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf');
  const materialCommunityFontStyles = `@font-face {
  src: url(${materialCommunityFont});
  font-family: 'Material Design Icons';
  }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = materialCommunityFontStyles;
  } else {
    style.appendChild(document.createTextNode(materialCommunityFontStyles));
  }

  // Material Icons
  const materialIconsFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
  const materialIconsFontStyles = `@font-face {
  src: url(${materialIconsFont});
  font-family: 'Material Icons';
  }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = materialIconsFontStyles;
  } else {
    style.appendChild(document.createTextNode(materialIconsFontStyles));
  }

  // Octicons
  const octiconsFont = require('react-native-vector-icons/Fonts/Octicons.ttf');
  const octiconsFontStyles = `@font-face {
  src: url(${octiconsFont});
  font-family: 'Octions';
  }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = octiconsFontStyles;
  } else {
    style.appendChild(document.createTextNode(octiconsFontStyles));
  }

  // Ionicons
  const ioniconsFont = require('react-native-vector-icons/Fonts/Ionicons.ttf');
  const ioniconsFontStyles = `@font-face {
    src: url(${ioniconsFont});
    font-family: 'Ionicons';
    }`;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = ioniconsFontStyles;
  } else {
    style.appendChild(document.createTextNode(ioniconsFontStyles));
  }

  document.head.appendChild(style);
};
