import { useEffect, useState } from "react";

export default function usePersistedState<T>(defaultValue: T, name: string) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined" || !window.localStorage) {
      return defaultValue;
    }

    const persistedValue = window.localStorage.getItem(name);

    // console.log(persistedValue);
    // console.log(!persistedValue);
    // console.log(
    //   persistedValue === null ||
    //     persistedValue === "null" ||
    //     persistedValue.length === 0
    // );

    if (persistedValue == null || persistedValue == "") return defaultValue;

    if (name === "rentalStartDate") return new Date(JSON.parse(persistedValue));

    return JSON.parse(persistedValue);
  });

  useEffect(() => {
    console.log(value);

    if (!value) return;

    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}
