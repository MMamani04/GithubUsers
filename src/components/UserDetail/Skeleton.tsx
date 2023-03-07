import React from 'react';

import {Skeleton} from '@rneui/themed';
import {View} from 'react-native';

import spacing from '@constants/spacing';
import commonStyles from '@constants/styles';

import styles from './styles';

export default (
  <View style={commonStyles.row}>
    <View style={styles.avatarContainer}>
      <Skeleton circle width={64} height={64} />
    </View>
    <View style={styles.textContainer}>
      <Skeleton width={150} height={20} />
      <Skeleton width={150} height={10} style={{marginTop: spacing.XL}} />
    </View>
  </View>
);
