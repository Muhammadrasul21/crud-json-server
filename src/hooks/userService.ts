import axios from "axios";
import { User, FormUser } from "../types/user";

const API_URL = "http://localhost:5000/users";

export const getUsers = async () => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

export const addUser = async (user: FormUser) => {
  const response = await axios.post<User>(API_URL, user);
  return response.data;
};

export const updateUser = async (id: number, user: FormUser) => {
  const response = await axios.put<User>(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
