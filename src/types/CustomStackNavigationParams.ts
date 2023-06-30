import {NavigatorScreenParams} from '@react-navigation/native';

export type CustomBottomTabNavigationParams = {
  Home: NavigatorScreenParams<CustomStackNavigationParams>;
  Push: NavigatorScreenParams<CustomStackNavigationParams>;
  Notification: NavigatorScreenParams<CustomStackNavigationParams>;
  Follow: NavigatorScreenParams<CustomStackNavigationParams>;
  MyChannel: NavigatorScreenParams<CustomStackNavigationParams>;
  Event: NavigatorScreenParams<CustomStackNavigationParams>;
};

export type CustomStackNavigationParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};
