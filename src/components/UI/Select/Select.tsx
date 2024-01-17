import { Select as SelectAntd } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type TSelectProps = {
  mode?: "multiple" | "tags";
  size?: SizeType;
  defaultValue?: any;
  options?: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  required?: boolean;
  optionLabelProp?: string;
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
