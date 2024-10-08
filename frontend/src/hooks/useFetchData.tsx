import { API_WATCH } from "@/constants/Constants";
import { setWatchs } from "@/store/slices/watchSlice";
import { store } from "@/store/store";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

/**
 * Custom hooks to fetch data
 *
 * @param setData the react setter, it works with any type
 * @param api_url the api url from the constants
 */
const useFetchData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: Dispatch<SetStateAction<any>>,
  api_url: string
) => {
  let calledOnce = false;
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (calledOnce) return;

    const fetchData = async () => {
      try {
        const res = await fetch(api_url, {
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        if (api_url === API_WATCH) {
          store.dispatch(setWatchs(data));
        }

        setData(data);
      } catch (e) {
        // store.dispatch(setUser(null));
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    calledOnce = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};

export default useFetchData;
