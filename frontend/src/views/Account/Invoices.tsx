import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invoices = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1
        data-testid="account-invoices-title"
        className="uppercase font-bold text-xl mb-5"
      >
        <FontAwesomeIcon icon={faFileInvoice} className="mr-5" />
        Mes factures
      </h1>
      // TODO !
    </div>
  );
};

export default Invoices;
