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
};

const Input = ({
  placeholder,
  required,
  maxLength,
  minLength,
  className,
  isNumber,
  addonBefore,
  ...props
}: TInputProps) => {
  return (
    <>
      {isNumber ? (
        <InputNumberAntd
          className={className}
          addonBefore={addonBefore}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          controls={false}
          {...props}
        />
      ) : (
        <InputAntd
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
