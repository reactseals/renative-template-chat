import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import { Picker } from 'emoji-mart';
import { Icon } from 'renative';
import styles from '../../../themes/web/lightBlueThemeWeb/chat.styles';
import firebase from '../../../../projectConfig/firebase';
import Activity from '../../../components/activityBlue';
import colors from '../../../themes/colors/lightBlueColors';

console.disableYellowBox = true;

const chatRoom = firebase.database().ref().child('chatrooms').child('global');
const typing = firebase.database().ref().child('chatrooms').child('typing');
const users = firebase.database().ref().child('chatrooms').child('users');

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      isUserLaggedIn: null,
      nickname: '',
      email: '',
      avatarUserLocal: '',
      avatarUrl: null,
      msg: '',
      messages: {},
      emojiClicked: null,
      imgToUpload: null,
      typingListener: null,
      userInfo: null,
    };
  }

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

  // Get user info
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

  // Handle avatar selection
  handleClick = () => {
    const input = this.refs.input_reader;
    input.click();
  }

  // Add avatar to state
  inputFileChanged = (e) => {
    if (window.FileReader) {
      const file = e.target.files[0];
      const reader = new FileReader();
      // const self = this;
      reader.onload = (r) => {
        this.setState({
          avatarUserLocal: r.target,
        });
      };
      reader.readAsDataURL(file);
      this.setState({ imgToUpload: file });
    } else {
      alert('Sorry, your browser does\'nt support preview');
    }
  }

  // Login
  handleLogin = (nickname, email) => {
    const { imgToUpload } = this.state;
    if (imgToUpload) {
      this.uploadImage(nickname);
    }
    this.setState({ isUserLaggedIn: true });
  };

  // Upload avatar
  uploadImage = (username) => {
    const { imgToUpload } = this.state;
    const imageRef = firebase.storage().ref('images').child(`${username}`);
    imageRef.put(imgToUpload)
      .then(() => {
        this.handleUploadSuccess(imageRef);
      });
  };

  // Set avatar download link
  handleUploadSuccess = (imageRef) => {
    imageRef.getDownloadURL()
      .then(url => this.setState({ avatarUrl: url }));
  }

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
      this.setState({ emojiClicked: null });
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
      this.setState({ emojiClicked: null });
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
      },
    });
  }

  // Set inactive style
  inactiveStyle = (element) => {
    element.setNativeProps({
      style: {
        backgroundColor: colors.backgroundColor,
      },
    });
  }

  render() {
    const {
      msg, messages, emojiClicked, isUserLaggedIn, avatarUserLocal, nickname, email, typingListener, userInfo, avatarUrl,
    } = this.state;
    if (!isUserLaggedIn) {
      return (
        <View style={styles.loginContainer}>
          <View>
            {!avatarUserLocal ? (
              <TouchableOpacity>
                <img src={require('../../../assets/img/avatarIconBlue.png')} height={100} width={100} onClick={this.handleClick} />
                <input type="file" ref="input_reader" style={{ display: 'none' }} onChange={this.inputFileChanged} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <img className="avatarImage" src={avatarUserLocal.result} height={100} width={100} onClick={this.handleClick} />
                <input type="file" ref="input_reader" style={{ display: 'none' }} onChange={this.inputFileChanged} />
              </TouchableOpacity>
            )}
          </View>

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
              this.handleLogin(nickname, email);
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

        </View>
      );
    }


    return (
      <View style={styles.chatContainerWeb}>
        {!messages ? (
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
                          <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: `${avatarUserLocal.result}` }} />
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
                          <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: `${messages[message].avatarUrl}` }} />
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
                <Image style={{ width: 40, height: 40, marginLeft: 10 }} source={require('../../../assets/img/typingAnimationLightBlue.gif')} />
              ) : (
                null
              )}
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
              <Picker
                style={{ position: 'absolute', bottom: '20px', left: '20px' }}
                onClick={emoji => this.setState({ msg: msg + emoji.native })}
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
