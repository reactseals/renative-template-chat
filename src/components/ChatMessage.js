import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../platformAssets/runtime/chat.styles';

const ChatMessage = ({ message, belongsToUser }) =>
    // should refactor styling
    belongsToUser ? (
        <View style={styles.userMessageContainer}>
            <Text style={styles.userNicknameText}>{message.nickname}</Text>
            <View style={styles.userMessage}>
                <Text style={styles.userText}>{message.msg}</Text>
            </View>
        </View>
    ) : (
        <View style={styles.messageContainer}>
            <Text style={styles.nicknameText}>{message.nickname}</Text>
            <View style={styles.message}>
                <Text style={styles.text}>{message.msg}</Text>
            </View>
        </View>
    );

export default ChatMessage;
