import { API_RENTAL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Rental } from "@/types/rentalTypes";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AdminRentals = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);

  const { isLoading } = useFetchData(setRentals, API_RENTAL);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Locations</h1>

      <div className="relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Numéro
              </th>
              <th scope="col" className="px-6 py-3">
                Utilisateur
              </th>
              <th scope="col" className="px-6 py-3">
                Statut
              </th>
              <th scope="col" className="px-6 py-3">
                Abonnement
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Montre(s) sélectionnée(s)
              </th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental: Rental, i) => (
              <tr className="border-b hover:bg-blacklight " key={i}>
                <td className="px-6 py-4">{rental.rentalNumber}</td>
                <td className="px-6 py-4">{rental.user.email}</td>
                <td
                  className={`${
                    rental.status.statusName === "ACTIF"
                      ? "text-greenfluo"
                      : "text-purplelight"
                  } px-6 py-4`}
                >
                  {rental.status.statusName}
                </td>
                <td className="px-6 py-4">{rental.subscription.title}</td>
                <td className="px-6 py-4">
                  {new Date(rental.dateStart).toLocaleDateString("fr-FR")} -{" "}
                  {rental.dateEnd
                    ? new Date(rental.dateEnd).toLocaleDateString("fr-FR")
                    : "actif"}
                </td>
                <td className="last:rounded-br-lg px-6 py-4">
                  {[...rental.watch]
                    .sort(
                      (a, b) =>
                        new Date(b.pivotDateStart!).getTime() -
                        new Date(a.pivotDateStart!).getTime()
                    )
                    .map((watch, i) => (
                      <div className="flex gap-2 items-center">
                        <p key={i}>{watch.name}</p>
                        <span className="text-graylight text-xs">
                          {new Date(watch.pivotDateStart!).toLocaleDateString(
                            "fr-FR"
                          )}{" "}
                          -{" "}
                          {watch.pivotDateEnd
                            ? new Date(watch.pivotDateEnd).toLocaleDateString(
                                "fr-FR"
                              )
                            : "actif"}
                        </span>
                      </div>
                    ))}
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
      </div>
    </section>
  );
};

export default AdminRentals;
