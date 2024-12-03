import { API_WATCH_RENTAL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";

const Admin = () => {
  const [watches, setWatches] = useState<Watch[]>([]);

  const { isLoading } = useFetchData(setWatches, API_WATCH_RENTAL);

  if (isLoading) return;

  console.log(watches);

  const watchesInRental = watches.filter((w) => !w.isAvailable);

  console.log(watchesInRental);

  return (
    <div className="p-10">
      <h1 className="uppercase mb-10">Tableau de bord</h1>
      <h2>Montres en location</h2>
      {watchesInRental.length ? (
        <table className="w-full text-xs text-left mb-10 ">
          <thead className="uppercase p-3">
            <tr>
              <th className="pl-3">Montre</th>
              <th>Utilisateur</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {watchesInRental.map((watch: Watch, i) => (
              <tr className="border-b hover:bg-blacklight " key={i}>
                <td>{watch.name}</td>
                <td>{watch.rental![0].user.email}</td>
                <td>{new Date(watch.rental![0].dateStart).toLocaleDateString("fr-FR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Aucune montre actuellement en location </div>
      )}
    </div>
  );
};

export default Admin;
