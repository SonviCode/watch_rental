import SubscripCard from "./Card/SubscripCard";

const SubscripCategory = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 lg:gap-10 py-10 xl:p-10 ">
      <SubscripCard
        title={"Tempo Essentiel"}
        price={"145€/mois"}
        switch_text={
          "Changez de montres jusqu'à 4 fois par an (4 échanges inclus par an)"
        }
        watch_price={"jusqu'à 5 000€"}
      />
      <SubscripCard
        title={"Tempo Avancé"}
        price={"285€/mois"}
        switch_text={
          "Changez de montres jusqu'à 4 fois par an (4 échanges inclus par an)"
        }
        watch_price={"jusqu'à 10 000€"}
      />
      <SubscripCard
        title={"Tempo Premium"}
        price={"495€/mois"}
        switch_text={
          "Changez de montres autant de fois que nécessaire (échange illimité)"
        }
        watch_price={"jusqu'à 20 000€"}
      />
    </section>
  );
};

export default SubscripCategory;
