import { Input as InputAntd } from "antd";

type TInputProps = {
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
};

const Input = ({
  placeholder,
  required,
  maxLength,
  minLength,
  ...props
}: TInputProps) => {
  return (
    <InputAntd
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      {...props}
    />
  );
};
export { Input };
