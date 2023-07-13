import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {Theme} from 'src/types/Theme';
import styled from 'styled-components/native';

interface Props {
  rate: number;
}

const RatingStar = ({rate}: Props) => {
  return (
    <Container>
      <StarRating
        emptyColor="#d9d9d9"
        color={Theme.colors.orange}
        rating={rate}
        onChange={() => {}}
      />
    </Container>
  );
};

const Container = styled.View``;

export default RatingStar;
