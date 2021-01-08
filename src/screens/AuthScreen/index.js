import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { isPlatformAndroid, useNavigate, isPlatformMacos, isPlatformWeb } from 'renative';
import BackButtonMac from '../../components/BackButton';
import { theme as colors } from '../../../platformAssets/renative.runtime.json';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import { useAuth } from '../../AuthContext';

const AuthScreen = (props) => {
    const navigate = useNavigate(props);
    const auth = useAuth();
    const [authFormInfo, setAuthFormInfo] = useState({
        password: '',
        email: '',
    });
    // Add required field to state
    const handleChange = (value, propertyName) => {
        setAuthFormInfo((prevState) => ({ ...prevState, [propertyName]: value }));
    };
    // Login
    const handleLogin = () => {
        const { password, email } = authFormInfo;

        if (password && email) {
            auth.signIn(email, password).then((usr) => {
                if (usr) {
                    if (isPlatformMacos) {
                        navigate('/chat');
                    } else {
                        navigate('chat', { pathname: '/chat' });
                    }
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

            <CustomTouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Sign In</Text>
            </CustomTouchableOpacity>
            <Text
                style={{ color: colors.textColor, paddingTop: 10 }}
                onPress={() => {
                    // eslint-disable-next-line no-unused-expressions
                    isPlatformMacos
                        ? navigate('/register')
                        : navigate('register', { pathname: '/register' });
                }}
            >
                Don&apos;t have an account? Click here to register
            </Text>
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
