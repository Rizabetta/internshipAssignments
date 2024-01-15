import { DatePicker as DatePickerAntd } from "antd";
import { TPicker } from "../DatePicker/DatePicker";

export type TRangePickerProps = {
  picker?: TPicker;
  rangePickerPlaceholder?: [string, string] | undefined;
};

const RangePicker = ({
  picker,
  rangePickerPlaceholder,
  ...props
}: TRangePickerProps) => {
  return (
    <DatePickerAntd.RangePicker
      placeholder={rangePickerPlaceholder}
      picker={picker}
      {...props}
    />
  );
};
export { RangePicker };
