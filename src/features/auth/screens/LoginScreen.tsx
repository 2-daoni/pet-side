import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {LoginDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Header from 'src/components/Header';

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
      } else {
        setIsActive(false);
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
    navigation.navigate('Home');
  };

  useEffect(() => {
    checkLoginData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return <Header title="Login" disableBackBtn />;
      },
    });
  }, []);

  return (
    <Container>
      <InputContainer>
        <Label>Email</Label>
        <Input
          onChangeText={(text: string) => {
            setLoginData({...loginData, email: text});
          }}
          placeholder="이메일을 입력해주세요"
        />
        <Label>Password</Label>
        <Input
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
        <GrayText>아직 회원이 아니신가요?</GrayText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <GrayText>가입하기</GrayText>
        </TouchableOpacity>
      </RowContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
  padding: 0 20px;
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
  border-color: #e5e5e5;
  margin: 5px 0 10px;
  padding: 5px 0;
`;

const Btn = styled.TouchableOpacity<{isActive?: boolean}>`
  border-radius: 999px;
  opacity: ${(props: any) => (props.isActive ? 1 : 0.3)};
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background-color: orange;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const GrayText = styled.Text`
  font-size: 12px;
  color: #d9d9d9;
`;

export default LoginScreen;
