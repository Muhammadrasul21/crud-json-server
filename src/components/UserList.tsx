import { Table, Button, Space } from "antd";
import { User } from "../types/user";

type Props = {
  users: User[];
  onDelete: (id: number) => Promise<void>;
  onEdit: (user: User) => void;
};

const UserList = ({ users, onDelete, onEdit }: Props) => {
  return (
    <Table
      rowKey="id"
      dataSource={users}
      columns={[
        { title: "First Name", dataIndex: "f_name" },
        { title: "Last Name", dataIndex: "l_name" },
        { title: "Profession", dataIndex: "profession" },
        { title: "Age", dataIndex: "age" },
        { title: "Gender", dataIndex: "gender" },
        {
          title: "Actions",
          render: (_, record) => (
            <Space>
              <Button type="primary" onClick={() => onEdit(record)}>
                Edit
              </Button>
              <Button danger onClick={() => onDelete(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ]}
    />
  );
};

export default UserList;
