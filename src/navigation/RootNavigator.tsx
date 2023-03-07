import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type {StackScreenProps} from '@react-navigation/stack';

import colors from '@constants/colors';
import {Home} from '@screens/Home';
import {User} from '@screens/User';

type RootNavigatorParamList = {
  Home: undefined;
  User: {username: string};
};

export type RootNavigatorProp =
  NativeStackNavigationProp<RootNavigatorParamList>;

export type RootNavigatorProps<T extends keyof RootNavigatorParamList> =
  StackScreenProps<RootNavigatorParamList, T>;

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.BLACK,
        },
        headerTitleAlign: 'center',
        headerTintColor: colors.WHITE,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  </NavigationContainer>
);
