import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const ConfirmModal = ({
  setIsUnsubscribeModalOpen,
  onClick,
  content,
}: {
  setIsUnsubscribeModalOpen: Dispatch<SetStateAction<boolean>>;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  content: string;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blacklight rounded-lg p-10 shadow-lg text-center flex flex-col gap-10">
        <p>{content}</p>
        <div className="flex justify-between">
          <button className="border rounded-lg p-2" onClick={onClick}>
            Oui, sûr
          </button>
          <button
            className="border rounded-lg p-2"
            onClick={() => setIsUnsubscribeModalOpen(false)}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
