import { API_SUBSCRIPTION } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Subscription } from "@/types/subscriptionTypes";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AdminSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const isLoading = useFetchData(setSubscriptions, API_SUBSCRIPTION);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Abonnements</h1>
      <div className="relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                Prix de l'abonnement
              </th>
              <th scope="col" className="px-6 py-3">
                Prix des montres 
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription: Subscription, i) => (
              <tr className="border-b hover:bg-blacklight " key={i}>
                <th scope="row" className=" py-4  ">
                  {subscription.title}
                </th>
                <td className="px-6 py-4 max-w-0">
                  {subscription.switchText} 
                </td>
                <td className="px-6 py-4">{subscription.price} €</td>
                <td className="px-6 py-4">{subscription.watchMaxPrice} €</td>
                <td className="px-6 py-4 text-right">
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

export default AdminSubscriptions;
