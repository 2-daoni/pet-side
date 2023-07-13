export interface LoginDto {
  email: string;
  password: string;
}

export interface UserDto {
  id: number;
  email: string;
  name: string;
  petName: string;
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
  images: Array<string>;
  summary: Array<string>;
  description: string;
  score: number;
}
