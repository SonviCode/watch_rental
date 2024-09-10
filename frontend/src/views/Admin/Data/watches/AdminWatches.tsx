import { API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";
import HandleWatches from "./HandleWatches";
import HandleBrand from "./HandleBrand";

const AdminWatches = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [handleWatches, setHandleWatches] = useState<boolean>(false);
  const [handleBrand, setHandleBrand] = useState<boolean>(false);

  const isLoading = useFetchData(setWatches, API_WATCH);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Montres</h1>
      {handleBrand ? (
        <HandleBrand setHandleBrand={setHandleBrand} />
      ) : handleWatches ? (
        <HandleWatches setHandleWatches={setHandleWatches} />
      ) : (
        <>
          <div className="relative">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nom
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Marque
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Disponible
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {watches.map((watch: Watch, i) => (
                  <tr className="border-b hover:bg-blacklight " key={i}>
                    <th scope="row" className=" py-4  ">
                      {watch.name}
                    </th>
                    <td className="px-6 py-4 max-w-0">{watch.brand}</td>
                    <td className="px-6 py-4">{watch.description}</td>
                    <td className="px-6 py-4">{watch.isAvailable}</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-greenfluo hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-5 items-end">
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
