import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScheduleDto} from 'src/types/CustomData';
import {Theme} from '../../../types/Theme';
import styled from 'styled-components/native';
import moment from 'moment';

const Banner = () => {
  const [schedule, setSchedule] = useState<Array<ScheduleDto>>([]);

  const getSchedule = () => {
    //
    setSchedule([
      {
        id: 1,
        type: 'Meal',
        date: '2023.07.06 17:00:00',
        status: 'Done',
      },
      {
        id: 2,
        type: 'Custom',
        title: '강아지 모델 촬영',
        contents: '일산 스튜디오 촬영',
        date: '2023.07.08 12:30:00',
        status: 'Ready',
      },
    ]);
  };

  useEffect(() => {
    getSchedule();
  });

  const getTitle = (item: ScheduleDto) => {
    if (item.type === 'Custom') {
      return item.title;
    } else if (item.type === 'Meal') {
      return '기다리던 밥 시간이에요!';
    } else if (item.type === 'Snack') {
      return '맛있는 간식 시간이에요!';
    } else {
      return '신나는 산책 시간이에요!';
    }
  };

  const getImage = (item: ScheduleDto) => {
    if (item.type === 'Custom') {
      return require('../../../assets/images/pet.png');
    } else if (item.type === 'Meal') {
      return require('../../../assets/images/meal.png');
    } else if (item.type === 'Snack') {
      return require('../../../assets/images/snack.png');
    } else {
      return require('../../../assets/images/walk.png');
    }
  };

  const today = new Date();
  const getTime = (item: ScheduleDto) => {
    if (item.date) {
      return <Text>{item.date}</Text>;
    }
  };

  return (
    <Container>
      {schedule.length !== 0 ? (
        <>
          {schedule.map((item: ScheduleDto) => {
            return (
              <BannerContainer key={item.id}>
                <BannerImg source={getImage(item)} />
                <View>
                  <Text>{getTime(item)}</Text>
                  <Text>{getTitle(item)}</Text>
                </View>
              </BannerContainer>
            );
          })}
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            //
          }}>
          <Text>일정을 등록해보세요!</Text>
        </TouchableOpacity>
      )}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${Theme.colors.orangeLight};
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 10px;
`;

const BannerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const BannerImg = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export default Banner;
