import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStore} from 'src/stores/StoreProvider';
import {UserDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import RNRestart from 'react-native-restart';
import styled from 'styled-components/native';

const MyScreen = () => {
  const {authStore} = useStore();

  const navigation =
    useNavigation<
      StackNavigationProp<CustomStackNavigationParams, 'MyScreen'>
    >();

  const [user, setUser] = useState<UserDto>(authStore.currentUser);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setUser(authStore.currentUser);
    });
    navigation.setOptions({headerShown: false});
  }, []);

  useEffect(() => {
    authStore.setCurrentUser(user);
  }, [user]);

  return (
    <Container>
      {authStore.isLogin ? (
        <>
          <LogoutBtn
            onPress={() => {
              AsyncStorage.removeItem('isLogin');
              RNRestart.restart();
            }}>
            <Text>로그아웃</Text>
          </LogoutBtn>
          <Btn
            onPress={() => {
              navigation.navigate('AccountModifyScreen', {user: user});
            }}>
            <Text>회원정보수정</Text>
          </Btn>
        </>
      ) : (
        <Text>가입후 사용해주세요</Text>
      )}
    </Container>
  );
};

const Container = styled.View`
  padding: 50px 20px;
`;

const LogoutBtn = styled.TouchableOpacity`
  margin-left: auto;
`;

const Btn = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;

export default MyScreen;
