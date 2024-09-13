import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alerts = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1
        data-testid="account-alerts-title"
        className="uppercase font-bold text-xl mb-5"
      >
        <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-5"/>
        Mes alertes
      </h1>
      // TODO !
    </div>
  );
};

export default Alerts;
