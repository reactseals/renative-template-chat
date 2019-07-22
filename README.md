# renative-template-chat

<p align='center'>
  <img src="https://live.staticflickr.com/65535/48060667311_7e37269807_o.png" width="200">
  <img src="https://live.staticflickr.com/65535/48255395781_38ce801a92_o.png" width="200">
  <img src="https://live.staticflickr.com/65535/48060712588_fc802ab218_o.png" width="200">
</p>

Chat Template for [ReNative](https://www.npmjs.com/package/renative)

This provides the example multi platform app with following functionality demonstrated:

- Firebase Integration
- Firebase Realtime Database Usage
- Routing and Navigation using React Navigation
- Images
- Vector Icons
- Buttons with interactions
- State changes

## 🚀 Quick Start
---

```
rnv new
 
...
 
? What template to use? => '@reactseals/renative-template-chat'
 
```
---
<img src="https://github.com/pavjacko/renative/blob/master/docs/ic_configuration.png?raw=true" width=50 height=50 />

## Firebase Setup

1. Create Firebase project: https://firebase.google.com/docs/storage/web/start

2. Get your Firebase config file or object: https://support.google.com/firebase/answer/7015592

## Configuration

`rnv` will create Firebase config file at this location: `<your-project>/projectConfig/firebase.js`

### Open the file and edit Firebase configuration with:

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
### Switching Between Different Color Templates

```
$ rnv app configure -c darkGreyChat -u
$ rnv app configure -c lightBlueChat -u
$ rnv app configure -c lightGreenChat -u
```
---
### Supported Platforms
```
iOS, Android, Web, macOS
```
---