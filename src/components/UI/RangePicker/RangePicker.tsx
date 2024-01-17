import { DatePicker as DatePickerAntd } from "antd";
import { TPicker } from "../DatePicker/DatePicker";

export type TRangePickerProps = {
  picker?: TPicker;
  placeholder?: [string, string];
};

const RangePicker = ({ picker, placeholder, ...props }: TRangePickerProps) => {
  return (
    <DatePickerAntd.RangePicker
      placeholder={placeholder}
      picker={picker}
      {...props}
    />
  );
};
export { RangePicker };
