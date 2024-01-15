import { Input as InputAntd } from "antd";

type TInputProps = {
  placeholder?: string | undefined;
  required?: boolean | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
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
