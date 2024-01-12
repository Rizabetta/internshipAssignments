import { Select as SelectAntd } from "antd";

type TSelectProps = {
  defaultValue?: any;
  options?: {
    label: string;
    value: string;
  }[];
  placeholder?: React.ReactNode;
  required?: boolean | undefined;
};

const Select = ({ defaultValue, options, placeholder }: TSelectProps) => {
  return (
    <SelectAntd
      defaultValue={defaultValue}
      options={options}
      placeholder={placeholder}
    ></SelectAntd>
  );
};
export { Select };
