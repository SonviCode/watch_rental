import { Brand, Material } from "@/types/watchTypes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Subscription } from "react-redux";

const FilterCategory = ({
  category,
  name,
}: {
  category: Subscription[] | Brand[] | Material[];
  name: string;
}) => {
  // const { name, elements } = category;

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
        {category.map(
          (el: Subscription | Brand | Material, index: React.Key) => {
            const elementName = el.brandName
              ? el.brandName
              : el.materialName
              ? el.materialName
              : el.title;

            return (
              <li className="flex" key={index}>
                <input
                  // onClick={(e) => getFilterProduct(e, el, key.keyRequest)}
                  id={elementName}
                  type="checkbox"
                  className="cursor-pointer accent-greenfluo "
                />
                <label
                  htmlFor={elementName}
                  className="grow pl-2 cursor-pointer first-letter:uppercase text-sm"
                >
                  {elementName}
                </label>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default FilterCategory;

// type FilterCategoryProps = {
//   name: string;
//   elements: string[];
// };
