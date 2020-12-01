import React, { useState } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { isPlatformWeb, isPlatformAndroid, useNavigate, isPlatformMacos } from 'renative';
import styles from '../platformAssets/runtime/chat.styles';
import BackButtonMac from './BackButtonMac';
import colors from '../platformAssets/runtime/colors';
import CustomTextInput from './CustomTextInput';
import CustomTouchableOpacity from './CustomTouchableOpacity';

const AuthScreen = ({ headerHeight, ...props }) => {
    const navigate = useNavigate(props);
    const [authFormInfo, setAuthFormInfo] = useState({
        nickname: '',
        email: '',
        isUserLoggedIn: false,
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
            /*             if (isPlatformWeb) {

            } else {
                navigate('chat', '/chat', { nickname, email, ...props });
            } */
            if (isPlatformMacos) {
                navigate('/chat', {}, { state: { nickname, email } });
            } else {
                navigate(
                    'chat',
                    { pathname: '/chat', query: { nickname, email, ...props } }, // NextJS props Query
                    { nickname, email, ...props } // React Navigation for mobile Props query
                );
            }

            /*  props.navigation.navigate('chat', { nickname, email, ...props }); */

            // console.log(nickname, 'pushed nickname');
            // router.push({
            //     pathname: '/chat',
            //     query: { nickname, email, ...props },
            // });
        }
        /*         setTimeout(() => {
            this.setState({ initialUserLogin: false });
        }, 1000); */
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

    // in the future export to the json styling configs
    const textInputActiveStyle = {
        backgroundColor: colors.activeColorSecondary,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        outline: 'none',
    };

    // in the future export to the json styling configs
    const textInputInactiveStyle = {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: isPlatformWeb ? 'none' : 0,
    };
    return (
        <KeyboardAvoidingView
            behavior={isPlatformAndroid ? null : 'padding'}
            style={styles.loginContainer}
            keyboardVerticalOffset={headerHeight}
        >
            <Text>
                {`${authFormInfo.email} ${authFormInfo.nickname} ${authFormInfo.isUserLoggedIn}`}
            </Text>
            <BackButtonMac />
            <CustomTextInput
                blurredStyle={textInputInactiveStyle}
                focusedStyle={textInputActiveStyle}
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
                blurredStyle={textInputInactiveStyle}
                focusedStyle={textInputActiveStyle}
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

export default AuthScreen;
