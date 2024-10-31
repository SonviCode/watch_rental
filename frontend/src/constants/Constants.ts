import {
  faClock,
  faCreditCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

// ---global
export const BRAND_NAME = "TEMPO";

// ---server test url
export const SERVER_URL = "http://localhost:3333/";
// ---client test url
export const CLIENT_URL = "http://localhost:5173/";
// ------API
const API_ROOTDIR = SERVER_URL + "api/v1/";
// ---auth
export const API_LOGIN = API_ROOTDIR + "auth/login";
export const API_LOGOUT = API_ROOTDIR + "auth/logout";
export const API_SIGNUP = API_ROOTDIR + "auth/signup";
export const API_VERIFY_OTP_MAIL = API_ROOTDIR + "auth/verify-email";
export const API_RESEND_OTP_MAIL = API_ROOTDIR + "auth/resend-otp-email";
export const API_VERIFY_OTP_SMS = API_ROOTDIR + "auth/verify-sms";
export const API_RESEND_OTP_SMS = API_ROOTDIR + "auth/resend-otp-sms";
export const API_IS_ADMIN = API_ROOTDIR + "auth/admin";
// ---user
export const API_USER = API_ROOTDIR + "user";
export const API_GET_ALL_USERS = API_ROOTDIR + "user/all-users";
// ---address
export const API_ADDRESS = API_ROOTDIR + "address";
// ---purchase
export const API_PURCHASE = API_ROOTDIR + "purchase";
export const API_PURCHASE_CREATE_STRIPE_PAYMENT =
  API_ROOTDIR + "purchase/create-payment-intent";
// ---subscription
export const API_SUBSCRIPTION = API_ROOTDIR + "subscription";
// ---watch
export const API_WATCH = API_ROOTDIR + "watch";
// ---brand
export const API_BRAND = API_ROOTDIR + "brand";
// ---material
export const API_MATERIAL = API_ROOTDIR + "material";
// ---rental
export const API_RENTAL = API_ROOTDIR + "rental";

// ---ACCOUNT
export const DIFFERENT_PASSWORD = "Les mots de passes sont différents";
export const INVALID_CREDENTIALS = "Informations d'identification invalide";
export const INVALID_OTP_CODE = "Le code est incorrect, veuillez réessayer";
export const GENERIC_ERROR = "Une erreur s'est produite, veuillez réessayer";

// ---PURCHASE
export const ERROR_SELECT_A_WATCH = "Vous devez sélectionnez une montre !";
export const ERROR_SELECT_A_DATE =
  "Vous devez sélectionnez une date de début de location !";
export const defaultPurchaseSteps = [
  { title: "subscription", icon: faClock, step: 1, actif: true },
  { title: "userData", icon: faUser, step: 2, actif: false },
  { title: "payment", icon: faCreditCard, step: 3, actif: false },
];
export const returnUrlAfterSuccessPayment = "paiement-effectue";
export const paymentElementOptions: StripePaymentElementOptions = {
  layout: "tabs",
};
export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

// ---Subscription

// ---Watches

// ---Calendar
export const MINIMUM_RENTAL_DAYS = 3;
export const MINIMUM_RENTAL_DAYS_ERROR =
  "Vous devez sélectionner au minimum 3 jours";
export const DISABLED_DATE_SLECTED =
  "Vous ne pouvez pas sélectionner une période contenant une indisponibilité";

// ---Colors
export const BLACK_COLOR = "#010001";
export const BLACKLIGHT_COLOR = "#191819";
export const PURPLE_COLOR = "#492394";
export const PURPLELIGHT_COLOR = "#9C62EF";
export const GREENFLUO_COLOR = "#0BFBA3";
export const GRAY_COLOR = "#555F6B";
export const GRAYLIGHT_COLOR = "#A9A9A9";
