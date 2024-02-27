import img from "@/assets/abonnement.jpg";

const SubscipDescription = () => {
  return (
    <section className="py-10">
      <h2 className="section-title mb-5">Le luxe s'offre à vous</h2>
      <p className="text-graylight max-w-[900px] mb-10 text-pretty">
        Profitez d'un accès aux montres premium les plus populaires, mais aussi
        les plus exclusifs. L'abonnement vous permet de porter{" "}
        <span className="underline">non pas une seule</span>, mais <span className="bg-purple rounded-sm">plusieurs montres</span> qui correspondent
        à votre style de vie.
      </p>
      <div className="flex flex-col md:flex-row md:gap-10 justify-center lg:px-10">
        <img src={img} alt="montre de luxe" className="rounded-xl max-w-[500px] object-cover md:w-1/2" />
        <div className="font-extrabold text-3xl tracking-wide md:w-1/2">
            <ul className="flex flex-col gap-5 sm:p-10 py-10">
                <li>- Assurance</li>
                <li>- Entretien</li>
                <li>- Livraisons</li>
                <li>- Assistance</li>
            </ul>
            <p>Tout ça, <span className="gradient-text">sans engagement</span></p>
        </div>
      </div>
    </section>
  );
};

export default SubscipDescription;
