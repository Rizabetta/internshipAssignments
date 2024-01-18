import { DatePicker as DatePickerAntd } from "antd";
import { TPicker } from "../DatePicker/DatePicker";

export type TRangePickerProps = {
  picker?: TPicker;
  placeholder?: [string, string];
  className?: string;
};

const RangePicker = ({
  picker,
  placeholder,
  className,
  ...props
}: TRangePickerProps) => {
  return (
    <DatePickerAntd.RangePicker
      placeholder={placeholder}
      className={className}
      picker={picker}
      {...props}
    />
  );
};
export { RangePicker };
