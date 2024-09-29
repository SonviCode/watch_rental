import { Brand, Material } from "@/types/watchTypes";
import SearchBar from "../SortingBanner/SearchBar/SearchBar";
import FilterCategory from "./FilterCategory";
import { Subscription } from "react-redux";
import { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import {
  API_BRAND,
  API_MATERIAL,
  API_SUBSCRIPTION,
} from "@/constants/Constants";

// const categoryType = {
//   name: "Catégorie",
//   elements: ["abonnement", "courte durée"],
// };
// const brandType = { name: "Marque", elements: ["rolex", "amilton"] };
// const materialType = {
//   name: "Matière",
//   elements: [
//     "acier inoxydable",
//     "Or 18 carats",
//     "Platine ",
//     "Céramique",
//     "Titane",
//   ],
// };

const Filter = () => {
  const [brands, setBrands] = useState<Brand[]>();
  const [materials, setMaterials] = useState<Material[]>();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

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
        <div className=" border-b-gray border-b">
          <FilterCategory category={subscriptions} name={"abonnement"} />
          <FilterCategory category={brands} name={"marque"}/>
          <FilterCategory category={materials} name={"matière"}/>
        </div>

        {/* <span className="rounded-lg bg-purple  py-1 px-2 w-fit">
          En abonnement
        </span> */}
      </div>
    </div>
  );
};

export default Filter;
