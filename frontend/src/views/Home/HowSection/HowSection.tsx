const HowSection = () => {
  return (
    <section className="py-10">
      <h2 className="section-title">Comment ça marche ?</h2>
      <p className="text-graylight mb-10">Suivez ces étapes simples</p>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="text-center flex flex-col items-center gap-5 md:w-1/3">
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
        <div className="text-center flex flex-col items-center gap-5 md:w-1/3">
          <p className="flex items-center gap-3">
            Étape{" "}
            <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
              2
            </span>
          </p>
          <p>Portez et profitez de votre montre</p>
        </div>
        <hr className="text-purplelight h-auto border-l border-purplelight" />
        <div className="text-center flex flex-col items-center gap-5 md:w-1/3">
          <p className="flex items-center gap-3">
            Étape{" "}
            <span className="w-8 h-8 rounded-full border-white flex items-center justify-center border-2">
              3
            </span>
          </p>
          <p>À la fin de la période de location, renvoyez la montre.</p>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
