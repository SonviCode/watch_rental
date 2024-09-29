import WatchCard from "@/components/Card/WatchCard";
import Filter from "./Filter/Filter";
import HomeBanner from "./HomeBanner/HomeBanner";
import SortingBanner from "./SortingBanner/SortingBanner";
import NavBar from "@/components/Layout/General/NavBar/NavBar";
import Footer from "@/components/Layout/General/Footer/Footer";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";
import { API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";

const Watchs = () => {
  const [watchs, setWatchs] = useState<Watch[]>([]);

  const isLoading = useFetchData(setWatchs, API_WATCH);

  if (isLoading) return;

  return (
    <>
      <NavBar />
      <main className="pt-20">
        <HomeBanner />
        <section>
          <div className="flex">
            <Filter />
            <div>
              <SortingBanner />

              <div className="flex gap-10 p-10">
                {watchs.map((watch, i) => (
                  <WatchCard watch={watch} key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Watchs;
