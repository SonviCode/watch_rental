import WatchCard from "@/components/Card/WatchCard";
import Filter from "./Filter/Filter";
import HomeBanner from "./HomeBanner/HomeBanner";
import SortingBanner from "./SortingBanner/SortingBanner";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Footer from "@/components/Layout/Footer/Footer";

const Watchs = () => {
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
                <WatchCard />
                <WatchCard />
                <WatchCard />
                {/* <WatchCard /> */}
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
