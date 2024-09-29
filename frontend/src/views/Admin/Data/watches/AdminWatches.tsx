import { API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";
import HandleWatches from "./HandleWatches";
import HandleBrand from "./HandleBrand";
import HandleMaterial from "./HandleMaterial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AdminWatches = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [handleWatches, setHandleWatches] = useState<boolean>(false);
  const [handleBrand, setHandleBrand] = useState<boolean>(false);
  const [handleMaterial, setHandleMaterial] = useState<boolean>(false);

  const isLoading = useFetchData(setWatches, API_WATCH);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Montres</h1>
      {handleMaterial ? (
        <HandleMaterial setHandleMaterial={setHandleMaterial} />
      ) : handleBrand ? (
        <HandleBrand setHandleBrand={setHandleBrand} />
      ) : handleWatches ? (
        <HandleWatches setHandleWatches={setHandleWatches} />
      ) : (
        <>
          <div className="relative">
            <table className="w-full text-xs text-left mb-10 ">
              <thead className="uppercase p-3">
                <tr>
                  <th className="pl-3">Nom</th>
                  <th>Marque</th>
                  <th>Matière</th>
                  <th>Description</th>
                  <th>Images</th>
                  <th>Disponible</th>
                  <th>
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {watches.map((watch: Watch, i) => (
                  <tr className="border-b hover:bg-blacklight " key={i}>
                    <th className=" pl-3 py-4">{watch.name}</th>
                    <td>{watch.brand.brandName}</td>
                    <td>{watch.material.materialName}</td>
                    <td>{watch.description}</td>
                    <td>
                      <img
                        src={`http://localhost:3333/${watch.images[0].imageUrl}`}
                        alt={watch.name}
                        className="w-10"
                      />
                    </td>
                    <td>{watch.isAvailable ? "✅" : "❌"}</td>
                    <td className="pr-3 text-right">
                      <a
                        href="#"
                        className="font-medium text-greenfluo hover:underline"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-5 justify-around">
            <button
              onClick={() => setHandleMaterial(true)}
              className="text-sm border text-white border-purple py-1.5 px-2 rounded-lg text-center"
            >
              Ajouter une matière
            </button>
            <button
              onClick={() => setHandleWatches(true)}
              className="text-sm border text-white border-greenfluo py-1.5 px-2 rounded-lg text-center"
            >
              Ajouter une montre
            </button>
            <button
              onClick={() => setHandleBrand(true)}
              className="text-sm border text-white border-purple py-1.5 px-2 rounded-lg text-center"
            >
              Ajouter une marque
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default AdminWatches;
