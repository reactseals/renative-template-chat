import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { isPlatformAndroid, isPlatformMacos, isPlatformWeb, usePop } from 'renative';
import BackButtonMac from '../../components/BackButton';
import { theme as colors } from '../../../platformAssets/renative.runtime.json';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import textInputStyles from '../../sharedStyles/textInputStyles';
import buttonStyles from '../../sharedStyles/buttonStyles';
import { useAuth } from '../../context/auth';

const RegisterScreen = (props) => {
    const pop = usePop(props);
    const auth = useAuth();
    const [authFormInfo, setAuthFormInfo] = useState({
        nickname: '',
        email: '',
        password: '',
    });
    // Add required field to state
    const handleChange = (value, propertyName) => {
        setAuthFormInfo((prevState) => ({ ...prevState, [propertyName]: value }));
    };
    // Sign Up
    const handleSignUp = () => {
        const { nickname, email, password } = authFormInfo;

        if (nickname && email && password) {
            auth.signUp(email, password, nickname).then((usr) => {
                if (usr) {
                    pop();
                }
            });
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={isPlatformAndroid ? null : 'padding'}
            style={styles.loginContainer}
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
            <CustomTextInput
                blurredStyle={textInputStyles.inActive}
                focusedStyle={textInputStyles.active}
                style={styles.loginInput}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor={colors.activeColorPrimary}
                selectionColor={colors.activeColorPrimary}
                autoCapitalize="none"
                onChangeText={handleChange}
                secureTextEntry
                name="password" // name of the property in the state object that is gonna be edited
            />

            <CustomTouchableOpacity
                blurredStyle={buttonStyles.inActive}
                focusedStyle={buttonStyles.active}
                style={styles.loginButton}
                onPress={() => handleSignUp()}
            >
                <Text style={styles.buttonText}>Register</Text>
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
export default RegisterScreen;
