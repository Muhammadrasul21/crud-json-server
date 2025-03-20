import { Form, Input, InputNumber, Select, Button } from "antd";
import { useEffect, useState } from "react";
import { FormUser, User } from "../types/user";

type Props = {
  onAdd: (user: User) => Promise<void>;
  onUpdate: (id: number, user: FormUser) => Promise<void>;
  editingUser: User | null;
  onSuccess: () => Promise<void>;
};

const UserForm = ({ onAdd, onUpdate, editingUser, onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingUser) {
      form.setFieldsValue(editingUser);
    } else {
      form.resetFields();
    }
  }, [editingUser, form]);

  const onFinish = async (values: User) => {
    setLoading(true);
    try {
      if (editingUser) {
        await onUpdate(editingUser.id, values);
      } else {
        await onAdd(values);
      }
      await onSuccess();
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} form={form}>
      <Form.Item label="First Name" name="f_name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name="l_name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Profession"
        name="profession"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Age" name="age" rules={[{ required: true }]}>
        <InputNumber min={1} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select options={[{ value: "male" }, { value: "female" }]} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading}>
        {editingUser ? "Update User" : "Add User"}
      </Button>
    </Form>
  );
};

export default UserForm;
