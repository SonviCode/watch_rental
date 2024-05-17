import SearchBar from "../SortingBanner/SearchBar/SearchBar";
import FilterCategory from "./FilterCategory";

const categoryType = {
  name: "Catégorie",
  elements: ["abonnement", "courte durée"],
};
const brandType = { name: "Marque", elements: ["rolex", "amilton"] };
const materialType = {
  name: "Matière",
  elements: [
    "acier inoxydable",
    "Or 18 carats",
    "Platine ",
    "Céramique",
    "Titane",
  ],
};

const Filter = () => {
  return (
    <div className="bg-blacklight h-auto w-[280px] p-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span>Filtre</span>
          <button className="text-xs ">supprimer les filtres</button>
        </div>
        <SearchBar />
        <div className=" border-b-gray border-b">
          <FilterCategory Category={categoryType} />
          <FilterCategory Category={brandType} />
          <FilterCategory Category={materialType} />
        </div>

        {/* <span className="rounded-lg bg-purple  py-1 px-2 w-fit">
          En abonnement
        </span> */}
      </div>
    </div>
  );
};

export default Filter;
