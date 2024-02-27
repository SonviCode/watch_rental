import { MINIMUM_RENTAL_DAYS } from "@/constants/Constants";
import "@/style/calendar.css";
import {
  NumberOfDaysSelected,
  checkDisabledDates,
  checkIfDateIsBetweenRange,
} from "@/utils/calendarUtils";
import { useState } from "react";
import Calendar from "react-calendar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ValuePiece = any;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const bDate1 = new Date("2024-03-25T00:00:00");
const bDate2 = new Date("March 17, 2024 00:00:00");
const bDate3 = new Date("2024-03-27T00:00:00");

const disabledDates = [bDate1, bDate2, bDate3];

const WatchCalendar = () => {
  const [value, onChange] = useState<Value>();

  console.log(value);

  const handleChange = (datesValue: Value) => {
    const startOfRental = datesValue[0];
    const endOfRental = datesValue[1];

    if (
      checkIfDateIsBetweenRange(datesValue[0], datesValue[1], disabledDates) ||
      NumberOfDaysSelected(startOfRental, endOfRental) < MINIMUM_RENTAL_DAYS
    ) {
      onChange(null);
    } else {
      onChange(datesValue);
    }
  };

  return (
    <>
      <Calendar
        className="p-5 rounded-lg"
        onChange={(datesValue) => handleChange(datesValue)}
        selectRange={true}
        value={value}
        minDate={new Date()}
        prev2Label={null}
        next2Label={null}
        maxDetail="month"
        // view="month"
        // defaultView="month"
        // maxDate={new Date('2029-12-31')}
        minDetail="year"
        tileDisabled={({ date }) => checkDisabledDates(disabledDates, date)}
      />
      <div>
        <div className="flex gap-5 text-sm">
          <div className="flex gap-2 items-center">
            <span className="bg-graylight w-4 h-4 rounded-sm"></span>
            <span>Indisponible</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-purple w-4 h-4 rounded-sm"></span>
            <span>Dates sélectionnés</span>
          </div>
        </div>
        <span className="text-sm text-gray">
          * Vous devez sélectionner au minimum 3 jours
        </span>
      </div>
    </>
  );
};

export default WatchCalendar;
