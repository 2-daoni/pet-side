import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Header from 'src/components/Header';
import {useStore} from 'src/stores/StoreProvider';
import {UserDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

const AccountModifyScreen = () => {
  const {uiStore, authStore} = useStore();

  const route =
    useRoute<RouteProp<CustomStackNavigationParams, 'AccountModifyScreen'>>();

  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [modifyUser, setModifyUser] = useState<UserDto>({});

  const handleSave = useCallback(() => {
    authStore.setCurrentUser(modifyUser);
    Toast.show({
      type: 'success',
      text1: '회원정보 수정이 완료되었습니다',
    });
    navigation.navigate('My');
  }, []);

  useEffect(() => {
    setModifyUser(route.params?.user);
  }, [route.params?.user]);

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <Header
            pressBack={() => {
              navigation.navigate('My');
            }}
          />
        );
      },
    });
    navigation.addListener('focus', () => {
      uiStore.setIsBottomTabShow(false);
    });
    navigation.addListener('blur', () => {
      uiStore.setIsBottomTabShow(true);
    });
  }, []);

  return (
    <Container>
      <ImgBtn
        onPress={() => {
          launchImageLibrary({mediaType: 'photo'}, (img: any) => {
            setModifyUser({
              ...modifyUser,
              profile: {...modifyUser.profile, profileImage: img.assets[0].uri},
            });
          });
        }}>
        {modifyUser.profile?.profileImage ? (
          <ProfileImg source={{uri: modifyUser.profile.profileImage}} />
        ) : (
          <ProfileImg
            source={require('src/assets/images/navigation/plus.png')}
          />
        )}
      </ImgBtn>
      <InputContainer>
        <Label>이름</Label>
        <Input
          value={modifyUser.profile?.name}
          onChangeText={(text: string) => {
            setModifyUser({
              ...modifyUser,
              profile: {...modifyUser.profile, name: text},
            });
          }}
        />
        <Label>이메일</Label>
        <Input
          value={modifyUser.email}
          onChangeText={(text: string) => {
            setModifyUser({
              ...modifyUser,
              email: text,
            });
          }}
        />
        <Label>펫이름</Label>
        <Input
          value={modifyUser.profile?.petName}
          onChangeText={(text: string) => {
            setModifyUser({
              ...modifyUser,
              profile: {...modifyUser.profile, petName: text},
            });
          }}
        />
      </InputContainer>
      <SaveBtn onPress={handleSave}>
        <SaveText>회원정보수정</SaveText>
      </SaveBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 20px;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 100%;
`;

const ImgBtn = styled.TouchableOpacity`
  margin: 0 auto;
  padding: 20px;
`;

const ProfileImg = styled.Image<{size?: number}>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 1px;
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

const SaveBtn = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #e6c589;
  padding: 15px;
  width: 100%;
`;

const SaveText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export default AccountModifyScreen;
