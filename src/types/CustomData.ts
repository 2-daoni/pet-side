export interface LoginDto {
  email: string;
  password: string;
}

export interface ScheduleDto {
  id: number;
  type: 'Walking' | 'Snack' | 'Meal' | 'Custom';
  title?: string;
  contents?: string;
  date: string;
  status?: 'Ready' | 'Done';
}
