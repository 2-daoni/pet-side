export interface LoginDto {
  email: string;
  password: string;
}

export interface ProfileDto {
  name: string;
  petName?: string;
  profileImage?: string;
}

export interface UserDto {
  id?: number;
  email: string;
  password: string;
  profile: ProfileDto;
}

export interface ScheduleDto {
  id: number;
  type: 'Walking' | 'Snack' | 'Meal' | 'Custom';
  title?: string;
  contents?: string;
  date: string;
  status?: 'Ready' | 'Done';
}

export interface PetDictionaryDto {
  id: number;
  name: string;
  thumbnailImage: string;
  images: Array<any>;
  summary: Array<string>;
  description: string;
  score: number;
}
