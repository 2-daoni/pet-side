import React, {useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const checkLoginState = async () => {
    const isLogin = await AsyncStorage.getItem('isLogin');
    console.log('isLogin', isLogin);
    if (isLogin) {
      //
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return <View></View>;
};

export default HomeScreen;
