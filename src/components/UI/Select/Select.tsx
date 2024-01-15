import { Select as SelectAntd } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type TSelectProps = {
  mode?: "multiple" | "tags" | undefined;
  size?: SizeType;
  defaultValue?: any;
  options?: {
    label: string;
    value: string;
  }[];
  placeholder?: React.ReactNode;
  required?: boolean | undefined;
  optionLabelProp?: string | undefined;
};

const Select = ({
  optionLabelProp,
  mode,
  size,
  defaultValue,
  options,
  placeholder,
  ...props
}: TSelectProps) => {
  return (
    <SelectAntd
      optionLabelProp={optionLabelProp}
      mode={mode}
      size={size}
      defaultValue={defaultValue}
      options={options}
      placeholder={placeholder}
      {...props}
    ></SelectAntd>
  );
};
export { Select };
