import { fetchAddMaterial } from "@/services/api/material";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const HandleMaterial = ({
  setHandleMaterial,
}: {
  setHandleMaterial: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchAddMaterial(setError, new FormData(e.currentTarget));
  };

  return (
    <>
      <div
        className="flex items-center gap-2 text-sm italic mb-5 cursor-pointer"
        onClick={() => {
          setHandleMaterial(false);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>Annuler</p>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        onChange={() => setError("")}
        className=" flex flex-col gap-5"
      >
        <div className="relative">
          <input
            type="text"
            id="materialName"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            name="materialName"
            required
          />
          <label className="label-form" htmlFor="materialName">
            Nom de la matière
          </label>
        </div>
        <button
          className={`${
            error
              ? "border-red-600 hover:bg-red-600"
              : "border-greenfluo hover:bg-greenfluo"
          } border p-2 rounded-md hover:text-black`}
        >
          Ajouter la matière
        </button>
        {error && <p className="text-red-600 italic">{error}</p>}
      </form>
    </>
  );
};

export default HandleMaterial;
