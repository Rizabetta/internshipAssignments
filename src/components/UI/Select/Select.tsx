import { Select as SelectAntd } from "antd";
import { TUsers } from "../../../pages/FormClientDetails/FormClientDetails";

type TSelectProps = {
  defaultValue?: any;
  options: TUsers | undefined;
};

const Select = ({ defaultValue, options }: TSelectProps) => {
  const propOptions = options?.map((option) => {
    return {
      value: option,
      label: option,
    };
  });
  return (
    <SelectAntd defaultValue={defaultValue} options={propOptions}></SelectAntd>
  );
};
export { Select };
