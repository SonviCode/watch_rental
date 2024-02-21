import { BRAND_NAME } from "@/constants/Constants";
import "@/style/index.css";
import { Link } from "react-router-dom";
import SubSection from "./SubSection/SubSection";
import WatchSection from "./WatchSection/WatchSection";
import HowSection from "./HowSection/HowSection";

function Home() {
  return (
    <>
      <section className=" h-[600px]">
        <div className="pt-20 p-10 text-center">
          <h1 className="text-6xl font-extrabold">{BRAND_NAME}</h1>
          <h1 className="font-extrabold text-6xl py-10 gradient-text text-pretty">
            LA MONTRE PARFAITE POUR CHAQUE OCCASION
          </h1>
          <Link
            to="/watchs"
            className="border p-2 rounded-lg border-greenfluo hover:bg-greenfluo hover:text-black"
          >
            Voir notre collection
          </Link>
        </div>
      </section>
      <SubSection/>
      <WatchSection/>
      <HowSection/>
    </>
  );
}

export default Home;
