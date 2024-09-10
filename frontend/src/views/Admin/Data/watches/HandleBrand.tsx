import { fetchAddBrand } from "@/services/api/brand";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const HandleBrand = ({
  setHandleBrand,
}: {
  setHandleBrand: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchAddBrand(setError, new FormData(e.currentTarget));
  };

  return (
    <>
      <div
        className="flex items-center gap-2 text-sm italic mb-5 cursor-pointer"
        onClick={() => {
          setHandleBrand(false);
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
            id="brandName"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            name="brandName"
            required
          />
          <label className="label-form" htmlFor="brandName">
            Nom de la marque
          </label>
        </div>
        <button
          className={`${
            error
              ? "border-red-600 hover:bg-red-600"
              : "border-greenfluo hover:bg-greenfluo"
          } border p-2 rounded-md hover:text-black`}
        >
          Ajouter la marque
        </button>
        {error && <p className="text-red-600 italic">{error}</p>}
      </form>
    </>
  );
};

export default HandleBrand;
