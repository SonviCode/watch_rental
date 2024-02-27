import rolexLogo from "@/assets/logo-rolex.png";
import imgWatch from "@/assets/rolex.jpg";
import imgBack from "@/assets/rolex-submariner-back.png";
import { useState } from "react";
import WatchCalendar from "./Calendar/WatchCalendar";
import Slug from "./Slug/Slug";

const Watch = () => {
  const [img, setImg] = useState<string>(imgWatch);

  return (
    <>
      <Slug />
      <div className="flex gap-20 py-5">
        <div className="w-1/2 flex flex-col items-center gap-10 justify-center">
          <div className="relative">
            <img
              className="absolute top-3 right-3 w-20"
              src={rolexLogo}
              alt="logo rolex"
            />
            <img
              src={img}
              alt="rolex"
              className="rounded-lg h-[350px] w-[300px] object-cover bg-[#FFFFFF]"
            />
          </div>
          <div className="flex gap-5">
            <img
              src={imgWatch}
              onClick={() => setImg(imgWatch)}
              alt="rolex"
              className={`${
                img === imgWatch && "border-purple border-4"
              } rounded-lg w-24 h-24 object-cover cursor-pointer bg-[#FFFFFF]`}
            />
            <img
              src={imgBack}
              onClick={() => setImg(imgBack)}
              alt="rolex"
              className={`${
                img === imgBack && "border-purple border-4"
              } rounded-lg w-24 h-24 object-cover cursor-pointer bg-[#FFFFFF]`}
            />
            <img
              src={imgWatch}
              alt="rolex"
              className="rounded-lg  w-24 h-24 object-cover"
            />
          </div>
        </div>
        <div className="p-5 w-1/2 flex flex-col gap-5">
          <div>
            <p className="text-graylight">Rolex</p>
            <h3 className="font-bold text-xl">SUBMARINER DATE</h3>
          </div>
          <p className="text-graylight text-sm">
            à partir de <span className="text-base">59,99€</span>/jour
          </p>
          <WatchCalendar />
        </div>
      </div>
      <div className="pt-10">
        <h4 className="section-title">Description</h4>
      </div>
    </>
  );
};

export default Watch;
