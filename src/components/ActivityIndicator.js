import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../platformAssets/runtime/colors.json';

const Activity = () => (
    <View style={styles.activityindicator}>
        <ActivityIndicator size="large" color={colors.activeBackgroundColor} />
    </View>
);

const styles = StyleSheet.create({
    activityindicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Activity;
