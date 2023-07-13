import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Header from 'src/components/Header';
import {useStore} from 'src/stores/StoreProvider';
import {PetDictionaryDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

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
      <Text>{currentPetContents.name}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default PetDetailScreen;
