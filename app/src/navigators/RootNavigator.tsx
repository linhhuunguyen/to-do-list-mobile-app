import React, {useContext, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ROUTE_KEY} from './routers';
import {HomeScreen, LoginScreen, RegisterScreen} from '../screens';
import {AuthContext} from '../context/AuthContext';
import {View, ActivityIndicator} from 'react-native';

export type RootStackScreensParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type RootStackScreens = keyof RootStackScreensParams;

export type RootStackScreenProps<T extends RootStackScreens> =
  NativeStackScreenProps<RootStackScreensParams, T>;

export const {Navigator, Screen} =
  createNativeStackNavigator<RootStackScreensParams>();

const RootNavigator = () => {
  const navigationRef = useRef(null);
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>;
  }

  console.log('tesst', userToken);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          gestureEnabled: true,
        }}>
        {userToken !== null ? (
          <>
            <Screen name={ROUTE_KEY.HomeScreen} component={HomeScreen} />
          </>
        ) : (
          <>
            <Screen name={ROUTE_KEY.LoginScreen} component={LoginScreen} />
            <Screen
              name={ROUTE_KEY.RegisterScreen}
              component={RegisterScreen}
            />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
