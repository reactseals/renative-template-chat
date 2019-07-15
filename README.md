# ReNative Chat Template

<p align='center'>
  <img src="https://live.staticflickr.com/65535/48060667311_7e37269807_o.png" width="200">
  <img src="https://live.staticflickr.com/65535/48255395781_38ce801a92_o.png" width="200">
  <img src="https://live.staticflickr.com/65535/48060712588_fc802ab218_o.png" width="200">
  <p align='center'>build universal cross-platform apps with <a href="https://facebook.github.io/react-native/">react native</a></p>
  <p align='center'>
    <img src="https://img.shields.io/badge/Platforms_Supported-14-blue.svg" />
    <img src="https://img.shields.io/badge/React_Native-0.59.5-blue.svg" />
    <img src="https://img.shields.io/badge/React-16.8.6-blue.svg" />
    <img src="https://img.shields.io/badge/Plugins-45-red.svg" />
  </p>
</p>

   <br />
    <br />
      <br />
       <br />

<p align='center'>
    <a href="https://github.com/pavjacko/renative"><img src="https://img.shields.io/github/stars/pavjacko/renative.svg?style=social" /></a>
    <a href="https://github.com/pavjacko/renative"><img src="https://img.shields.io/github/forks/pavjacko/renative.svg?style=social" />
    <a href="https://spectrum.chat/renative"><img src="https://withspectrum.github.io/badge/badge.svg" /></a>
        </a>
    <a href="https://twitter.com/renative"><img src="https://img.shields.io/twitter/follow/renative.svg?style=social" /></a>
</p>

<table>
  <tr>
    <th colspan="3">Web</th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48287865066_23bbae9497_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288558522_d5ed8ea766_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288969756_07d6f795ae_o.gif" width="300"></td>
  </tr>
    <tr>
    <th colspan="3">Android</th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48289408076_9f610fd070_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513762_dd865b2e87_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513557_10995d1a26_o.gif" width="300"></td>
  </tr>
  <tr>
    <th colspan="3">macOS</th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48288729341_c25b654eb3_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289171076_0d8cf7b7cb_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288929521_833cdc0cef_o.gif" width="300"></td>
  </tr>
</table>

---
<img src="https://github.com/pavjacko/renative/blob/master/docs/ic_features.png?raw=true" width=50 height=50 />

## Features:

#### Development platforms

![](https://img.shields.io/badge/Mac-yes-brightgreen.svg)
![](https://img.shields.io/badge/Windows-POC-orange.svg)
![](https://img.shields.io/badge/Ubuntu-untested-lightgrey.svg)

#### Requirements

-   [Node](https://nodejs.org) `10.13.0` or newer
-   [NPM](https://npmjs.com/) `6.4.1` or newer
-   [Android Studio](https://developer.android.com/studio) (if you want to develop for Android)
-   [Xcode](https://developer.apple.com/xcode/) (if you want to develop for iOS/tvOS)
---

<img src="https://github.com/pavjacko/renative/blob/master/docs/ic_configuration.png?raw=true" width=50 height=50 />

## Firebase Setup

1. Create Firebase project: https://firebase.google.com/docs/storage/web/start

2. Get your Firebase config file or object: https://support.google.com/firebase/answer/7015592

## Configuration

`rnv` will create Firebase config file at this location: `<your-project>/projectConfig/firebase.js`

Open the file and edit Firebase configuration with:

```
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>',
  appId: '<your-app-id>',
};
```

