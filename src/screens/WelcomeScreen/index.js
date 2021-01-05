import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigate, isPlatformWeb, isPlatformMacos } from 'renative';
import splashImg from '../../../platformAssets/runtime/logoChat.png';
import { theme as colors } from '../../../platformAssets/renative.runtime.json';

const WelcomeScreen = (props) => {
    const navigate = useNavigate(props);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={splashImg} style={styles.img} resizeMode="contain" />

            <TouchableOpacity style={styles.button} onPress={() => navigate('auth', '/auth')}>
                <Text style={styles.buttonText}>Let&apos;s Chat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        width: '100%',
        height: isPlatformWeb || isPlatformMacos ? '100vh' : '100%',
        margin: 0,
        padding: 0,
    },
    img: {
        height: 250,
        width: 250,
    },
    button: {
        backgroundColor: colors.activeBackgroundColor,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 4,
        shadowColor: 'rgba(0, 0, 0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 3,
    },
    buttonText: {
        color: colors.buttonTextColor,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});

export default WelcomeScreen;
