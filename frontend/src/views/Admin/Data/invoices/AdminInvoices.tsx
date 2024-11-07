import { API_INVOICE, SERVER_URL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Invoice } from "@/types/invoiceTypes";
import { faEdit, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AdminInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const { isLoading } = useFetchData(setInvoices, API_INVOICE);

  if (isLoading) return;

  return (
    <section className="p-5 w-full">
      <h1 className="tracking-wide uppercase text-xl mb-5">Factures</h1>

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
                Montant
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Document
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice: Invoice, i) => (
              <tr className="border-b hover:bg-blacklight " key={i}>
                <td className="px-6 py-4">{invoice.invoiceNumber}</td>
                <td className="px-6 py-4">{invoice.rental.user.email}</td>
                <td className="px-6 py-4">{invoice.amount}€</td>
                <td className="px-6 py-4">
                  du {new Date(invoice.dateStart).toLocaleDateString("fr-FR")}{" "}
                  au {new Date(invoice.dateEnd).toLocaleDateString("fr-FR")}
                </td>
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

export default AdminInvoices;
