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
import {launchImageLibrary} from 'react-native-image-picker';

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
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem('isLogin');
              RNRestart.restart();
            }}>
            <Text>로그아웃</Text>
          </TouchableOpacity>
          <ImgBtn
            onPress={() => {
              launchImageLibrary({mediaType: 'photo'}, (img: any) => {
                setUser({
                  ...user,
                  profile: {...user.profile, profileImage: img.assets[0].uri},
                });
              });
            }}>
            {user.profile?.profileImage ? (
              <ProfileImg source={{uri: user.profile.profileImage}} />
            ) : (
              <ProfileImg
                source={require('src/assets/images/navigation/plus.png')}
              />
            )}
          </ImgBtn>
          <Label>이름</Label>
          <Input value={user.profile?.name} />
          <Label>이메일</Label>
          <Input value={user.email} />
          <Label>펫이름</Label>
          <Input value={user.profile?.petName} />
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

const ProfileImg = styled.Image<{size?: number}>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 1px;
`;

const ImgBtn = styled.TouchableOpacity`
  margin: 0 auto;
  padding: 20px;
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
