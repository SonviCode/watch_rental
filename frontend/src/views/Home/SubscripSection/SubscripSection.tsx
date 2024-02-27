import { Link } from "react-router-dom";
import imgWatch from "@/assets/watch.jpg";

const SubscripSection = () => {
  return (
    <section className="py-10">
      <h2 className="section-title mb-2">Un abonnement tout compris.</h2>
      <p className="text-2xl text-graylight mb-10">
        Vous n'avez plus à vous soucier des détails.{" "}
      </p>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="rounded-lg bg-blacklight p-5 md:p-2 text-center flex flex-col gap-4 md:w-1/3">
          <h3 className="font-bold text-2xl ">Simple</h3>
          <p className="text-graylight md:text-sm lg:text-base">
            Une offre tout compris - assurance, entretien, taxe. Vous n'avez pas
            à vous soucier des détails de l'entretien, du financement ni même de
            l'assurance.
          </p>
          <Link to="/subscription" className="underline text-greenfluo">
            En savoir plus
          </Link>
          <p className="gradient-text text-2xl lg:text-4xl font-extrabold pt-5">
            Abonnement Tout compris
          </p>
        </div>

        <div className="rounded-lg bg-blacklight text-center md:w-1/3">
          <div className="p-5 md:p-2 flex flex-col gap-4 ">
            <h3 className="font-bold text-2xl ">Varié</h3>
            <p className="text-graylight md:text-sm lg:text-base">
              Découvrez une{" "}
              <span className="bg-purple rounded-sm">
                collection exceptionnelle
              </span>{" "}
              de montres soigneusement sélectionnées pour chaque style et
              occasion
            </p>
            <Link
              to="/subscription#collections"
              className="underline text-greenfluo"
            >
              Voir tout les modèles
            </Link>
          </div>
          <img
            src={imgWatch}
            alt="rolex"
            className="rounded-b-lg max-h-40 w-full object-center object-cover"
          />
        </div>

        <div className="rounded-lg bg-blacklight p-5 md:p-2 text-center flex flex-col gap-4 md:w-1/3">
          <h3 className="font-bold text-2xl ">Sans engagement</h3>
          <p className="text-graylight md:text-sm lg:text-base">
            L'abonnement vous offre une liberté totale et vous permet de le
            résilier quand vous le souhaitez.
          </p>
          <Link to="/subscription" className="underline text-greenfluo">
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscripSection;
