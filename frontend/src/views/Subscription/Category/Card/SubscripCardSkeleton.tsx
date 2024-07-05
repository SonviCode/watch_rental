import Skeleton from "react-loading-skeleton";

const SubscripCardSkeleton = () => {
  return (
    <div className="rounded-lg bg-blacklight  text-center md:w-1/3 ">
      <div className=" py-5 px-2 lg:p-5 flex flex-col gap-3 md:gap-4 justify-between h-full">
        <Skeleton height={31} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
        <hr className="text-gray" />
        <Skeleton height={28} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
        
        <hr className="text-gray" />
        <Skeleton count={2} height={14} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
        <hr className="text-gray" />
        <Skeleton count={2} height={14} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
        <Skeleton height={39} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
        <Skeleton height={39} baseColor="#A9A9A9" highlightColor="#FFFFFF" duration={3} />
      </div>
    </div>
  );
};

export default SubscripCardSkeleton;
