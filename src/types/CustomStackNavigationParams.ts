import {NavigatorScreenParams} from '@react-navigation/native';
import {PetDictionaryDto, UserDto} from './CustomData';

export type CustomBottomTabNavigationParams = {
  Home: NavigatorScreenParams<CustomStackNavigationParams>;
  Push: NavigatorScreenParams<CustomStackNavigationParams>;
  Notification: NavigatorScreenParams<CustomStackNavigationParams>;
  Follow: NavigatorScreenParams<CustomStackNavigationParams>;
  MyChannel: NavigatorScreenParams<CustomStackNavigationParams>;
  Event: NavigatorScreenParams<CustomStackNavigationParams>;
};

export type CustomStackNavigationParams = {
  LoginScreen: {email?: string; password?: string};
  RegisterScreen: undefined;
  PetContentsScreen: undefined;
  MyScreen: undefined;
  HomeScreen: undefined;
  CommunityScreen: undefined;
  PetDetailScreen: {petContents: PetDictionaryDto};
  AccountModifyScreen: {user: UserDto};
};
