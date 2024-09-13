import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1
        data-testid="account-orders-title"
        className="uppercase font-bold text-xl mb-5"
      >
        <FontAwesomeIcon icon={faCalendar} className="mr-5"/>
        Mes commandes
      </h1>
      // TODO !
    </div>
  );
};

export default Orders;
