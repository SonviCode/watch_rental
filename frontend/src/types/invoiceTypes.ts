import { Rental } from "./rentalTypes";
import { Subscription } from "./subscriptionTypes";

export type Invoice = {
  id: string;
  rental: Rental;
  invoiceNumber: string;
  amount: number;
  pdfUrl: string;
  status: string;
  dateStart: Date;
  dateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type FetchCreateInvoiceData = {
  rental_id: string;
  amount: number;
  date_start: Date;
  subscription: Subscription;
};
