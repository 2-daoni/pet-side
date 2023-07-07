import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';
import Banner from '../components/Banner';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Container>
      <Banner />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 30px 0;
  background-color: white;
`;

export default HomeScreen;
