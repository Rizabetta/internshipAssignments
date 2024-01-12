import { Input as InputAntd } from "antd";

type TInputProps = {
  placeholder?: string | undefined;
  value?: string | number | bigint | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  required?: boolean | undefined;
};

const Input = ({
  placeholder,
  value,
  onChange,
  onBlur,
  required,
}: TInputProps) => {
  return (
    <InputAntd
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
    ></InputAntd>
  );
};
export { Input };
