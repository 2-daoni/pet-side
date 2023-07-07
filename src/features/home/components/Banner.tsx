import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScheduleDto, UserDto} from 'src/types/CustomData';
import {Theme} from '../../../types/Theme';
import styled from 'styled-components/native';

interface Props {
  user: UserDto;
  userSchedule: Array<ScheduleDto>;
}

const Banner = ({user, userSchedule}: Props) => {
  const [schedule, setSchedule] = useState<Array<ScheduleDto>>([]);
  const [showMoreSchedule, setShowMoreSchedule] = useState<boolean>(false);

  const getSchedule = () => {
    //
    setSchedule(userSchedule);
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

  // const today = new Date();
  const getTime = (item: ScheduleDto) => {
    if (item.date) {
      return <Text>{item.date}</Text>;
    }
  };

  return (
    <Container>
      <TitleContainer>
        <RowContainer>
          <UserName>{user.name}</UserName>
          <Text>님 반가워요!</Text>
        </RowContainer>
        <Text>오늘 {user.petName}와 함께할 일정이에요</Text>
      </TitleContainer>
      {schedule.length !== 0 ? (
        <>
          {schedule.map((item: ScheduleDto, index: number) => {
            if (index !== 0 && !showMoreSchedule) {
              return;
            } else {
              return (
                <>
                  <BannerContainer key={item.id}>
                    <BannerImg source={getImage(item)} />
                    <View>
                      <Text>{item.date.split(' ', 1)}</Text>
                      <Title>{getTitle(item)}</Title>
                    </View>
                  </BannerContainer>
                </>
              );
            }
          })}
          {schedule.length > 1 && (
            <MoreBtn
              hitSlop={20}
              onPress={() => {
                setShowMoreSchedule(!showMoreSchedule);
              }}>
              <MoreImg isShowMoreSchedule={showMoreSchedule} />
            </MoreBtn>
          )}
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

const TitleContainer = styled.View`
  margin: 5px 10px;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
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

const Title = styled.Text`
  font-weight: 700;
`;

const UserName = styled.Text`
  font-weight: 700;
  color: ${Theme.colors.orange};
`;

const MoreBtn = styled.TouchableOpacity`
  margin: 0 auto;
`;

const MoreImg = styled.Image.attrs({
  source: require('../../../assets/images/left.png'),
})<{isShowMoreSchedule?: boolean}>`
  width: 20px;
  height: 20px;
  tint-color: #a3a3a3;
  transform: ${(props: any) =>
    props.isShowMoreSchedule ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

export default Banner;
