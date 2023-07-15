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

  const [user, setUser] = useState<UserDto>({});

  useEffect(() => {
    setUser(authStore.currentUser);
    navigation.setOptions({headerShown: false});
  }, []);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem('isLogin');
          RNRestart.restart();
        }}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //이미지 수정
        }}>
        {user.profile?.profileImage ? <ProfileImg /> : <Text>추가</Text>}
      </TouchableOpacity>
      <Label>이름</Label>
      <Input value={user.profile?.name} />
      <Label>이메일</Label>
      <Input value={user.email} />
      <Label>펫이름</Label>
      <Input value={user.profile?.petName} />
    </Container>
  );
};

const Container = styled.View`
  padding: 50px 20px;
`;

const ProfileImg = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  resize-mode: contain;
`;

const InputWrapper = styled.View``;

const Label = styled.Text`
  font-weight: 700;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  margin: 5px 0 10px;
  padding: 5px 0;
`;

export default MyScreen;
