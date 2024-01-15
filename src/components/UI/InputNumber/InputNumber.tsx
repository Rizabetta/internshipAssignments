import { InputNumber as InputNumberAntd } from "antd";

type TInputNumberAntdProps = {
  maxLength?: number | undefined;
  minLength?: number | undefined;
};

const InputNumber = ({
  maxLength,
  minLength,
  ...props
}: TInputNumberAntdProps) => {
  return (
    <InputNumberAntd maxLength={maxLength} minLength={minLength} {...props} />
  );
};
export { InputNumber };
