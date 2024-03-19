// import SearchBar from "./SearchBar/SearchBar";
// import Select from "react-select";
// import "@/style/custom/select.css";

// const options = [
//   { value: "ascending_name", label: "Nom, A à Z" },
//   { value: "decreasing_name", label: "Nom, Z à A" },
//   { value: "ascending_price", label: "Prix, croissant" },
//   { value: "decreasing_price", label: "Prix, décroissant" },
// ];

// const colorStyles = {
//   control: (styles) => ({ ...styles, backgroundColor: "black" }),
//   option: (styles) => ({ ...styles, backgroundColor: "black" }),
// };

const SortingBanner = () => {
  const numberOfWatchs = 4;

  return (
    <div className="py-10 w-full flex justify-between items-center pl-10">
      <p>Il y a {numberOfWatchs} montres</p>
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
