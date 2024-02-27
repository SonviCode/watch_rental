import SubscripCategory from "./Category/SubscripCategory";
import SubscripCollections from "./Collections/SubscripCollections";
import SubscipDescription from "./Description/SubscipDescription";

const Subscription = () => {
  return (
    <div>
      <h1 className="gradient-text text-4xl md:text-5xl font-extrabold text-center">
        Un abonnement tout compris
      </h1>
      <SubscripCategory />
      <SubscipDescription/>
      <SubscripCollections/>
    </div>
  );
};

export default Subscription;
