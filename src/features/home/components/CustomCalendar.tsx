import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Calendar} from 'react-native-calendars';
import {StyleProp} from 'react-native';
import {Theme as CustomTheme} from '../../../types/Theme';
import {MarkedDates, Theme} from 'react-native-calendars/src/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import {ScheduleDto} from 'src/types/CustomData';

interface Props {
  userSchedule: Array<ScheduleDto>;
}

const CustomCalendar = ({userSchedule}: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [selectedDate, setSelectedDate] = useState<any>();

  const getUserSchedule = () => {
    const dateObject: {[key: string]: {marked: boolean}} = {};
    userSchedule.forEach((item: ScheduleDto) => {
      dateObject[item.date.split(' ')[0]] = {
        marked: true,
      };
    });
    setMarkedDates(dateObject);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserSchedule();
    });
  }, []);

  useEffect(() => {
    getUserSchedule();
  }, [userSchedule]);

  return (
    <Container>
      <Calendar
        theme={customCalendarStyle}
        markedDates={markedDates}
        onDayPress={(day: any) => {
          setSelectedDate(day.dateString);
        }}
      />
    </Container>
  );
};

const orangeColor = CustomTheme.colors.orange;

const customCalendarStyle: StyleProp<Theme> = {
  arrowColor: orangeColor,
  selectedDayTextColor: orangeColor,
  todayTextColor: orangeColor,
  dotColor: orangeColor,
};

const Container = styled.View`
  margin-top: 20px;
`;

export default CustomCalendar;
