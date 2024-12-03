import {
  API_WATCH_FILTER
} from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { handleWatchsFilter } from "@/services/handler/handleChange";
import { Watch, WatchFilter } from "@/types/watchTypes";
import { Dispatch, SetStateAction, useState } from "react";
import SearchBar from "../SortingBanner/SearchBar/SearchBar";
import FilterCategory from "./FilterCategory";

const Filter = ({
  setWatchs,
}: {
  setWatchs: Dispatch<SetStateAction<Watch[]>>;
}) => {
  const [watchFilter, setWatchFIlter] = useState<WatchFilter[]>([]);
  const [checkedItems, setCheckedItems] = useState<FormData>(new FormData());

  const { isLoading } = useFetchData(setWatchFIlter, API_WATCH_FILTER);

  if (isLoading) return;

  return (
    <div className="bg-blacklight h-auto w-[280px] p-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span>Filtre</span>
          <button className="text-xs ">supprimer les filtres</button>
        </div>
        <SearchBar />
        <form
          onChange={(e) =>
            handleWatchsFilter(e, checkedItems, setCheckedItems, setWatchs)
          }
          className=" border-b-gray border-b"
        >
          {watchFilter.map((filtre: WatchFilter, i) => (
            <FilterCategory
              key={i}
              keyRequest={filtre.keyRequest}
              category={filtre.category}
              name={filtre.name}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Filter;
