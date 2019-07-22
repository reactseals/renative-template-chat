import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../platformAssets/runtime/colors';

const styles = StyleSheet.create({
    activityindicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Activity = () => (
    <View style={styles.activityindicator}>
        <ActivityIndicator size="large" color={colors.activeBackgroundColor} />
    </View>
);

export default Activity;
