import { useState } from "react";

const SubscripCollections = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <section className="py-10" id="collections">
      <h2 className="section-title mb-5">Nos collections</h2>
      <p className="text-graylight mb-10">
        Toutes nos montres selon l'abonnement choisi.
      </p>
      <div>
        <div className="flex flex-col md:flex-row w-full gap-3 md:gap-5 text-center justify-around mb-5">
          <span
            onClick={() => setIndex(1)}
            className={`${
              index === 1 ? "bg-purple" : "bg-blacklight"
            } rounded-full p-2 md:w-1/3 cursor-pointer`}
          >
            Tempo Essentiel
          </span>
          <span
            onClick={() => setIndex(2)}
            className={`${
              index === 2 ? "bg-purple" : "bg-blacklight"
            } rounded-full p-2 md:w-1/3 cursor-pointer`}
          >
            Tempo Avancé
          </span>
          <span
            onClick={() => setIndex(3)}
            className={`${
              index === 3 ? "bg-purple" : "bg-blacklight"
            } rounded-full p-2 md:w-1/3 cursor-pointer`}
          >
            Tempo Premium
          </span>
        </div>
        <div className="w-full rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 sm:gap-5">
          {/* <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard /> */}
        </div>
      </div>
    </section>
  );
};

export default SubscripCollections;
