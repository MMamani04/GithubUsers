import React, {useEffect, useState} from 'react';

import {Divider} from '@rneui/themed';
import {View} from 'react-native';

import {UserDetail} from '@components/UserDetail';
import commonStyles from '@constants/styles';
import {IUser} from '@models/user';
import {RootNavigatorProps} from '@navigation/RootNavigator';
import {fetchUser} from '@services/users';

export default ({
  navigation,
  route: {
    params: {username},
  },
}: RootNavigatorProps<'User'>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    fetchUser(username)
      .then(result => {
        setUser(result);
        setIsLoading(false);
      })
      .catch(() => {
        navigation.goBack();
      });
    setIsLoading(false);
  }, [navigation, username]);

  if (!user) {
    return;
  }
  return (
    <View style={commonStyles.screenContainer}>
      <UserDetail isLoading={isLoading} user={user} />
      <Divider />
    </View>
  );
};
