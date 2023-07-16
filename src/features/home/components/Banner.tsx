import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScheduleDto, UserDto} from 'src/types/CustomData';
import {Theme} from 'src/types/Theme';
import styled from 'styled-components/native';
import ScheduleImg from 'src/components/ScheduleImg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AuthStore from 'src/stores/AuthStore';
import {useStore} from 'src/stores/StoreProvider';

interface Props {
  user: UserDto;
  userSchedule: Array<ScheduleDto>;
  isLogin: boolean;
}

const Banner = ({user, userSchedule, isLogin}: Props) => {
  const {authStore} = useStore();

  const navigation = useNavigation<StackNavigationProp<any>>();

  const [schedule, setSchedule] = useState<Array<ScheduleDto>>([]);
  const [showMoreSchedule, setShowMoreSchedule] = useState<boolean>(false);

  const getSchedule = () => {
    //
    setSchedule(userSchedule);
  };

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

  // const today = new Date();
  const getTime = (item: ScheduleDto) => {
    if (item.date) {
      return <Text>{item.date}</Text>;
    }
  };

  useEffect(() => {
    getSchedule();
  }, [userSchedule]);

  return (
    <Container>
      {authStore.isLogin ? (
        <>
          <TitleContainer>
            <RowContainer>
              <UserName>{user.profile?.name}</UserName>
              <Text>님 반가워요!</Text>
            </RowContainer>
          </TitleContainer>
          {schedule.length !== 0 ? (
            <>
              {user.profile?.petName && (
                <Text>오늘 {user.profile?.petName}와 함께할 일정이에요</Text>
              )}
              {schedule.map((item: ScheduleDto, index: number) => {
                if (index !== 0 && !showMoreSchedule) {
                  return;
                } else {
                  return (
                    <BannerContainer key={item.id}>
                      <ScheduleImg item={item} />
                      <View>
                        <Text>{item.date.split(' ', 1)}</Text>
                        <Title>{getTitle(item)}</Title>
                      </View>
                    </BannerContainer>
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
            <>
              <Text>등록된 일정이 없네요!</Text>
              <Text>
                {user.profile?.petName}와 함께 할 일정을 추가해보세요!
              </Text>
              <OrangeBtn>
                <BtnText>추가하기</BtnText>
              </OrangeBtn>
            </>
          )}
        </>
      ) : (
        <>
          <LoginText>로그인 후 이용해주세요</LoginText>
          <OrangeBtn
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <BtnText>로그인하기</BtnText>
          </OrangeBtn>
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${Theme.colors.orangeLight};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  position: absolute;
  margin-top: 20px;
`;

const TitleContainer = styled.View`
  margin: 5px 0;
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

const OrangeBtn = styled.TouchableOpacity`
  margin: 10px auto 0;
  border-radius: 99px;
  background-color: ${Theme.colors.orange};
  padding: 10px 20px;
`;

const BtnText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: white;
`;

const LoginText = styled.Text`
  text-align: center;
  margin: 10px;
  font-weight: 700;
`;

export default Banner;
