import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title?: string;
  disableBackBtn?: boolean;
  RightComponent?: () => void;
}

const Header = (props: Props) => {
  return (
    <Container>
      {!props.disableBackBtn && (
        <BackBtn>
          <BackImg />
        </BackBtn>
      )}
      <HeaderTitle>{props.title}</HeaderTitle>
      {props.RightComponent && props.RightComponent}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  height: 60px;
  padding-top: 15px;
  justify-content: space-between;
  align-items: center;
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
