import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { isPlatformAndroid } from 'renative';
import colors from '../../platformAssets/runtime/colors.json';
import fonts from '../../platformAssets/runtime/chatFonts.json';

const ChatMessage = ({ message, belongsToUser }) =>
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

const styles = StyleSheet.create({
    userMessageContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'flex-end',
        maxWidth: '98.5%',
    },
    userMessage: {
        backgroundColor: colors.userMessageBackground,
        borderRadius: 20,
        padding: 8,
        alignSelf: 'flex-end',
        maxWidth: '100%',
    },
    userNicknameText: {
        color: colors.userNicknameColor,
        fontWeight: 'bold',
        marginBottom: 3,
        textAlign: 'right',
        fontFamily: isPlatformAndroid ? fonts.Roboto : fonts.GillSans,
        marginRight: 8,
    },
    userText: {
        color: colors.textColor,
        textAlign: 'right',
    },
    messageContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'flex-start',
        maxWidth: '98.5%',
    },
    message: {
        backgroundColor: colors.messageBackground,
        borderRadius: 20,
        padding: 8,
        alignSelf: 'flex-start',
        maxWidth: '100%',
    },
    nicknameText: {
        color: colors.nicknameColor,
        fontWeight: 'bold',
        marginBottom: 3,
        fontFamily: isPlatformAndroid ? fonts.Roboto : fonts.GillSans,
        marginLeft: 8,
    },
    text: {
        color: colors.chatTextColor,
    },
});
export default ChatMessage;
