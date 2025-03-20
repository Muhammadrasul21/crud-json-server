export type User = {
  id: number;
  f_name: string;
  l_name: string;
  profession: string;
  age: number;
  gender: string;
};

export type FormUser = {
  id?: number;
  f_name: string;
  l_name: string;
  profession: string;
  age: number;
  gender: string;
};
