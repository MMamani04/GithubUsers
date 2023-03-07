import React, {memo} from 'react';

import {Avatar, Text} from '@rneui/base';
import {View} from 'react-native';

import {IUser} from '@models/user';

import Skeleton from './Skeleton';
import styles from './styles';

export interface Props {
  isLoading: boolean;
  user: IUser;
}

const Users = ({isLoading, user}: Props): JSX.Element => {
  return (
    <View style={styles.rowContainer}>
      {isLoading ? (
        Skeleton
      ) : (
        <>
          <View style={styles.avatarContainer}>
            <Avatar size={64} rounded source={{uri: user.avatarUrl}} />
          </View>
          <View style={styles.textContainer}>
            <Text h4>{user.name}</Text>
            <Text>{user.location}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default memo(Users);
