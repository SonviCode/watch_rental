import { SERVER_URL } from "@/constants/Constants";
import type { Watch } from "@/types/watchTypes";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slug from "./Slug/Slug";
import { setSubscription } from "@/store/slices/subscriptionSlice";
import { useDispatch } from "react-redux";

const Watch = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const location = useLocation();
  const dispatch = useDispatch();

  const { watch }: { watch: Watch } = location.state;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 flex flex-col items-center gap-10 justify-center ">
          <div className="relative">
            <img
              className="absolute top-3 right-3 w-20"
              src={SERVER_URL + watch.brand.logoImgUrl}
              alt={watch.name}
            />
            <img
              src={SERVER_URL + watch.images[imgIndex].imageUrl}
              alt="rolex"
              className="rounded-lg h-full aspect-square object-cover bg-[#FFFFFF]"
            />
          </div>
          <div className="flex gap-5">
            {watch.images.map((img, i) => (
              <img
                key={i}
                src={
                  SERVER_URL + watch.images[watch.images.indexOf(img)].imageUrl
                }
                onClick={() => setImgIndex(watch.images.indexOf(img))}
                alt="rolex"
                className={`${
                  watch.images.indexOf(img) === imgIndex &&
                  "border-purple border-4"
                } rounded-lg w-24 h-24 object-cover cursor-pointer bg-[#FFFFFF]`}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Slug watchName={watch.name} />
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-graylight">{watch.brand.brandName}</p>
              <h3 className="font-bold text-xl">{watch.name}</h3>
            </div>
            <p className="text-graylight">
              Bracelet en{" "}
              <span className="text-base font-extrabold">
                {watch.material.materialName}
              </span>
            </p>
            <p>
              Disponible dès l'abonnement{" "}
              <span className="text-base font-extrabold uppercase">
                {watch.subscription.title}
              </span>{" "}
            </p>
            {/* <WatchCalendar /> */}
            <Link
              to="/purchase"
              onClick={() => dispatch(setSubscription(watch.subscription))}
              className="m-auto w-full flex justify-center gradient-bg rounded-lg px-2 py-1.5"
            >
              S'abonner
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <h4 className="section-title mb-5">Description</h4>
        <p>{watch.description}</p>
      </div>
    </>
  );
};

export default Watch;
