import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from 'renative';
import styles from './sharedStyles/welcomeStyles';
import splashImg from '../platformAssets/runtime/logoChat.png';

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

export default WelcomeScreen;
