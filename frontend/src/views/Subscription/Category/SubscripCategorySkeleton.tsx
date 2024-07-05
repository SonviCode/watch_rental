import "react-loading-skeleton/dist/skeleton.css";
import SubscripCardSkeleton from "./Card/SubscripCardSkeleton";

const SubscripCategorySkeleton = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 lg:gap-10 py-10 xl:p-10 ">
      <SubscripCardSkeleton />
      <SubscripCardSkeleton />
      <SubscripCardSkeleton />
    </section>
  );
};

export default SubscripCategorySkeleton;
