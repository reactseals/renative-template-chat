import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Activity.styles';
import colors from '../../themes/colors/lightGreenColors';

const Activity = () => (
  <View style={styles.activityindicator}>
    <ActivityIndicator size="large" color={colors.activeBackgroundColor} />
  </View>
);

export default Activity;
