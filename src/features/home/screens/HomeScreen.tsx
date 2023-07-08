import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';
import Banner from '../components/Banner';
import CustomCalendar from '../components/CustomCalendar';
import {ScheduleDto, UserDto} from 'src/types/CustomData';
import {User, UserSchedule} from 'src/types/DummyData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [user, setUser] = useState<UserDto>({});
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userSchedule, setUserSchedule] = useState<Array<ScheduleDto>>([]);

  const getUserInfo = () => {
    setUser(User);
    setUserSchedule(UserSchedule);
  };

  const getLoginStatus = async () => {
    const loginStatus = await AsyncStorage.getItem('isLogin');

    if (loginStatus === 'true') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    getUserInfo();
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      getLoginStatus();
    });
  });

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem('isLogin');
          RNRestart.restart();
        }}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
      <BannerContainer>
        <Banner user={user} userSchedule={userSchedule} isLogin={isLogin} />
      </BannerContainer>
      <CustomCalendar userSchedule={userSchedule} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 30px 0;
  background-color: white;
`;

const BannerContainer = styled.View`
  position: relative;
  z-index: 1000;
`;

export default HomeScreen;
