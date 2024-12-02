import "@/style/custom/DatePicker.css";
import "@/style/custom/calendar.css";
import { addDays, addMonth } from "@/utils/dateUtils";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-date-picker";

const InputDateStart = ({
  setStartDate,
  startDate,
  text,
  minDate,
}: {
  setStartDate: Dispatch<SetStateAction<Value>>;
  startDate: Value;
  text: string;
  minDate?: Date;
}) => {
  const handlePicker = (date: Value): void => {
    setStartDate(date);
  };

  const calculateMinDate = (minDate: Date | undefined): Date => {
    if (!minDate) return addDays(new Date(), 5);

    return new Date(minDate).getTime() > new Date().getTime()
      ? addMonth(new Date(minDate), 1)
      : addDays(new Date(), 5);
  };

  return (
    <div className="flex flex-col gap-2 max-w-sm w-full z-50">
      <label htmlFor="subscriptions" className="text-sm">
        {text}
      </label>
      <DatePicker
        maxDetail="month"
        className="rounded-lg cursor-pointer"
        minDate={calculateMinDate(minDate)}
        onChange={(date) => handlePicker(date)}
        value={startDate}
      />
    </div>
  );
};

export default InputDateStart;
