import React from 'react';

import {Skeleton} from '@rneui/themed';
import {View} from 'react-native';

import commonStyles from '@constants/styles';

import styles from './styles';

export default (
  <View style={commonStyles.row}>
    {Array(3)
      .fill(null)
      .map(() => (
        <View style={styles.item}>
          <Skeleton animation="wave" width={70} height={30} />
        </View>
      ))}
  </View>
);
