const HowSection = () => {
  return (
    <section className="py-10">
      <h2 className="section-title">Comment ça marche ?</h2>
      <p className="text-graylight mb-10">Suivez ces étapes simples</p>
      <div className="text-center flex flex-col gap-5">
        <h3 className="text-2xl section-title text-greenfluo">Abonnement</h3>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                1
              </span>
            </p>
            <p>
              Choisissez votre type d'abonnement et votre première montre
            </p>
          </div>
          <hr className="text-purplelight h-auto border-l border-purplelight" />
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                2
              </span>
            </p>
            <p>Portez et profitez de votre montre, changez de montre si besoin selon les conditions de l'abonnement</p>
          </div>
          <hr className="text-purplelight h-auto border-l border-purplelight" />
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                3
              </span>
            </p>
            <p>À la fin de la période d'abonnement, renvoyez la montre que vous avez.</p>
          </div>
        </div>
        <span className="py-5 text-4xl font-extrabold">OU</span>
        <h3 className="text-2xl section-title text-greenfluo">Location courte durée</h3>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                1
              </span>
            </p>
            <p>
              Choisissez et louez votre montre préférée parmi celles disponibles
            </p>
          </div>
          <hr className="text-purplelight h-auto border-l border-purplelight" />
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                2
              </span>
            </p>
            <p>Portez et profitez de votre montre</p>
          </div>
          <hr className="text-purplelight h-auto border-l border-purplelight" />
          <div className=" flex flex-col items-center gap-2 md:gap-5 md:w-1/3">
            <p className="flex items-center gap-3">
              Étape{" "}
              <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
                3
              </span>
            </p>
            <p>À la fin de la période de location, renvoyez la montre.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
