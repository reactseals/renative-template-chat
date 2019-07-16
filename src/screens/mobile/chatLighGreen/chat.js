import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { Icon } from 'renative';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { IS_IOS } from 'rnv-platform-info';
import styles from '../../../themes/mobile/lightGreenThemeMobile/chat.styles';
import firebase from '../../../../projectConfig/firebase';
import Activity from '../../../components/activityGreen';
import colors from '../../../themes/colors/lightGreenColors';

console.disableYellowBox = true;

const { Blob } = RNFetchBlob.polyfill;
const { fs } = RNFetchBlob;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const chatRoom = firebase.database().ref().child('chatrooms').child('global');
const typing = firebase.database().ref().child('chatrooms').child('typing');
const users = firebase.database().ref().child('chatrooms').child('users');

export default class Chat extends Component {
  state = {
    isUserLaggedIn: null,
    nickname: '',
    email: '',
    avatarUserLocal: null,
    avatarUrl: null,
    msg: '',
    messages: {},
    emojiClicked: null,
    typingListener: null,
    userInfo: null,
  };

  componentDidMount() {
    chatRoom.on('value', this.getNewMessages);
    typing.on('value', this.getTypingListener);
    users.on('value', this.getUserInfo);
  }

  componentWillUnmount() {
    chatRoom.off('value', this.getNewMessages);
    typing.off('value', this.getTypingListener);
    users.off('value', this.getUserInfo);
  }

  // Get User Info
  getUserInfo = (snap) => {
    // Update state if not null
    if (snap.val()) this.setState({ userInfo: snap.val() });
  };

  // Get new messages
  getNewMessages = (snap) => {
    // Update state if not null
    if (snap.val()) this.setState({ messages: snap.val() });
  };

  // Get typing listener
  getTypingListener = (snap) => {
    // Update state if not null
    if (snap.val().typingListener === true) {
      this.setState({ typingListener: snap.val().typingListener });
    } else {
      this.setState({ typingListener: null });
    }
  };

  // Add nickname to state
  handleNickname = (text) => {
    this.setState({ nickname: text });
  }

  // Add email to state
  handleEmail = (text) => {
    this.setState({ email: text });
  }

  // Add message to state
  handleMessage = (text) => {
    const { nickname, email } = this.state;
    this.setState({ msg: text });
    users.set({ nickname, email });
    this.handleTyping(text);
  }

  // Set typing listener
  handleTyping = (text) => {
    if (text) {
      typing.set({ typingListener: true });
    } else {
      typing.set({ typingListener: false });
    }
  }

  // Add avatar to state
  setAvatar = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then((image) => {
      this.setState({ avatarUserLocal: image });
    });
  }

  // Login
  handleLogin = (nickname, avatarUserLocal) => {
    if (avatarUserLocal) {
      this.uploadImage(nickname, avatarUserLocal.sourceURL)
        .then((url) => { this.setState({ avatarUrl: url }); })
        .catch(error => console.log(error));
    }
    this.setState({ isUserLaggedIn: true });
  };

  // Upload avatar
  uploadImage = (username, uri, mime = 'application/octet-stream') => new Promise((resolve, reject) => {
    const uploadUri = IS_IOS ? uri.replace('file://', '') : uri;
    let uploadBlob = null;

    const imageRef = firebase.storage().ref('images').child(`${username}`);

    fs.readFile(uploadUri, 'base64')
      .then(data => Blob.build(data, { type: `${mime};BASE64` }))
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      });
  })

  // Push messsage on 'Enter' press
  handleKeyPress = (e) => {
    const {
      msg, avatarUrl, nickname, email,
    } = this.state;
    if (msg.trim() !== '' && e.key === 'Enter') {
      // Send the message from chat input field
      chatRoom.push({
        nickname,
        email,
        msg,
        avatarUrl,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
      typing.set({ typingListener: false });
    }
  };

  // Push messsage on press
  handleButtonPress = () => {
    const {
      msg, avatarUrl, nickname, email,
    } = this.state;
    if (msg.trim() !== '') {
    // Send the message from chat input field
      chatRoom.push({
        nickname,
        email,
        msg,
        avatarUrl,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
      typing.set({ typingListener: false });
    }
  }

  // Handle emoji click
  handleEmoji = (emojiClicked) => {
    if (!emojiClicked) {
      this.setState({ emojiClicked: true });
    } else {
      this.setState({ emojiClicked: null });
    }
  }

  // Set active style
  activeStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.activeColorSecondary,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    });
  }

  // Set inactive style
  inactiveStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: 0,
      },
    });
  }


  render() {
    const {
      msg, messages, emojiClicked, isUserLaggedIn, avatarUserLocal, nickname, typingListener, email, userInfo, avatarUrl,
    } = this.state;
    if (!isUserLaggedIn) {
      return (
        <View style={styles.loginContainer}>
          {avatarUserLocal ? (
            <TouchableOpacity
              onPress={() => this.setAvatar()}
            >
              <Image style={{ width: 100, height: 100 }} borderRadius={50} source={{ uri: `${avatarUserLocal.path}` }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.setAvatar()}
            >
              <Image style={{ width: 100, height: 100 }} source={require('../../../assets/img/avatarIconGreen.png')} />
            </TouchableOpacity>
          )}

          <TextInput
            ref={component => this.nicknameInput = component}
            onFocus={() => this.activeStyle(this.nicknameInput)}
            onBlur={() => this.inactiveStyle(this.nicknameInput)}
            style={styles.loginInput}
            underlineColorAndroid="transparent"
            placeholder="Nickname"
            placeholderTextColor={colors.activeColorTertiary}
            selectionColor={colors.activeColorPrimary}
            autoCapitalize="none"
            onChangeText={this.handleNickname}
          />

          <TextInput
            ref={component => this.emailInput = component}
            onFocus={() => this.activeStyle(this.emailInput)}
            onBlur={() => this.inactiveStyle(this.emailInput)}
            style={styles.loginInput}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor={colors.activeColorTertiary}
            selectionColor={colors.activeColorPrimary}
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.handleLogin(nickname, avatarUserLocal, email);
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.chatContainer}>
        {!userInfo ? (
          <Activity />
        ) : (
          <View style={styles.chatContainer}>
            <ScrollView
              ref={(view) => { this.scrollView = view; }}
              onContentSizeChange={() => {
                this.scrollView.scrollToEnd({ animated: true });
              }}
            >
              {Object.keys(messages).map(message => (
                <View key={message}>
                  {nickname === messages[message].nickname ? (
                    <View>
                      {avatarUserLocal ? (
                        <View style={styles.userMessageContainerWithAvatar}>
                          <View style={styles.userMessageWithAvatar}>
                            <Text style={styles.userText}>{messages[message].msg}</Text>
                          </View>
                          <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: `${avatarUserLocal.path}` }} />
                        </View>
                      ) : (
                        <View style={styles.userMessageNoAvatar}>
                          <Text style={styles.userNicknameText}>{messages[message].nickname}</Text>
                          <Text style={styles.userText}>{messages[message].msg}</Text>
                        </View>
                      )}
                    </View>
                  ) : (
                    <View>
                      {messages[message].avatarUrl ? (
                        <View style={styles.messageContainerWithAvatar}>
                          <Image style={{ width: 60, height: 60 }} borderRadius={30} source={{ uri: `${messages[message].avatarUrl}` }} />
                          <View style={styles.messageWithAvatar}>
                            <Text style={styles.text}>{messages[message].msg}</Text>
                          </View>
                        </View>
                      ) : (
                        <View style={styles.message}>
                          <Text style={styles.nicknameText}>{messages[message].nickname}</Text>
                          <Text style={styles.text}>{messages[message].msg}</Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              ))}
              {typingListener && nickname !== userInfo.nickname ? (
                <Image style={{ width: 40, height: 40, marginLeft: 10 }} source={require('../../../assets/img/typingAnimationLightGreen.gif')} />
              ) : (
                null
              )}
            </ScrollView>

            <View style={styles.inputContainer}>
              <Icon
                iconFont="fontAwesome"
                iconName="smile-o"
                iconColor={colors.activeColorPrimary}
                style={{
                  width: 30, height: 30, alignSelf: 'center', marginLeft: 10,
                }}
                onPress={() => { this.handleEmoji(emojiClicked); }}
              />
              <TextInput
                ref={component => this.messageInput = component}
                onFocus={() => this.activeStyle(this.messageInput)}
                onBlur={() => this.inactiveStyle(this.messageInput)}
                value={msg}
                style={styles.chatInput}
                selectionColor={colors.activeColorPrimary}
                placeholder="Type a message ..."
                placeholderTextColor={colors.activeColorTertiary}
                outline="none"
                onChangeText={this.handleMessage}
                onKeyPress={this.handleKeyPress}
                autoFocus
              />
              <Icon
                iconFont="ionicons"
                iconName="md-send"
                iconColor={colors.activeColorPrimary}
                style={{ width: 35, height: 35, alignSelf: 'center' }}
                onPress={() => { this.handleButtonPress(); }}
              />
            </View>
            {emojiClicked ? (
              <EmojiSelector
                style={{ height: 300 }}
                category={Categories.people}
                theme={colors.activeBackgroundColor}
                columns={8}
                showSearchBar={false}
                showHistory={false}
                onEmojiSelected={emoji => this.setState({ msg: msg + emoji })}
              />
            ) : (
              null
            )}
          </View>
        )}
      </View>
    );
  }
}
