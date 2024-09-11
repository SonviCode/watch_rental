import {
  DISABLED_DATE_SLECTED
} from "@/constants/Constants";
import "@/style/custom/DateRangePicker.css";
import "@/style/custom/calendar.css";
import {
  checkDisabledDates,
  disbaledDateIsSelected
} from "@/utils/calendarUtils";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";
import Calendar from "react-calendar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ValuePiece = any;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const bDate1 = new Date("2024-03-25T00:00:00");
const bDate2 = new Date("March 26, 2024 00:00:00");
const bDate3 = new Date("2024-03-27T00:00:00");

const disabledDates = [bDate1, bDate2, bDate3];

const WatchCalendar = () => {
  const [value, setValue] = useState<Value>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  // const [minDate, setMinDate] = useState<Date>(new Date());
  // const [input, setErrorMsg] = useState<string>("");

  console.log(value);
  // console.log(new Date(new Date().setDate(new Date().getDate() - 1)));

  const handleChange = (datesValue: Value): void => {
    setErrorMsg("");
    const startOfRental = datesValue[0];
    const endOfRental = datesValue[1];

    if (disbaledDateIsSelected(startOfRental, endOfRental, disabledDates)) {
      setErrorMsg(DISABLED_DATE_SLECTED);
      setValue(null);
      return;
    }

    // if (
    //   NumberOfDaysSelected(startOfRental, endOfRental) < MINIMUM_RENTAL_DAYS
    // ) {
    //   setErrorMsg(MINIMUM_RENTAL_DAYS_ERROR);
    //   setValue(null);
    //   return;
    // }

    setValue(datesValue);
  };

  const handlePicker = (datesValue: Value): void => {
    setErrorMsg("");
    console.log(datesValue);

    // setErrorMsg("");
    // const startOfRental = datesValue[0];
    // const endOfRental = datesValue[1];

    // if (disbaledDateIsSelected(startOfRental, endOfRental, disabledDates)) {
    //   setErrorMsg(DISABLED_DATE_SLECTED);
    //   setValue(null);
    //   return;
    // }

    setValue(datesValue);
  };

  const test = (locale: string, date: Date) => {
    console.log(locale);
    console.log(date);

    return "2024";
  };

  return (
    <>
      <DateRangePicker
        className="rounded-lg"
        rangeDivider={<></>}
        format={"dd/MM/y"}
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="YYYY"
        calendarIcon={null}
        formatYear={(locale, date) => test(locale!, date)}
        maxDate={new Date("2026")}
        disableCalendar={true}
        value={value}
        // minDate={minDate}
        onChange={(datesValue) => handlePicker(datesValue)}
        // onFocus={(event:any) => console.log("Focused input: ", event.value)}
        onInvalidChange={() => setErrorMsg("test")}
        required
      />
      <Calendar
        className="p-2 rounded-lg"
        onChange={(datesValue) => handleChange(datesValue)}
        selectRange={true}
        value={value}
        // minDate={minDate}
        prev2Label={null}
        next2Label={null}
        maxDetail="month"
        // view="month"
        // defaultView="month"
        // maxDate={new Date('2029-12-31')}
        minDetail="year"
        // onClickDay={(date) =>
        //   setMinDate(date)
        // }
        // goToRangeStartOnSelect
        // showDoubleView
        tileDisabled={({ date }) => checkDisabledDates(disabledDates, date)}
      />
      <div>
        <div className="flex gap-5 text-sm">
          <div className="flex gap-2 items-center">
            <span className="bg-gray w-4 h-4 rounded-sm"></span>
            <span>Indisponible</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-purple w-4 h-4 rounded-sm"></span>
            <span>Dates sélectionnés</span>
          </div>
        </div>
        {errorMsg && (
          <p className="flex flex-col text-sm text-pretty text-red-600">
            {errorMsg}
          </p>
        )}
        {value && value[0] && value[1] && (
          <button className="mt-2 bg-greenfluo text-black font-bold border border-greenfluo w-full py-2 px-4 rounded-lg text-center">
            Réserver
          </button>
        )}
      </div>
    </>
  );
};

export default WatchCalendar;
