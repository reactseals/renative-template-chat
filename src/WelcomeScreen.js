import React, { Component } from 'react';
import {
    SafeAreaView, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from '../platformAssets/runtime/welcome.styles';
import colors from '../platformAssets/runtime/colors';
import { useNavigate } from 'renative'


console.disableYellowBox = true;

export default class Home extends Component {
    // Set button active style
    buttonActiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeColorTertiary,
                outline: 'none',
            },
        });
    };

    // Set button inactive style
    buttonInactiveStyle = (element) => {
        element.setNativeProps({
            style: {
                backgroundColor: colors.activeBackgroundColor,
            },
        });
    };

    render() {
        const navigate = useNavigate(this.props);

        return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../platformAssets/runtime/logoChat.png')}
                    style={styles.img}
                    resizeMode="contain"
                />

                <TouchableOpacity
                    ref={component => this.button = component}
                    onFocus={() => this.buttonActiveStyle(this.button)}
                    onBlur={() => this.buttonInactiveStyle(this.button)}
                    style={styles.button}
                    onPress={() => navigate('chat', '/chat')}
                >
                    <Text style={styles.buttonText}>
                        Let's Chat
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
