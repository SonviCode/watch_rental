import { SERVER_URL } from "@/constants/Constants";
import { Watch } from "@/types/watchTypes";
import { MouseEventHandler } from "react";

const WatchPurchaseCard = ({
  watch,
  watchSelected,
  onClick,
}: {
  watch: Watch;
  watchSelected?: Watch | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  let isWatchSelected = false;

  if (watchSelected) {
    isWatchSelected = watch.id === watchSelected.id;
  }

  return (
    <div
      onClick={onClick}
      className={`${isWatchSelected && "border-purple border-4"}
      ${watch.pivotDateEnd ? "opacity-50" : ""} ${onClick ? "cursor-pointer" : ""}
       bg-[#FFFFFF] w-28 h-28 rounded-md text-sm text-center relative `}
    >
      <div className="absolute right-2 top-3 flex h-4 w-6 items-center justify-center rounded-full">
        <img
          src={SERVER_URL + watch.brand.logoImgUrl}
          alt={`logo ${watch.name}`}
        />
      </div>
      <img
        src={SERVER_URL + watch.images[0].imageUrl}
        alt="rolex"
        className="p-1 rounded-md w-full object-cover h-24 bg-[#FFFFFF]"
      />
      <span className="absolute bottom-0.5 w-full left-0 text-black">
        {watch.name}
      </span>
    </div>
  );
};

export default WatchPurchaseCard;
