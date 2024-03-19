import SearchBar from "../SortingBanner/SearchBar/SearchBar";
import FilterCategory from "./FilterCategory";

const Category = { name: "Marque", elements: ["rolex", "amilton"] };

const Filter = () => {
  return (
    <div className="bg-blacklight w-[280px] h-auto p-10">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span>Filtre</span>
          <button className="text-xs ">supprimer les filtres</button>
        </div>
        <SearchBar />
        <FilterCategory Category={Category} />

        {/* <span className="rounded-lg bg-purple  py-1 px-2 w-fit">
          En abonnement
        </span> */}
      </div>
    </div>
  );
};

export default Filter;
