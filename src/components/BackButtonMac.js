import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { isPlatformMacos } from 'renative';
import { navigate } from '@reach/router';
import colors from '../../platformAssets/runtime/colors.json';

const BackButtonMac = () =>
    isPlatformMacos ? (
        <View style={styles.backArrowContainer}>
            <TouchableOpacity onPress={() => navigate('/', '/')}>
                <Text style={styles.backArrow}>{'<'}</Text>
            </TouchableOpacity>
        </View>
    ) : null;

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
        marginLeft: 25,
    },
});

export default BackButtonMac;
