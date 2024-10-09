import { purchaseStepsType } from "@/types/purchaseTypes";
import { prevPurchaseStep } from "@/utils/purchaseUtils";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

const StepsPurchase = ({
  purchaseSteps,
  setPurchaseSteps,
}: {
  purchaseSteps: purchaseStepsType[];
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>;
}) => {
  return (
    <>
      <div className=" pt-5 flex justify-around relative">
        {purchaseSteps.map((step: purchaseStepsType, i) => (
          <span
            key={i}
            className={`flex border rounded-full w-10 h-10 items-center justify-center z-10 bg-black ${
              step.actif && "text-greenfluo"
            }`}
          >
            <FontAwesomeIcon icon={step.icon} />
          </span>
        ))}
        <span className="h-2.5 w-2/3 mt-4 bg-white absolute z-0"></span>
        <span
          className={`left-[16%] h-2.5 mt-4 gradient-btn absolute z-0 ${
            purchaseSteps[1].actif ? "w-1/3" : ""
          }`}
        ></span>
      </div>
      {purchaseSteps[1].actif && (
        <div
          onClick={() => prevPurchaseStep(purchaseSteps, setPurchaseSteps)}
          className="cursor-pointer pl-10 pt-5 flex items-center italic text-sm gap-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Revenir à l'étape précédente
        </div>
      )}
    </>
  );
};

export default StepsPurchase;
