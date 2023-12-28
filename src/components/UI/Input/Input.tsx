import { Form, Input as InputAnd, DatePicker, InputNumber } from "antd";
const { RangePicker } = DatePicker;
type TInputProps = {
  data: {
    type: string;
    name?: string;
    label: string;
    required?: boolean;
    message?: string;
  };
};

const Input = ({ data }: TInputProps) => {
  return (
    <Form.Item
      label={data.label}
      name={data.name}
      rules={[
        {
          required: data.required,
          message: data.message,
        },
      ]}
    >
      {data.type === "Input" && <InputAnd />}
      {data.type === "DatePicker" && <DatePicker />}
      {data.type === "RangePicker" && <RangePicker />}
      {data.type === "InputNumber" && <InputNumber />}
    </Form.Item>
  );
};
export { Input };
