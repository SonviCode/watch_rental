import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FilterCategory = ({ Category }: { Category: FilterCategoryProps }) => {
  const { name, elements } = Category;

  return (
    <div className=" border-y border-gray w-full text-gray-700 py-5 px-4 flex-col items-center justify-between relative">
      <input
        type="checkbox"
        defaultChecked={true}
        className="peer absolute left-0 top-0 right-0 h-[32px] appearance-none cursor-pointer z-10"
      />
      <div className="peer-checked:[&>svg]:rotate-180 flex items-center justify-between ">
        <span>{name}</span>{" "}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="duration-200 ease pointer-events-none ml-1"
        />
      </div>

      <ul className="peer-checked:flex flex-col hidden gap-2 pt-2 z-20">
        {elements.map((el: string, index: React.Key) => (
          <li className="flex" key={index}>
            <input
              // onClick={(e) => getFilterProduct(e, el, key.keyRequest)}
              id={el}
              type="checkbox"
              className="cursor-pointer accent-greenfluo"
            />
            <label htmlFor={el} className="grow pl-2 cursor-pointer">
              {el}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;

type FilterCategoryProps = {
  name: string;
  elements: string[];
};
