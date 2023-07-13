import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from 'src/components/Header';
import {useStore} from 'src/stores/StoreProvider';
import {PetDictionaryDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import {Theme} from 'src/types/Theme';
import styled from 'styled-components/native';
import RatingStar from '../components/RatingStar';

const PetDetailScreen = () => {
  const {uiStore} = useStore();

  const route =
    useRoute<RouteProp<CustomStackNavigationParams, 'PetDetailScreen'>>();
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const currentPetContents: PetDictionaryDto = route.params.petContents;

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return <Header title={currentPetContents.name} />;
      },
    });
  }, [currentPetContents]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      uiStore.setIsBottomTabShow(false);
    });
    navigation.addListener('blur', () => {
      uiStore.setIsBottomTabShow(true);
    });
  }, []);

  return (
    <Container>
      <Swiper
        containerStyle={{maxHeight: 250}}
        activeDotColor={Theme.colors.orange}
        dotColor="#d9d9d9"
        height={200}>
        {currentPetContents.images.map((image: any, index: number) => {
          return <SwiperImg source={image} key={index} />;
        })}
      </Swiper>
      <RatingStar rate={currentPetContents.score} />
      <Text>{currentPetContents.name}</Text>
      <Text>{currentPetContents.description}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SwiperImg = styled.Image`
  width: 200px;
  height: 200px;
  background-color: black;
  margin: 0 auto;
  border-radius: 100px;
`;

export default PetDetailScreen;
