import AccountLayout from "@/components/Layout/Account/AccountLayout";
import AdminLayout from "@/components/Layout/Admin/AdminLayout";
import GeneralLayout from "@/components/Layout/General/GeneralLayout";
import PurchaseLayout from "@/components/Layout/Purchase/PurchaseLayout";
import Account from "@/views/Account/Account";
import Alerts from "@/views/Account/Alerts";
import Favoris from "@/views/Account/Favoris";
import Invoices from "@/views/Account/Invoices";
import Rentals from "@/views/Account/Rentals";
import Admin from "@/views/Admin/Admin";
import AdminInvoices from "@/views/Admin/Data/invoices/AdminInvoices";
import AdminRentals from "@/views/Admin/Data/rentals/AdminRentals";
import AdminStatus from "@/views/Admin/Data/status/AdminStatus";
import AdminSubscriptions from "@/views/Admin/Data/subscriptions/AdminSubscriptions";
import AdminUsers from "@/views/Admin/Data/users/AdminUsers";
import AdminWatches from "@/views/Admin/Data/watches/AdminWatches";
import Login from "@/views/Auth/Login/Login";
import SignUp from "@/views/Auth/SignUp/SignUp";
import VerifyEmail from "@/views/Auth/Verify/VerifyEmail";
import VerifyPhoneNumber from "@/views/Auth/Verify/VerifyPhoneNumber";
import Contact from "@/views/Contact/Contact";
import Home from "@/views/Home/Home";
import ContainerPurchase from "@/views/Purchase/ContainerPurchase";
import PaymentCompleted from "@/views/Purchase/stripe/PaymentCompleted";
import Subscription from "@/views/Subscription/Subscription";
import Watch from "@/views/Watch/Watch";
import Watchs from "@/views/Watchs/Watchs";
import { Navigate } from "react-router-dom";
import { ProtectedAdminRoute } from "./ProtectedAdminRoute";
import { ProtectedAuthRoute } from "./ProtectedAuthRoute";

export const routes = [
  {
    element: <GeneralLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        element: <ProtectedAuthRoute />,
        children: [
          {
            // path: "/account",
            element: <AccountLayout />,
            children: [
              { path: "/account", element: <Account /> },
              { path: "/account/favoris", element: <Favoris /> },
              { path: "/account/alerts", element: <Alerts /> },
              { path: "/account/location", element: <Rentals /> },
              { path: "/account/invoices", element: <Invoices /> },
            ],
          },
          { path: "/paiement-effectue", element: <PaymentCompleted /> },
          {
            path: "/verif-email",
            element: <VerifyEmail />,
          },
          {
            path: "/verif-sms",
            element: <VerifyPhoneNumber />,
          },
        ],
      },
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/contact", element: <Contact /> },
      { path: "/watch/:name", element: <Watch /> },
    ],
  },
  { path: "/watchs", element: <Watchs /> },
  {
    element: (
      <ProtectedAdminRoute>
        <AdminLayout />
      </ProtectedAdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/subscriptions",
        element: <AdminSubscriptions />,
      },
      {
        path: "/admin/watches",
        element: <AdminWatches />,
      },
      {
        path: "/admin/status",
        element: <AdminStatus />,
      },
      {
        path: "/admin/factures",
        element: <AdminInvoices />,
      },
      {
        path: "/admin/locations",
        element: <AdminRentals />,
      },
    ],
  },
  {
    element: <PurchaseLayout />,
    children: [{ path: "/purchase", element: <ContainerPurchase /> }],
  },
];
