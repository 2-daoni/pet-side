import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';
import Banner from '../components/Banner';
import CustomCalendar from '../components/CustomCalendar';
import {ScheduleDto, UserDto} from 'src/types/CustomData';
import {User, UserSchedule} from 'src/types/DummyData';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [user, setUser] = useState<UserDto>({});
  const [userSchedule, setUserSchedule] = useState<Array<ScheduleDto>>([]);

  const getUserInfo = () => {
    setUser(User);
    setUserSchedule(UserSchedule);
  };

  useEffect(() => {
    getUserInfo();
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Container>
      <Banner user={user} userSchedule={userSchedule} />
      <CustomCalendar userSchedule={userSchedule} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 30px 0;
  background-color: white;
`;

export default HomeScreen;
