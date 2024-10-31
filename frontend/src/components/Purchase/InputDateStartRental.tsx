import "@/style/custom/DatePicker.css";
import "@/style/custom/calendar.css";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-date-picker";

const InputDateStartRental = ({
  setRentalStartDate,
  rentalStartDate,
}: {
  setRentalStartDate: Dispatch<SetStateAction<Value>>;
  rentalStartDate: Value;
}) => {
  const handlePicker = (date: Value): void => {
    setRentalStartDate(date);
  };

  return (
    <div className="flex flex-col gap-2 max-w-sm w-full">
      <label htmlFor="subscriptions" className="text-sm">
        Date de démarrage de la location
      </label>
      <DatePicker
        maxDetail="month"
        className="rounded-lg"
        minDate={new Date()}
        onChange={(date) => handlePicker(date)}
        value={rentalStartDate}
      />
    </div>
  );
};

export default InputDateStartRental;
