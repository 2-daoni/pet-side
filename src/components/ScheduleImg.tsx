import React from 'react';
import {ScheduleDto} from 'src/types/CustomData';
import styled from 'styled-components/native';

interface Props {
  size?: number;
  item: ScheduleDto;
}

const ScheduleImg = ({size, item}: Props) => {
  const getImage = (item: ScheduleDto) => {
    if (item.type === 'Custom') {
      return require('../assets/images/pet.png');
    } else if (item.type === 'Meal') {
      return require('../assets/images/meal.png');
    } else if (item.type === 'Snack') {
      return require('../assets/images/snack.png');
    } else {
      return require('../assets/images/walk.png');
    }
  };

  return <BannerImg source={getImage(item)} size={size} />;
};

const BannerImg = styled.Image<{size?: number}>`
  width: ${(props: any) => (props.size ? props.size : 30)}px;
  height: ${(props: any) => (props.size ? props.size : 30)}px;
  margin-right: 10px;
`;

export default ScheduleImg;
