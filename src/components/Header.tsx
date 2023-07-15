import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import styled from 'styled-components/native';

interface Props {
  title?: string;
  titleComponent?: () => React.ReactElement;
  disableBackBtn?: boolean;
  pressBack?: () => void;
  RightComponent?: () => React.ReactElement;
}

const Header = observer((props: Props) => {
  const navigation =
    useNavigation<
      StackNavigationProp<CustomStackNavigationParams, 'LoginScreen'>
    >();

  const [showBackBtn, setShowBackBtn] = useState<boolean>(false);

  useEffect(() => {
    if (props.disableBackBtn) {
      setShowBackBtn(false);
    } else {
      setShowBackBtn(true);
    }
  }, [props.disableBackBtn]);

  return (
    <Container>
      {showBackBtn && (
        <BackBtn
          onPress={() => {
            if (props.pressBack) {
              props.pressBack();
            } else {
              navigation.goBack();
            }
          }}>
          <BackImg />
        </BackBtn>
      )}
      <TitleContainer disableBackBtn={showBackBtn}>
        {props.titleComponent ? (
          props.titleComponent()
        ) : (
          <HeaderTitle>{props.title}</HeaderTitle>
        )}
      </TitleContainer>
      <View>{props.RightComponent ? props.RightComponent() : <View />}</View>
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 50px 20px 10px;
  background-color: white;
`;

const TitleContainer = styled.View<{disableBackBtn?: boolean}>`
  min-width: 100px;
  justify-content: center;
  align-items: center;
  left: ${(props: any) => (props.disableBackBtn ? -10 : 0)}px;
  margin: 0 auto;
`;

const HeaderTitle = styled.Text`
  font-weight: 700;
`;

const BackImg = styled.Image.attrs({
  source: require('../assets/images/left.png'),
})`
  width: 20px;
  height: 30px;
`;

const BackBtn = styled.TouchableOpacity``;

export default Header;
