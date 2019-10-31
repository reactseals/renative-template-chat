import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { IS_MACOS } from 'rnv-platform-info';
import colors from '../platformAssets/runtime/colors';

const styles = StyleSheet.create({
    backArrowContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        backgroundColor: colors.backgroundColor,
        width: '100%',
        height: 40,
        borderBottomColor: colors.activeColorSecondary,
        borderBottomWidth: 1,
    },
    backArrow: {
        color: colors.textColor,
        fontSize: 30,
        marginLeft: 25
    }
});

const BackButtonMac = props => (
    (IS_MACOS ? (
        <View style={styles.backArrowContainer}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Welcome')}
            >
                <Text style={styles.backArrow}>
                    {'<'}
                </Text>
            </TouchableOpacity>
        </View>
    ) : (null))
);

export default BackButtonMac;
