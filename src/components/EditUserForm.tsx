import { Form, Input, InputNumber, Select, Button } from "antd";
import { useEffect } from "react";
import { User } from "../types/user";

type Props = {
  user: User;
  onUpdate: (values: User) => void;
};

const EditUserForm = ({ user, onUpdate }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const onFinish = (values: any) => {
    onUpdate(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
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
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select options={[{ value: "male" }, { value: "female" }]} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};

export default EditUserForm;
