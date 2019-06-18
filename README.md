# renative-template-chat

<p align='center'>
  <img src="https://live.staticflickr.com/65535/48060712588_fc802ab218_o.png" width="450">
  <img src="https://live.staticflickr.com/65535/48060667311_7e37269807_o.png" width="450">
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

<img src="https://github.com/pavjacko/renative/blob/master/docs/ic_configuration.png?raw=true" width=50 height=50 />

## Firebase Setup

1. Create Firebase project: https://firebase.google.com/docs/storage/web/start

2. Get your Firebase config file or object: https://support.google.com/firebase/answer/7015592

## Configuration

`rnv` will create Firebase config file at this location: `<your-project>/projectConfig/firebase.js`

Open the file and edit Firebase configuration with:

```
const config = {s
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>',
  appId: '<your-app-id>',
};

