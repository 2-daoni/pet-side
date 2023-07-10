import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import React from 'react';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

interface Props {
  title?: string;
  titleComponent?: () => React.ReactElement;
  disableBackBtn?: boolean;
  RightComponent?: () => void;
}

const Header = observer((props: Props) => {
  const navigation =
    useNavigation<
      StackNavigationProp<CustomStackNavigationParams, 'LoginScreen'>
    >();

  return (
    <Container>
      {!props.disableBackBtn && (
        <BackBtn
          onPress={() => {
            navigation.goBack();
          }}>
          <BackImg />
        </BackBtn>
      )}
      {props.titleComponent ? (
        props.titleComponent()
      ) : (
        <HeaderTitle>{props.title}</HeaderTitle>
      )}
      {props.RightComponent && props.RightComponent}
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 40px 0 10px;
  background-color: white;
`;

const HeaderTitle = styled.Text`
  font-weight: 700;
  margin: 0 auto;
`;

const BackImg = styled.Image.attrs({
  source: require('../assets/images/left.png'),
})`
  width: 30px;
  height: 30px;
`;

const BackBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export default Header;
