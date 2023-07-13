import {PetDictionaryDto, ScheduleDto, UserDto} from './CustomData';

export const UserSchedule: Array<ScheduleDto> = [
  {
    id: 1,
    type: 'Meal',
    date: '2023-07-06 17:00:00',
    status: 'Done',
  },
  {
    id: 2,
    type: 'Custom',
    title: '개훌륭 보기',
    contents: '',
    date: '2023-07-08 12:30:00',
    status: 'Ready',
  },
];

export const User: UserDto = {
  id: 1,
  email: 'test@test.com',
  name: '다오니',
  petName: '후추',
};

export const PetDictionary: Array<PetDictionaryDto> = [
  {
    id: 1,
    name: '푸들',
    thumbnailImage: require('src/assets/images/dog/poodle.jpg'),
    images: [
      require('src/assets/images/dog/poodle.jpg'),
      require('src/assets/images/dog/pug.jpg'),
    ],
    summary: ['곱슬', '노는게 좋아!', '지능견'],
    description:
      '곱슬거리는 털이 매력적인 푸들은 털이 잘 빠지지 않는 견종이에요! 사람보다도 머리카락이 덜 빠진다는 얘기가 있지만 곱슬거리는 털을 관리해주지 않으면 피부에 염증이 생길수있어요.',
    score: 4,
  },
  {
    id: 2,
    name: '퍼그',
    thumbnailImage: require('src/assets/images/dog/pug.jpg'),
    images: [require('src/assets/images/dog/pug.jpg')],
    summary: ['억울한 얼굴', '먹는게 좋아!', '건강'],
    description:
      '퍼그는 코가 납작하게 눌리고 입이 매우 짧은 단두종으로 인기가 많아요! 몸에 비해 큰 얼굴과 둥글둥글 눌린듯한 코가 아주 매력적이지요! 느긋한 성격에 식탐이 많은 아이에요!',
    score: 3,
  },
  {
    id: 3,
    name: '말티즈',
    thumbnailImage: require('src/assets/images/dog/maltese.jpg'),
    images: [require('src/assets/images/dog/maltese.jpg')],
    summary: ['국민 강아지', '슬개골 조심'],
    description:
      '체구는 작지만 활동량이 많고 빨라요! 사람과 친밀하며 눈치도 빠르답니다. 여전히 우리나라에서 인기가 많은 견종이에요! 슬개골 탈구 문제가 많기 때문에 미끄러운 바닥과 점프는 조심해주세요!',
    score: 3,
  },
  {
    id: 4,
    name: '허스키',
    thumbnailImage: require('src/assets/images/dog/husky.jpg'),
    images: [require('src/assets/images/dog/husky.jpg')],
    summary: ['하울링', '에너자이저'],
    description:
      '늑대를 닮은 외모 때문에 사납게 보이기도 하지만 성격은 낙천적이고 온순하며 주의깊고 호기심이 많아요! 무리생활을 했기 때문에 반려인과의 유대감도 단단!',
    score: 3,
  },
  {
    id: 5,
    name: '푸들',
    thumbnailImage: require('src/assets/images/dog/poodle.jpg'),
    images: [
      require('src/assets/images/dog/poodle.jpg'),
      require('src/assets/images/dog/pug.jpg'),
    ],
    summary: ['곱슬', '노는게 좋아!', '지능견'],
    description:
      '곱슬거리는 털이 매력적인 푸들은 털이 잘 빠지지 않는 견종이에요! 사람보다도 머리카락이 덜 빠진다는 얘기가 있지만 곱슬거리는 털을 관리해주지 않으면 피부에 염증이 생길수있어요.',
    score: 4,
  },
  {
    id: 6,
    name: '퍼그',
    thumbnailImage: require('src/assets/images/dog/pug.jpg'),
    images: [require('src/assets/images/dog/pug.jpg')],
    summary: ['억울한 얼굴', '먹는게 좋아!', '건강'],
    description:
      '퍼그는 코가 납작하게 눌리고 입이 매우 짧은 단두종으로 인기가 많아요! 몸에 비해 큰 얼굴과 둥글둥글 눌린듯한 코가 아주 매력적이지요! 느긋한 성격에 식탐이 많은 아이에요!',
    score: 3,
  },
  {
    id: 7,
    name: '말티즈',
    thumbnailImage: require('src/assets/images/dog/maltese.jpg'),
    images: [require('src/assets/images/dog/maltese.jpg')],
    summary: ['국민 강아지', '슬개골 조심'],
    description:
      '체구는 작지만 활동량이 많고 빨라요! 사람과 친밀하며 눈치도 빠르답니다. 여전히 우리나라에서 인기가 많은 견종이에요! 슬개골 탈구 문제가 많기 때문에 미끄러운 바닥과 점프는 조심해주세요!',
    score: 3,
  },
  {
    id: 8,
    name: '허스키',
    thumbnailImage: require('src/assets/images/dog/husky.jpg'),
    images: [require('src/assets/images/dog/husky.jpg')],
    summary: ['하울링', '에너자이저'],
    description:
      '늑대를 닮은 외모 때문에 사납게 보이기도 하지만 성격은 낙천적이고 온순하며 주의깊고 호기심이 많아요! 무리생활을 했기 때문에 반려인과의 유대감도 단단!',
    score: 3,
  },
];

const UserDummyData = {
  UserSchedule,
  User,
  PetDictionary,
};

export default UserDummyData;
