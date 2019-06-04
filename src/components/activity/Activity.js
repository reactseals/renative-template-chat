import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Activity.styles';

const Activity = () => (
  <View style={styles.activityindicator}>
    <ActivityIndicator size="large" color="#EDF2F4" />
  </View>
);

export default Activity;
