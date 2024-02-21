import SearchBar from "./SearchBar/SearchBar";

const SortingBanner = () => {
  const numberOfWatchs = 4;

  return (
    <div className="py-10 w-full flex justify-between items-center pl-10">
      <p>Il y a {numberOfWatchs} montres</p>
      <SearchBar />
      <div>
        <span>Trier par :</span>
        <select name="sorting" id="sorting" className="bg-black">
          <option value="relevance" className="bg-black">Pertinence</option>
          <option value="ascending_name" className="bg-black">Nom, A à Z</option>
          <option value="decreasing_name" className="bg-black">Nom, Z à A</option>
          <option value="ascending_price" className="bg-black">Prix, croissant</option>
          <option value="decreasing_price" className="bg-black">Prix, décroissant</option>
        </select>
      </div>
    </div>
  );
};

export default SortingBanner;
