import { DatePicker as DatePickerAntd } from "antd";

export type TPicker =
  | "time"
  | "date"
  | "week"
  | "month"
  | "quarter"
  | "year"
  | undefined;
type TDatePickerProps = {
  picker?: TPicker;
  placeholder?: string;
  format?: any;
};

const DatePicker = ({
  placeholder,
  picker,
  format,
  ...props
}: TDatePickerProps) => {
  return (
    <DatePickerAntd
      picker={picker}
      placeholder={placeholder}
      format={format}
      {...props}
    />
  );
};
export { DatePicker };
