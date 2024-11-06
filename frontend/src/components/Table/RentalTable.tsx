import { Rental } from "@/types/rentalTypes";

const RentalTable = ({ rentals }: { rentals: Rental[] }) => {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs border-b">
        <tr>
          <th scope="col" className="px-6 py-3">
            Référence
          </th>
          <th scope="col" className="px-6 py-3">
            Abonnement
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Début
          </th>
          <th scope="col" className="px-6 py-3">
            Fin
          </th>
          <th scope="col" className="px-6 py-3">
            Montre(s) sélectionnée(s)
          </th>
        </tr>
      </thead>
      <tbody>
        {rentals.map((rental, i) => (
          <tr
            key={i}
            className="even:bg-blacklight last:rounded-b-lg last:border-none border-b"
          >
            <td className="px-6 py-4 last:rounded-bl-lg">{rental.id}</td>
            <td className="px-6 py-4">{rental.subscription.title}</td>
            <td
              className={`${
                rental.status.statusName === "ACTIF"
                  ? "text-greenfluo"
                  : "text-purplelight"
              } px-6 py-4`}
            >
              {rental.status.statusName}
            </td>
            <td className="px-6 py-4">
              {new Date(rental.dateStart).toLocaleDateString("fr-FR")}
            </td>
            <td className="px-6 py-4">
              {rental.dateEnd
                ? new Date(rental.dateEnd).toLocaleDateString("fr-FR")
                : "/"}
            </td>
            <td className="last:rounded-br-lg px-6 py-4">
              {rental.watch.map((watch, i) => (
                <p key={i}>
                  {watch.name}
                  <br />
                </p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RentalTable;
