import { API_INVOICES_BY_USER, SERVER_URL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import { Invoice } from "@/types/invoiceTypes";
import { faFileInvoice, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const { user } = useUserOutletContext();

  const { isLoading } = useFetchData(
    setInvoices,
    API_INVOICES_BY_USER + user?.id
  );

  if (isLoading) return;

  console.log(invoices);

  return (
    <div className="flex flex-1 pl-10 flex-col gap-10 py-5 w-full">
      <h1
        data-testid="account-invoices-title"
        className="uppercase font-bold text-xl"
      >
        <FontAwesomeIcon icon={faFileInvoice} className="mr-5" />
        Mes factures
      </h1>
      <div className="border rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Référence
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Montant
              </th>
              <th scope="col" className="px-6 py-3">
                Document
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, i) => (
              <tr key={i} className="even:bg-blacklight last:rounded-b-lg last:border-none border-b">
                <td className="px-6 py-4 last:rounded-bl-lg">
                  {invoice.invoiceNumber}
                </td>
                <td className="px-6 py-4">
                  du {new Date(invoice.dateStart).toLocaleDateString("fr-FR")}{" "}
                  au {new Date(invoice.dateEnd).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-6 py-4">{invoice.amount}€</td>
                <td className="last:rounded-br-lg px-6 py-4">
                  <a
                    href={SERVER_URL + invoice?.pdfUrl}
                    target="_blank"
                    download
                    className="text-lg"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
