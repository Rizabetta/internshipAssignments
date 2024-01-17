import { InputNumber as InputNumberAntd } from "antd";

type TInputNumberAntdProps = {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  addonBefore?: string;
};

const InputNumber = ({
  maxLength,
  minLength,
  placeholder,
  addonBefore,
  ...props
}: TInputNumberAntdProps) => {
  return (
    <InputNumberAntd
      addonBefore={addonBefore}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      controls={false}
      style={{
        width: 150,
      }}
      {...props}
    />
  );
};
export { InputNumber };
