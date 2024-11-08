const HomeBanner = () => {
  return (
    <section className="bg-banner bg-cover bg-center p-10 h-[300px]">
      <h1 data-testid='watchs-title' className="section-title mb-10 text-pretty">
        Toutes nos montres disponibles à la location
      </h1>
      <p className="text-pretty max-w-[400px]">
        Optez pour la location de montres... Parce que les montres qu'on désire
        le plus sont celles qu'on ne possède pas !
      </p>
    </section>
  );
};

export default HomeBanner;
