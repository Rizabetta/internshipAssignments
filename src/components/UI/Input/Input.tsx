import { Input as InputAntd } from "antd";
import { InputNumber as InputNumberAntd } from "antd";

type TInputProps = {
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  className?: string;
  isNumber?: boolean;
  addonBefore?: string;
  status?: "" | "warning" | "error";
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
};

const Input = ({
  onBlur,
  placeholder,
  required,
  maxLength,
  minLength,
  className,
  isNumber,
  addonBefore,
  status,
  ...props
}: TInputProps) => {
  return (
    <>
      {isNumber ? (
        <InputNumberAntd
          required={required}
          className={className}
          addonBefore={addonBefore}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          controls={false}
          status={status}
          onBlur={onBlur}
          {...props}
        />
      ) : (
        <InputAntd
          onBlur={onBlur}
          status={status}
          className={className}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          {...props}
        />
      )}
    </>
  );
};
export { Input };
