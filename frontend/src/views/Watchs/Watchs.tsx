import WatchCard from "@/components/Card/WatchCard";
import Footer from "@/components/Layout/General/Footer/Footer";
import NavBar from "@/components/Layout/General/NavBar/NavBar";
import { API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";
import Filter from "./Filter/Filter";
import HomeBanner from "./HomeBanner/HomeBanner";
import SortingBanner from "./SortingBanner/SortingBanner";

const Watchs = () => {
  const [watchs, setWatchs] = useState<Watch[]>([]);

  const { isLoading } = useFetchData(setWatchs, API_WATCH);

  if (isLoading) return;

  return (
    <>
      <NavBar />
      <main className="pt-20">
        <HomeBanner />
        <section>
          <div className="flex">
            <Filter setWatchs={setWatchs} />
            <div>
              <SortingBanner nbOfWatchs={watchs.length} />

              <div className="grid grid-cols-4 gap-10 p-10">
                {watchs && watchs.length > 0 ? (
                  watchs.map((watch, i) => <WatchCard watch={watch} key={i} />)
                ) : (
                  <div>
                    <p data-testid="no-watches">
                      Il n'y a aucune montre disponible avec ces filtres
                    </p>
                  </div>
                )}
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
