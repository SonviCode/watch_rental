const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        id="search"
        style={{ fontFamily: "Montserrat, FontAwesome" }}
        className="rounded-md bg-gray w-full outline-none px-3 py-2.5 text-sm"
        placeholder="&#xf002; Cherche une montre"
      />
    </div>
  );
};

export default SearchBar;
