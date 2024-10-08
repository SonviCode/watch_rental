import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FilterCategory = ({
  keyRequest,
  category,
  name,
}: {
  keyRequest: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  category: any;
  name: string;
}) => {
  return (
    <div className=" border-t border-t-gray w-full text-gray-700 py-5 px-4 flex-col items-center justify-between relative ">
      <input
        type="checkbox"
        defaultChecked={true}
        className="peer absolute left-0 top-0 right-0 h-[65px] checked:h-[40px] appearance-none cursor-pointer z-10"
      />
      <div className="peer-checked:[&>svg]:rotate-180 flex items-center justify-between uppercase">
        <span>{name}</span>{" "}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="duration-200 ease pointer-events-none ml-1"
        />
      </div>

      <ul className="peer-checked:flex flex-col hidden gap-2 pt-2 z-20">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {category.map((el: any, index: React.Key) => {
          // switch(el)
          // case
          const elementName = el.brandName
            ? el.brandName
            : el.materialName
            ? el.materialName
            : el.title;

          return (
            <li className="flex" key={index}>
              <input
                // onClick={(e) => getFilterProduct(e, el, key.keyRequest)}
                id={el.id}
                name={keyRequest}
                type="checkbox"
                className="cursor-pointer accent-greenfluo "
              />
              <label
                htmlFor={el.id}
                className="grow pl-2 cursor-pointer first-letter:uppercase text-sm"
              >
                {elementName}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterCategory;

// type FilterCategoryProps = {
//   name: string;
//   elements: string[];
// };
