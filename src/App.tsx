import { useState } from "react";
import { useUser } from "./hooks/useUser";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { User } from "./types/user";
import 'antd/dist/reset.css';

const App = () => {
  const { users, loading, error, addUser, deleteUser, updateUser, fetchUsers } = useUser();
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleSuccess = async () => {
    await fetchUsers();
    setEditingUser(null);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl mb-4">Users CRUD</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <UserForm
        onAdd={addUser}
        onUpdate={updateUser}
        editingUser={editingUser}
        onSuccess={handleSuccess}
      />
      <UserList users={users} onDelete={deleteUser} onEdit={handleEdit} />
    </div>
  );
};

export default App;
