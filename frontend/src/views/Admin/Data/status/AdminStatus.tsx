import { API_STATUS } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Status } from "@/types/statusType";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HandleStatus from "./HandleStatus";

const AdminStatus = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [handleStatus, setHandleStatus] = useState<boolean>(false);

  const { isLoading } = useFetchData(setStatuses, API_STATUS);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Status</h1>
      {handleStatus ? (
        <HandleStatus setHandleStatus={setHandleStatus} />
      ) : (
        <div className="relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id du status
                </th>
                <th scope="col" className="px-6 py-3">
                  Nom du status
                </th>
              </tr>
            </thead>
            <tbody>
              {statuses.map((status: Status, i) => (
                <tr className="border-b hover:bg-blacklight " key={i}>
                  <td scope="row" className=" py-4">
                    {status.id}
                  </td>
                  <td scope="row" className=" py-4">
                    {status.statusName}
                  </td>
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
          <button
            onClick={() => setHandleStatus(true)}
            className="text-sm border text-white border-purple py-1.5 px-2 rounded-lg text-center mt-10"
          >
            Ajouter un statut
          </button>
        </div>
      )}
    </section>
  );
};

export default AdminStatus;
