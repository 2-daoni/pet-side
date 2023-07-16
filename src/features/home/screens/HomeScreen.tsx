import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';
import Banner from '../components/Banner';
import CustomCalendar from '../components/CustomCalendar';
import {ScheduleDto, UserDto} from 'src/types/CustomData';
import {UserSchedule} from 'src/types/DummyData';
import {Text, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';
import {useStore} from 'src/stores/StoreProvider';

const HomeScreen = () => {
  const {authStore} = useStore();
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [user, setUser] = useState<UserDto>({});
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userSchedule, setUserSchedule] = useState<Array<ScheduleDto>>([]);

  const getUserInfo = () => {
    setUser(authStore.currentUser);
    setUserSchedule(UserSchedule);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLogin(authStore.isLogin);
    getUserInfo();
  }, [authStore.isLogin]);

  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      setIsLogin(authStore.isLogin);
    });
  }, []);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          authStore.setIsLogin(false);
          RNRestart.restart();
        }}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
      <BannerContainer>
        <Banner user={user} userSchedule={userSchedule} isLogin={isLogin} />
      </BannerContainer>
      <CustomCalendar userSchedule={userSchedule} isLogin={isLogin} />
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
