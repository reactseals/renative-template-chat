import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from 'renative';
import styles from './sharedStyles/welcomeStyles';
import splashImg from '../platformAssets/runtime/logoChat.png';
/* import colors from '../platformAssets/runtime/colors';
 */
const WelcomeScreen = (props) => {
    const navigate = useNavigate(props);

    // Set button active style
    /*     const buttonActiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeColorTertiary,
                outline: 'none',
            },
        });
    };

    // Set button inactive style
    const buttonInactiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeBackgroundColor,
            },
        });
    }; */

    return (
        <SafeAreaView style={styles.container}>
            <Image source={splashImg} style={styles.img} resizeMode="contain" />

            <TouchableOpacity
                /*              ref={(component) => (button = component)}
                onFocus={() => buttonActiveStyle(button)}
                onBlur={() => buttonInactiveStyle(button)} */
                style={styles.button}
                onPress={() => navigate('auth', '/auth')}
            >
                <Text style={styles.buttonText}>Let&apos;s Chat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
