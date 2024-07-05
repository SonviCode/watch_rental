import { useLocation } from "react-router-dom";

const Purchase = () => {
  const location = useLocation();
  const { subscription } = location.state;

  console.log(location);
  

  return (
    <section>
      <div>
        <h1>achat : Tempo {subscription.title}</h1>
        <span className="font-extrabold text-xl">
            {subscription.price}€/mois
          </span>
      </div>
    </section>
  );
};

export default Purchase;
