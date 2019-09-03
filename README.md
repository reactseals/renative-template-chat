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
    <th colspan="3"><a href="#web">Web</a></th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48287865066_23bbae9497_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288558522_d5ed8ea766_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288969756_07d6f795ae_o.gif" width="300"></td>
  </tr>
  <tr>
    <th colspan="3"><a href="#android">Android</a></th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48289408076_9f610fd070_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513762_dd865b2e87_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513557_10995d1a26_o.gif" width="300"></td>
  </tr>
  <tr>
    <th colspan="3"><a href="#macos">macOS</a></th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48288729341_c25b654eb3_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289171076_0d8cf7b7cb_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288929521_833cdc0cef_o.gif" width="300"></td>
  </tr>
</table>

---
<img src="https://github.com/pavjacko/renative/blob/master/docs/images/ic_features.png?raw=true" width=50 height=50 />

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

<img src="https://github.com/pavjacko/renative/blob/master/docs/images/ic_configuration.png?raw=true" width=50 height=50 />

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

---

<img src="https://github.com/pavjacko/renative/blob/master/docs/images/ic_web.png?raw=true" width=200 height=50 />

## Web

![](https://img.shields.io/badge/Mac-yes-brightgreen.svg)
![](https://img.shields.io/badge/Windows-yes-brightgreen.svg)
![](https://img.shields.io/badge/Ubuntu-yes-brightgreen.svg)

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
</table>

-   Supports Chrome, Safari, Firefox, IE10+

#### Requirements

-   no extra requirements required

#### Project Configuration

| Feature          | Version  |
| ---------------- | :------: |
| Webpack          | `3.11.0` |
| react-native-web | `0.9.1`  |
| Babel Core       | `7.1.2`  |

#### Run

```
rnv run -p web
```

RNV will run local server and attempt to open browser URL: http://0.0.0.0:8080/

If you only want to run server:

```
rnv start -p web
```

#### Build

```
rnv build -p web
```

your deployable web app folder will be located in `./platformBuilds/<APP_ID>_web/public`

#### Advanced

Clean and Re-build platform project

```
rnv run -p web -r
```

Run with verbose logging:

```
rnv run -p web --info
```

Run app on custom port `9999`:

```
rnv run -p web --port 9999
```

---

<img src="https://github.com/pavjacko/renative/blob/master/docs/images/ic_android.png?raw=true" width=50 height=50 />

## Android

![](https://img.shields.io/badge/Mac-yes-brightgreen.svg)
![](https://img.shields.io/badge/Windows-yes-brightgreen.svg)
![](https://img.shields.io/badge/Ubuntu-yes-brightgreen.svg)

<table>
  <tr>
    <th colspan="3"><a href="#android">Android</a></th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48289408076_9f610fd070_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513762_dd865b2e87_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289513557_10995d1a26_o.gif" width="300"></td>
  </tr>
</table>

-   Latest Android project
-   Kotlin Support
-   Support for Gradle 4.9

#### Requirements

-   [Android Studio](https://developer.android.com/studio/index.html) for Android development
-   [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development

#### Project Configuration

| Feature        | Version  |
| -------------- | :------: |
| Gradle         | `4.10.1` |
| Android Gradle | `3.3.1`  |
| Kotlin         | `1.3.20` |
| Target SDK     |   `27`   |

#### Emulators

You can create variety of emulators via Android Studio IDE

<table>
  <tr>
    <th>
    <img src="https://renative.org/img/android1.png" />
    </th>
  </tr>
</table>

#### Run on Simulator

NOTE: make sure you have 1 android device connected or 1 emulator running

```
rnv start
rnv run -p android
```

#### Run on Device

```
rnv start
rnv run -p android -d
```

#### Deploy on Device

This will run production version on your device (not connected to metro bundler)
You can configure each `buldScheme` ie `-s release` in your config file `./appConfigs/<YOUR_APP_CONFIG>/config.json`

```
rnv start
rnv run -p android -s release -d
```

#### Advanced

Clean and Re-build platform project

```
rnv run -p android -r
```

Launch specific android emulator:

```
rnv target launch -p android -t Nexus_5X_API_26
```

Launch app with specific iOS simulator (let ReNative to give you the list of available options):

```
rnv run -p android -t ?
```

Launch specific emulator :

```
rnv target launch -p android -t Nexus_5X_API_26
```

Launch specific emulator (let ReNative to give you the list of available options):

```
rnv target launch -p android -t ?
```

Get list of all available devices

```
rnv target list -p android
```

Get device/simulator logs

```
rnv log -p android
```

Get device/simulator logs with filter

```
rnv log -p android -f com.myapp
```

---

<img src="https://github.com/pavjacko/renative/blob/master/docs/images/ic_macos.png?raw=true" width=50 height=50 />

## macOS

![](https://img.shields.io/badge/Mac-yes-brightgreen.svg)
![](https://img.shields.io/badge/Windows-n/a-lightgrey.svg)
![](https://img.shields.io/badge/Ubuntu-n/a-lightgrey.svg)

<table>
<tr>
    <th colspan="3">macOS</th>
  </tr>
  <tr>
    <td><img src="https://live.staticflickr.com/65535/48288729341_c25b654eb3_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48289171076_0d8cf7b7cb_o.gif" width="300"></td>
    <td><img src="https://live.staticflickr.com/65535/48288929521_833cdc0cef_o.gif" width="300"></td>
  </tr>
</table>

-   support for OSX/macOS
-   Based on Electron

#### Requirements

-   n/a

#### Project Configuration

| Feature          |  Version  |
| ---------------- | :-------: |
| electron         |  `2.0.0`  |
| react-native-web |  `0.9.9`  |
| electron-builder | `20.28.2` |

#### Run

```
rnv run -p macos
```

#### Deploy on Electron Simulator

This will run production version on your simulator (not connected to devserver)
You can configure each `buldScheme` ie `-s release` in your config file `./appConfigs/<YOUR_APP_CONFIG>/config.json`

```
rnv run -p macos -s release
```

---
