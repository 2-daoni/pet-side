import {ScheduleDto, UserDto} from './CustomData';

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

const UserDummyData = {
  UserSchedule,
  User,
};

export default UserDummyData;
