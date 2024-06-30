// ---global
export const BRAND_NAME = "TEMPO"

// ------API
const API_ROOTDIR = "http://localhost:3333/api/";
// ---auth
export const API_LOGIN = API_ROOTDIR + "auth/login";
export const API_LOGOUT = API_ROOTDIR + "auth/logout";
export const API_SIGNUP = API_ROOTDIR + "auth/signup";
export const API_CHECK_AUTH = API_ROOTDIR + "auth/check";
// ---user
export const API_USER = API_ROOTDIR + "user";

// ---ACCOUNT
export const DIFFERENT_PASSWORD = "Les mots de passes sont différents"
export const INVALID_CREDENTIALS = "Informations d'identification invalide"
export const GENERIC_ERROR = "Une erreur s'est produite, veuillez réessayer"

// ---Subscription


// ---Watches


// ---Calendar
export const MINIMUM_RENTAL_DAYS = 3;
export const MINIMUM_RENTAL_DAYS_ERROR = "Vous devez sélectionner au minimum 3 jours"
export const DISABLED_DATE_SLECTED = "Vous ne pouvez pas sélectionner une période contenant une indisponibilité"
