import React, {useEffect, useState} from 'react';

import {Text} from '@rneui/themed';
import {View} from 'react-native';

import Users from '@components/Users/Users';
import spacing from '@constants/spacing';
import commonStyles from '@constants/styles';
import {IPartialUser} from '@models/user';
import {fetchUsers} from '@services/users';

import styles from './styles';

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IPartialUser[]>([]);

  useEffect(() => {
    fetchUsers().then(result => {
      setUsers(result);
      setIsLoading(false);
    });
    setIsLoading(false);
  }, []);

  return (
    <View style={commonStyles.screenContainer}>
      <Text h4>Top 5 GitHub Users</Text>
      <Text style={styles.subtitle}>
        Tap the username to see more information
      </Text>
      <Users isLoading={isLoading} marginTop={spacing.MD} users={users} />
    </View>
  );
};
