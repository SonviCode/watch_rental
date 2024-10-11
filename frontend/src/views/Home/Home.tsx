import { BRAND_NAME } from "@/constants/Constants";
import "@/style/index.css";
import { Link } from "react-router-dom";
import HowSection from "./HowSection/HowSection";
import SubscripSection from "./SubscripSection/SubscripSection";
import WatchSection from "./WatchSection/WatchSection";
import { useDispatch } from "react-redux";
import { removePurchaseSelectedWatch } from "@/store/slices/purchaseSelectedWatchSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removePurchaseSelectedWatch());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="mb-20 md:h-[520px]">
        <div className="pt-10 md:pt-20 lg:p-10 text-center">
          <h1 className="text-6xl font-extrabold">{BRAND_NAME}</h1>
          <h2 className="font-extrabold text-4xl sm:text-6xl py-10 gradient-text text-pretty">
            LA MONTRE PARFAITE POUR CHAQUE OCCASION
          </h2>
          <Link
            to="/watchs"
            className="border p-2 rounded-lg border-greenfluo hover:bg-greenfluo hover:text-black"
          >
            Voir notre collection
          </Link>
        </div>
      </section>
      <SubscripSection />
      <WatchSection />
      <HowSection />
    </>
  );
}

export default Home;
