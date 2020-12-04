import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { isPlatformAndroid, useNavigate, isPlatformMacos, isPlatformWeb } from 'renative';
import BackButtonMac from '../../components/BackButtonMac';
import colors from '../../../platformAssets/runtime/colors.json';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import textInputStyles from '../../sharedStyles/textInputStyles';

const AuthScreen = ({ headerHeight, ...props }) => {
    const navigate = useNavigate(props);
    const [authFormInfo, setAuthFormInfo] = useState({
        nickname: '',
        email: '',
    });
    // Add required field to state
    const handleChange = (value, propertyName) => {
        setAuthFormInfo((prevState) => ({ ...prevState, [propertyName]: value }));
    };
    // Login
    const handleLogin = () => {
        const { nickname, email } = authFormInfo;

        if (nickname && email) {
            setAuthFormInfo((prevState) => ({
                ...prevState,
                isUserLoggedIn: true,
            }));
            if (isPlatformMacos) {
                navigate('/chat', {}, { state: { nickname, email } });
            } else {
                navigate(
                    'chat',
                    { pathname: '/chat', query: { nickname, email } }, // NextJS props Query
                    { nickname, email } // React Navigation for mobile Props query
                );
            }
        }
    };

    // in the future export to the json styling configs
    const buttonActiveStyle = {
        backgroundColor: colors.activeColorTertiary,
        outline: 'none',
    };

    // in the future export to the json styling configs
    const buttonInactiveStyle = {
        backgroundColor: colors.activeBackgroundColor,
    };
    return (
        <KeyboardAvoidingView
            behavior={isPlatformAndroid ? null : 'padding'}
            style={styles.loginContainer}
            keyboardVerticalOffset={headerHeight}
        >
            <BackButtonMac />
            <CustomTextInput
                blurredStyle={textInputStyles.inActive}
                focusedStyle={textInputStyles.active}
                style={styles.loginInput}
                underlineColorAndroid="transparent"
                placeholder="Nickname"
                placeholderTextColor={colors.activeColorPrimary}
                selectionColor={colors.activeColorPrimary}
                autoCapitalize="none"
                onChangeText={handleChange}
                name="nickname" // name of the property in the state object that is gonna be edited
            />

            <CustomTextInput
                blurredStyle={textInputStyles.inActive}
                focusedStyle={textInputStyles.active}
                style={styles.loginInput}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor={colors.activeColorPrimary}
                selectionColor={colors.activeColorPrimary}
                autoCapitalize="none"
                onChangeText={handleChange}
                name="email" // name of the property in the state object that is gonna be edited
            />

            <CustomTouchableOpacity
                blurredStyle={buttonInactiveStyle}
                focusedStyle={buttonActiveStyle}
                style={styles.loginButton}
                onPress={() => handleLogin()}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </CustomTouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
        minHeight: isPlatformWeb || isPlatformMacos ? '100vh' : null,
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
});
export default AuthScreen;
