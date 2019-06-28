import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity, Image,
} from 'react-native';
import { Icon } from 'renative';
import EmojiPicker from 'emoji-picker-react';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../themes/greyTheme/chat.styles';
import firebase from '../../projectConfig/firebase';
import colors from '../themes/greyTheme/colors';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      email: '',
      msg: '',
      messages: {},
      isUserLaggedIn: null,
      emojiClicked: null,
      avatar: null,
    };

    // Chat room ref
    this.chatRoom = firebase.database().ref().child('chatrooms').child('global');

    // Login info ref
    this.loginInfo = firebase.database().ref().child('nicknames');

    // Avatar info ref
    this.avatarInfo = firebase.storage().ref().child('images');

    // Handle new messages
    this.handleNewMessages = (snap) => {
      // Update state if not null
      if (snap.val()) this.setState({ messages: snap.val() });
    };
  }

  componentDidMount() {
    this.chatRoom.on('value', this.handleNewMessages);
  }

  componentWillUnmount() {
    this.chatRoom.off('value', this.handleNewMessages);
  }

  // Add nickname to state
  handleNickname = (text) => {
    this.setState({ nickname: text });
  }

  // Add email to state
  handleEmail = (text) => {
    this.setState({ email: text });
  }

  // Login
  handleLogin = (nickname, email, avatar) => {
    this.loginInfo.push({ nickname, email, avatar });
    this.setState({ isUserLaggedIn: true });
  };

  // Add message to state
  handleMessage = (text) => {
    this.setState({ msg: text });
  }

  // Push messsage on 'Enter' press
  handleKeyPress = (e) => {
    const { msg, nickname, avatar } = this.state;
    if (msg.trim() !== '' && e.key === 'Enter') {
      // Send the message from chat input field
      this.chatRoom.push({
        nickname,
        msg,
        avatar,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
    }
  };

  // Push messsage on press
  handleButtonPress = () => {
    const { msg, nickname, avatar } = this.state;
    if (msg.trim() !== '') {
    // Send the message from chat input field
      this.chatRoom.push({
        nickname,
        msg,
        avatar,
      });
      // Clear chat message input field
      this.setState({ msg: '' });
    }
  }

  handleEmoji = (emojiClicked) => {
    if (!emojiClicked) {
      this.setState({ emojiClicked: true });
    } else {
      this.setState({ emojiClicked: null });
    }
  }


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

  inactiveStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: 0,
      },
    });
  }

  test = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then((image) => {
      this.setState({ avatar: image });
    });
  }


  render() {
    const {
      nickname, email, msg, messages, isUserLaggedIn, emojiClicked, avatar,
    } = this.state;
    if (!isUserLaggedIn) {
      return (
        <View style={styles.loginContainer}>


          {avatar ? (
            <TouchableOpacity
              onPress={() => this.test()}
            >
              <Image style={{ width: 100, height: 100 }} borderRadius={50} source={{ uri: `${avatar.path}` }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.test()}
            >
              <Image style={{ width: 100, height: 100 }} source={require('../assets/img/avatarIconGrey.png')} />
            </TouchableOpacity>
          )}

          <TextInput
            ref={component => this.nicknameInput = component}
            onFocus={() => this.activeStyle(this.nicknameInput)}
            onBlur={() => this.inactiveStyle(this.nicknameInput)}
            style={styles.loginInput}
            underlineColorAndroid="transparent"
            placeholder="Nickname"
            placeholderTextColor={colors.activeColorPrimary}
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
            placeholderTextColor={colors.activeColorPrimary}
            selectionColor={colors.activeColorPrimary}
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.handleLogin(nickname, email, avatar)}
          >
            <Text style={styles.userText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.chatContainerWeb}>
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
                  {avatar ? (
                    <View style={styles.userMessageContainerWithAvatar}>
                      <View style={styles.userMessageWithAvatar}>
                        <Text style={styles.userText}>{messages[message].msg}</Text>
                      </View>
                      <Image style={{ width: 60, height: 60 }} borderRadius={30} source={{ uri: `${avatar.path}` }} />
                    </View>
                  ) : (
                    <View style={styles.userMessageNoAvatar}>
                      <Text style={styles.userNicknameText}>{messages[message].nickname}</Text>
                      <Text style={styles.userText}>{messages[message].msg}</Text>
                    </View>
                  )}
                </View>

              ) : (
                <View style={styles.message}>
                  <Text style={styles.nicknameText}>{messages[message].nickname}</Text>
                  <Text style={styles.text}>{messages[message].msg}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainerWeb}>

          <Icon
            iconFont="fontAwesome"
            iconName="smile-o"
            iconColor={colors.activeColorPrimary}
            style={{
              width: 30, height: 30, alignSelf: 'center', marginLeft: 10,
            }}
            onPress={() => { this.handleEmoji(emojiClicked); }}
          />

          <Icon
            iconFont="fontAwesome"
            iconName="paperclip"
            iconColor={colors.activeColorPrimary}
            style={{
              width: 30, height: 30, alignSelf: 'center', marginLeft: 10,
            }}
            onPress={() => { this.handleButtonPress(); }}
          />

          <TextInput
            ref={component => this.messageInput = component}
            onFocus={() => this.activeStyle(this.messageInput)}
            onBlur={() => this.inactiveStyle(this.messageInput)}
            value={msg}
            style={styles.chatInput}
            selectionColor={colors.activeColorPrimary}
            placeholder="Type a message ..."
            placeholderTextColor={colors.activeColorPrimary}
            outline="none"
            onChangeText={this.handleMessage}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />

          <Icon
            iconFont="ionicons"
            iconName="md-send"
            iconColor={colors.activeColorPrimary}
              // style={styles.icon}
            style={{ width: 35, height: 35, alignSelf: 'center' }}
            onPress={() => { this.handleButtonPress(); }}
          />
        </View>

        {emojiClicked ? (
          <EmojiPicker onEmojiClick={console.log('test')} />
        ) : (
          null
        )}
      </View>
    );
  }
}
