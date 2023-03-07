import React, {memo, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, Text} from '@rneui/base';
import {View} from 'react-native';

import commonStyles from '@constants/styles';
import {IPartialUser} from '@models/user';
import {RootNavigatorProp} from '@navigation/RootNavigator';

import Skeleton from './Skeleton';
import styles from './styles';

interface Props {
  isLoading: boolean;
  users: IPartialUser[];
  marginTop?: number;
}

const Users = ({isLoading, users, marginTop}: Props): JSX.Element => {
  const {navigate} = useNavigation<RootNavigatorProp>();

  const handleOnPress = useCallback(
    (username: string) => {
      navigate('User', {username});
    },
    [navigate],
  );

  const renderUsers = useCallback(() => {
    if (!users.length)
      return (
        <View style={styles.item}>
          <Text>There are no users</Text>
        </View>
      );
    return users.map((user, index) => (
      <View style={styles.item}>
        <Button
          onPress={() => handleOnPress(user.username)}
          size="sm">{`User #${index + 1}`}</Button>
      </View>
    ));
  }, [handleOnPress, users]);

  return (
    <View
      style={[
        commonStyles.row,
        styles.container,
        marginTop ? {marginTop} : {},
      ]}>
      {isLoading ? Skeleton : renderUsers()}
    </View>
  );
};

export default memo(Users);
