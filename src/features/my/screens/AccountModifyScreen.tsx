import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Header from 'src/components/Header';
import {useStore} from 'src/stores/StoreProvider';
import {UserDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

const AccountModifyScreen = () => {
  const {uiStore} = useStore();

  const route =
    useRoute<RouteProp<CustomStackNavigationParams, 'AccountModifyScreen'>>();

  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();

  const [user, setUser] = useState<UserDto>({});

  useEffect(() => {
    setUser(route.params?.user);
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
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 20px;
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

export default AccountModifyScreen;
