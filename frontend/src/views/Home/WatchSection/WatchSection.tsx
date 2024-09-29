import WatchCard from "@/components/Card/WatchCard";
import { API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";
import { Link } from "react-router-dom";

const WatchSection = () => {
  const [watchs, setWatchs] = useState<Watch[]>([]);

  const isLoading = useFetchData(setWatchs, API_WATCH);

  if (isLoading) return;

  return (
    <section className="py-20">
      <h2 className="section-title mb-2">Louez vos montres</h2>
      <p className="text-graylight mb-10">
        Explorez notre vaste sélection de montres haut de gamme et trouvez votre
        parfaite compagne pour chaque moment.
      </p>
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        {watchs.map((watch, i) => (
          <WatchCard watch={watch} key={i} />
        ))}
        {/* <WatchCard /> */}
        {/* <div className="rounded-lg bg-blacklight relative">
          <div className="absolute top-3 right-3 bg-gray w-8 h-8 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <img
            src={imgWatch}
            alt="rolex"
            className="rounded-t-lg max-h-[200px] w-full object-cover"
          />
          <div className="p-5">
            <p>SUBMARINER DATE</p>
            <p className="text-graylight text-sm">
              à partir de <span className="text-base">59,99€</span>
            </p>
            <p className="text-purplelight">
              Retour le 19 mars <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-blacklight relative">
          <div className="absolute top-3 right-3 bg-gray w-8 h-8 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <img
            src={imgWatch}
            alt="rolex"
            className="rounded-t-lg max-h-[200px] w-full object-cover"
          />
          <div className="p-5">
            <p>SUBMARINER DATE</p>
            <p className="text-graylight text-sm">
              à partir de <span className="text-base">59,99€</span>
            </p>
            <p className="text-greenfluo">
              En stock <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-blacklight relative">
          <div className="absolute top-3 right-3 bg-gray w-8 h-8 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <img
            src={imgWatch}
            alt="rolex"
            className="rounded-t-lg max-h-[200px] w-full object-cover"
          />
          <div className="p-5">
            <p>SUBMARINER DATE</p>
            <p className="text-graylight text-sm">
              à partir de <span className="text-base">59,99€</span>
            </p>
            <p className="text-greenfluo">
              En stock <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div> */}
      </div>
      <Link
        to="/watchs"
        className="gradient-btn p-4 rounded-lg text-center my-0 mx-auto block w-fit transition hover:scale-125 delay-100 duration-300 ease-in-out"
      >
        Voir tout les modèles
      </Link>
    </section>
  );
};

export default WatchSection;
