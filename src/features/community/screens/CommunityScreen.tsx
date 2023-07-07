import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

const CommunityScreen = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<CustomStackNavigationParams, 'CommunityScreen'>
    >();

  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  return <Container></Container>;
};

const Container = styled.View``;

export default CommunityScreen;
