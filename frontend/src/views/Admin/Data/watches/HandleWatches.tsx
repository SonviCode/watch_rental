import { API_BRAND, API_MATERIAL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { fetchAddWatch } from "@/services/api/watch";
import { Brand, Material } from "@/types/watchTypes";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const HandleWatches = ({
  setHandleWatches,
}: {
  setHandleWatches: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string>("");
  const [brands, setBrands] = useState<Brand[]>();
  // const [image, setImage] = useState<FileList | null>();
  const [materials, setMaterials] = useState<Material[]>();

  useFetchData(setMaterials, API_MATERIAL);
  const isLoading = useFetchData(setBrands, API_BRAND);

  if (isLoading) return;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchAddWatch(setError, new FormData(e.currentTarget));
  };

  return (
    <>
      <div
        className="flex items-center gap-2 text-sm italic mb-5 cursor-pointer"
        onClick={() => {
          setHandleWatches(false);
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
            id="name"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            name="name"
            required
          />
          <label className="label-form" htmlFor="name">
            Nom
          </label>
        </div>
        <div className="relative">
          <select
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            name="brand_id"
            id="brand_id"
          >
            {brands!.map((brand, i) => (
              <option key={i} value={brand.id}>
                {brand.brandName}
              </option>
            ))}
          </select>
          <label className="label-form" htmlFor="brand_id">
            Marque
          </label>
        </div>
        <div className="relative">
          <select
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            name="material_id"
            id="material_id"
          >
            {materials!.map((mat, i) => (
              <option key={i} value={mat.id}>
                {mat.materialName}
              </option>
            ))}
          </select>
          <label className="label-form" htmlFor="material_id">
            Matière
          </label>
        </div>
        <div className="relative">
          <textarea
            name="description"
            id="description"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-form" htmlFor="description">
            Description
          </label>
        </div>
        <div className="relative">
          <input
            type="file"
            id="imageUrl"
            className="rounded-t-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            name="imageUrl"
            required
            multiple
          />

          <label className="label-form" htmlFor="imageUrl">
            Images
          </label>
        </div>
        <button
          className={`${
            error
              ? "border-red-600 hover:bg-red-600"
              : "border-greenfluo hover:bg-greenfluo"
          } border p-2 rounded-md hover:text-black`}
        >
          Ajouter la montre
        </button>
        {error && <p className="text-red-600 italic">{error}</p>}
      </form>
    </>
  );
};

export default HandleWatches;
