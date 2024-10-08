import {
  API_BRAND,
  API_MATERIAL,
  API_SUBSCRIPTION,
} from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { handleWatchsFilter } from "@/services/handler/handleChange";
import { Brand, Material, Watch } from "@/types/watchTypes";
import { Dispatch, SetStateAction, useState } from "react";
import { Subscription } from "react-redux";
import SearchBar from "../SortingBanner/SearchBar/SearchBar";
import FilterCategory from "./FilterCategory";

const Filter = ({
  setWatchs,
}: {
  setWatchs: Dispatch<SetStateAction<Watch[]>>;
}) => {
  const [brands, setBrands] = useState<Brand[]>();
  const [materials, setMaterials] = useState<Material[]>();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [checkedItems, setCheckedItems] = useState<FormData>(new FormData());

  let isLoading: boolean;
  isLoading = useFetchData(setSubscriptions, API_SUBSCRIPTION);
  isLoading = useFetchData(setMaterials, API_MATERIAL);
  isLoading = useFetchData(setBrands, API_BRAND);

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
          {[
            {
              keyRequest: "subscription_id",
              category: subscriptions,
              name: "abonnement",
            },
            {
              keyRequest: "brand_id",
              category: brands,
              name: "marque",
            },
            {
              keyRequest: "material_id",
              category: materials,
              name: "matière",
            },
          ].map((filtre, i) => (
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
