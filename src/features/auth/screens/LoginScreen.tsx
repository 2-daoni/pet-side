import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {LoginDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import {Theme} from 'src/types/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<CustomStackNavigationParams>>();
  const [loginData, setLoginData] = useState<LoginDto>({
    email: '',
    password: '',
  });
  const [isActive, setIsActive] = useState<boolean>(false);

  const checkLoginData = () => {
    if (loginData) {
      if (loginData.email !== '' && loginData.password !== '') {
        if (checkEmailRegex(loginData.email)) {
          setIsActive(true);
        }
      }
    } else {
      setIsActive(false);
    }
  };

  const checkEmailRegex = (email: string) => {
    const emailRegex = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleLogin = () => {
    // 로그인
    AsyncStorage.setItem('isLogin', 'true');
  };

  useEffect(() => {
    checkLoginData();
  }, [loginData]);

  return (
    <Container>
      <InputContainer>
        <Label>Email</Label>
        <TextInput
          onChangeText={(text: string) => {
            setLoginData({...loginData, email: text});
          }}
          placeholder="이메일을 입력해주세요"
        />
        <Label>Password</Label>
        <TextInput
          onChangeText={(text: string) => {
            setLoginData({...loginData, password: text});
          }}
          placeholder="비밀번를 입력해주세요"
        />
      </InputContainer>
      <Btn onPress={handleLogin} isActive={isActive}>
        <BtnText>로그인</BtnText>
      </Btn>
      <RowContainer>
        <Text>아직 회원이 아니신가요?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text>가입하기</Text>
        </TouchableOpacity>
      </RowContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${Theme.colors.white};
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.View``;

const Label = styled.Text`
  font-weight: 700;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${Theme.colors.grayLight};
`;

const Btn = styled.TouchableOpacity<{isActive?: boolean}>`
  border-radius: 999px;
  background-color: ${Theme.colors.orange};
  opacity: ${(props: any) => (props.isActive ? 1 : 0.3)};
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

export default LoginScreen;
