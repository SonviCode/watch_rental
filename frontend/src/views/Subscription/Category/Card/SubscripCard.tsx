import { FunctionComponent } from "react";

type CardProps = {
  title: string;
  price: string;
  switch_text: string;
  watch_price: string;
};

const SubscripCard: FunctionComponent<CardProps> = ({
  title,
  price,
  switch_text,
  watch_price,
}) => {
  return (
    <div className="rounded-lg bg-blacklight  text-center md:w-1/3 ">
      <div className=" py-5 px-2 lg:p-5 flex flex-col gap-3 md:gap-4 justify-between h-full">
        <h3 className="font-bold text-xl lg:text-2xl ">{title}</h3>
        <hr className="text-gray" />
        <p className="text-graylight text-sm">
          {" "}
          Dès <span className="font-extrabold text-xl">{price}</span>
        </p>
        <hr className="text-gray" />
        <p className="text-xs lg:text-sm">{switch_text}</p>
        <hr className="text-gray" />
        <div>
          <p className="text-xs lg:text-sm">
            Accédez à des montres d'une valeur{" "}
          </p>
          <span className="font-extrabold text-base lg:text-xl">
            {watch_price}
          </span>
        </div>
        <a
          href="#collections"
          className="border border-purple py-2 px-4 rounded-lg text-center text-sm lg:text-base"
        >
          Voir tout les modèles
        </a>
        <button className="gradient-btn py-2 px-4 rounded-lg text-center">
          S'abonner
        </button>
      </div>
    </div>
  );
};

export default SubscripCard;
