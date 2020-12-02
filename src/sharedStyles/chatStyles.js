import { StyleSheet } from 'react-native';
import { isPlatformWeb, isPlatformAndroid, isPlatformMacos } from 'renative';
import colors from '../../platformAssets/runtime/colors.json';
import fonts from '../../platformAssets/runtime/chatFonts.json';

let position;
let marginBottom;
let height;
let fontFamily;
let marginTop;
let loginContainerHeight;

if (isPlatformWeb) {
    position = 'fixed';
    marginBottom = 30;
    height = '100vh - 40';
    loginContainerHeight = '100vh';
}

if (isPlatformAndroid) {
    fontFamily = fonts.Roboto;
}

if (isPlatformMacos) {
    marginTop = 40;
    loginContainerHeight = '100vh';
    height = '100vh';
}

export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
        minHeight: loginContainerHeight,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        position,
        bottom: 0,
        backgroundColor: colors.backgroundColor,
    },
    loginInput: {
        margin: 15,
        height: 40,
        width: 200,
        borderColor: colors.activeColorSecondary,
        borderWidth: 1,
        alignItems: 'center',
        color: colors.textColor,
        textAlign: 'center',
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: colors.activeBackgroundColor,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 3,
    },
    buttonText: {
        color: colors.buttonTextColor,
    },
    chatContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        marginBottom,
        maxHeight: height,
        minHeight: height,
    },
    chatMessagesContainer: {
        marginTop,
    },
    chatInput: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 10,
        borderColor: colors.activeColorSecondary,
        borderWidth: 1,
        alignItems: 'center',
        color: colors.textColor,
        textAlign: 'left',
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
        fontFamily,
        marginLeft: 8,
    },
    text: {
        color: colors.chatTextColor,
    },
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
        fontFamily,
        marginRight: 8,
    },
    userText: {
        color: colors.textColor,
        textAlign: 'right',
    },
});
