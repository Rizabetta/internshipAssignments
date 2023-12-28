import { Button, Form, Modal, Select } from "antd";
import { Input } from "../../components";
import { useEffect, useState } from "react";
import { Methods, Url, requests } from "../../api/api.config";
import { clientDetails } from "./FormClientDetails.constant";
import { nanoid } from "nanoid";
const { Option } = Select;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

let users: string[];
const FormClientDetails = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    requests
      .makeApiRequest(Methods.GET, Url.COUNTRIES)
      .then((el) => (users = el.data));
  }, []);
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <main>
      <h1>Сведения о клиенте</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {clientDetails.map((data) => (
          <Input key={nanoid()} data={data}></Input>
        ))}

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            showSearch
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            {users?.map(()=>  <Option value="male">male</Option>)}
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={showModal}>
            Сохранить
          </Button>
          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Нет
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                Да
              </Button>,
            ]}
          >
            <p>Вы хотите очистить форму?</p>
          </Modal>
        </Form.Item>
      </Form>
    </main>
  );
};

export { FormClientDetails };
