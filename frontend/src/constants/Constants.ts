// ---global
export const BRAND_NAME = "TEMPO";

// ------API
const API_ROOTDIR = "http://localhost:3333/api/v1/";
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
// ---subscription
export const API_SUBSCRIPTION = API_ROOTDIR + "subscription";
// ---watch
export const API_WATCH = API_ROOTDIR + "watch";
// ---brand
export const API_BRAND = API_ROOTDIR + "brand";
// ---material
export const API_MATERIAL = API_ROOTDIR + "material";

// ---ACCOUNT
export const DIFFERENT_PASSWORD = "Les mots de passes sont différents";
export const INVALID_CREDENTIALS = "Informations d'identification invalide";
export const GENERIC_ERROR = "Une erreur s'est produite, veuillez réessayer";

// ---Subscription

// ---Watches

// ---Calendar
export const MINIMUM_RENTAL_DAYS = 3;
export const MINIMUM_RENTAL_DAYS_ERROR =
  "Vous devez sélectionner au minimum 3 jours";
export const DISABLED_DATE_SLECTED =
  "Vous ne pouvez pas sélectionner une période contenant une indisponibilité";
