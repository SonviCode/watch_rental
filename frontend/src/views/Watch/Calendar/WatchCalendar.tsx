import {
  DISABLED_DATE_SLECTED,
  MINIMUM_RENTAL_DAYS,
  MINIMUM_RENTAL_DAYS_ERROR,
} from "@/constants/Constants";
import "@/style/calendar.css";
import {
  NumberOfDaysSelected,
  checkDisabledDates,
  disbaledDateIsSelected,
} from "@/utils/calendarUtils";
import { FormEvent, useState } from "react";
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
  // const [input, setErrorMsg] = useState<string>("");

  const handleChange = (datesValue: Value): void => {
    setErrorMsg("");
    const startOfRental = datesValue[0];
    const endOfRental = datesValue[1];

    if (disbaledDateIsSelected(startOfRental, endOfRental, disabledDates)) {
      setErrorMsg(DISABLED_DATE_SLECTED);
      setValue(null);
      return;
    }

    if (
      NumberOfDaysSelected(startOfRental, endOfRental) < MINIMUM_RENTAL_DAYS
    ) {
      setErrorMsg(MINIMUM_RENTAL_DAYS_ERROR);
      setValue(null);
      return;
    }

    setValue(datesValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget.value);
  };

  return (
    <>
      <form
        className="flex rounded-lg  bg-blacklight cursor-pointer"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col w-1/2 p-2 pl-4 border border-blacklight focus-within:border-graylight rounded-l-lg">
          <label htmlFor="dateStart" className="text-graylight uppercase">
            Début
          </label>
          <input
            className="bg-blacklight outline-none"
            placeholder="Ajouter une date"
            name="dateStart"
            id="dateStart"
            type="text"
            autoComplete="off"
            // value={value ? value[0].toLocaleDateString() : ""}
            // onChange={(e) => setValue([e.target.value])}
            required
          />
        </div>{" "}
        <hr className="h-auto border-l border-gray" />
        <div className="flex flex-col w-1/2 p-2 pl-4 border border-blacklight focus-within:border-graylight rounded-r-lg">
          <label htmlFor="dateEnd" className="text-graylight uppercase">
            Fin
          </label>
          <input
            className="bg-blacklight outline-none text-gray"
            placeholder="Ajouter une date"
            name="dateEnd"
            id="dateEnd"
            type="text"
            autoComplete="off"
            // value={value ? value[1].toLocaleDateString() : ""}
            // onChange={(e) => setValue([e.target.value])}
            required
          />
        </div>
      </form>
      <Calendar
        className="p-2 rounded-lg"
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
        onClickDay={(date) => console.log(date)}
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
        {value && (
          <button className="mt-2 bg-greenfluo text-black font-bold border border-greenfluo w-full py-2 px-4 rounded-lg text-center">
            Réserver
          </button>
        )}
      </div>
    </>
  );
};

export default WatchCalendar;
