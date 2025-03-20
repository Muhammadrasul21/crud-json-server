import { useEffect, useState } from "react";
import axios from "axios";
import { FormUser, User } from "../types/user";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user: User) => {
    try {
      await axios.post("http://localhost:3000/users", user);
      fetchUsers();
    } catch (error) {
      console.error("Failed to add user", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const updateUser = async (id: number, user: FormUser): Promise<void> => {
    try {
      await axios.put(`http://localhost:3000/users/${id}`, user);
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  return { users, loading, error, fetchUsers, addUser, deleteUser, updateUser };
};
