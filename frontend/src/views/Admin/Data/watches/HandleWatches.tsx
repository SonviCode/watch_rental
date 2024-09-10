import { useState } from "react";

const HandleWatches = () => {
  const [error, setError] = useState<string>("");

  return (
    <form
      // onSubmit={(e) => handleSignUpSubmit(e, setError, phone, navigate)}
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
        <input
          type="text"
          name="brand"
          id="brand"
          className="rounded-md bg-blacklight px-4 py-3 peer w-full"
          placeholder=""
          required
        />
        <label className="label-form" htmlFor="brand">
          Marque
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          name="material"
          id="material"
          className="rounded-md bg-blacklight px-4 py-3 peer w-full"
          placeholder=""
          required
        />
        <label className="label-form" htmlFor="material">
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
  );
};

export default HandleWatches;
