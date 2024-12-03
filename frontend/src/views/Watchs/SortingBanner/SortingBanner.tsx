const SortingBanner = ({ nbOfWatchs }: { nbOfWatchs: number }) => {
  return (
    <div className="py-10 w-full flex justify-between items-center px-10">
      <p>Il y a {nbOfWatchs} montres</p>
      {/* <SearchBar /> */}
      {/* <Select
        options={options}
        className="react-select-container cursor-pointer"
        classNamePrefix="react-select"
        styles={colorStyles}
        menuIsOpen={true}
      /> */}
      <select
        name="sorting"
        id="sorting"
        className="bg-black border border-gray px-4 py-3 rounded-md cursor-pointer"
      >
        <option value="relevance" className="hover:bg-purple">
          Pertinence
        </option>
        <option value="ascending_name">Nom, A à Z</option>
        <option value="decreasing_name">Nom, Z à A</option>
        <option value="ascending_price">Prix, croissant</option>
        <option value="decreasing_price">Prix, décroissant</option>
      </select>
    </div>
  );
};

export default SortingBanner;
