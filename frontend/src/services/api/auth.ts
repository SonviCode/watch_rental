import {
  API_LOGIN,
  API_LOGOUT,
  API_RESEND_OTP_MAIL,
  API_SIGNUP,
  API_VERIFY_OTP_MAIL,
  GENERIC_ERROR,
  INVALID_CREDENTIALS,
  INVALID_OTP_CODE,
} from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  API_RESEND_OTP_SMS,
  API_VERIFY_OTP_SMS,
} from "../../constants/Constants";
import { fetchCreateAddress } from "./user";
import { getCookie } from "@/utils/cookieUtils";

/**
 * service to sign up and add user
 *
 * @param formData content of article to add
 * @param setError to display error message if needed
 */
export const fetchSignUp = async (
  formData: FormData,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await fetch(API_SIGNUP, {
      method: "POST",
      headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")!,
      },
      body: formData,
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.errors[0].message);
      return;
    }

    formData.set("user_id", data.id);

    await fetchCreateAddress(formData, setError);

    fetchLogin(data.email, formData.get("password") as string, setError);
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 * Service to fetch data for login and call the fetch user function
 *
 * @param email
 * @param password
 * @param setError
 * @returns
 */
export const fetchLogin = async (
  email: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await fetch(API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")!,
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError(INVALID_CREDENTIALS);
      return;
    }

    // navigate("/account");
    location.reload();
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 * Function to logout the user
 */
export const fetchLogout = async (navigate: NavigateFunction) => {
  fetch(API_LOGOUT, {
    method: "POST",
    headers: {
      "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")!,
    },
    credentials: "include",
  })
    .then(() => navigate("/"))
    .catch((e) => console.error(e));
};

/**
 * Service to verify mail by OTP code
 *
 * @param code
 * @param setError
 * @returns
 */
export const fetchVerifyMail = async (
  code: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await fetch(API_VERIFY_OTP_MAIL, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")!,
      },
      credentials: "include",
      body: JSON.stringify({ code }),
    });

    if (!res.ok) {
      setError(INVALID_OTP_CODE);
      return;
    }

    location.reload();
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 * Service to resend otp email code
 *
 * @param setError
 * @returns
 */
export const fetchResendOtpEmail = async (
  setMessage: Dispatch<SetStateAction<string>>
) => {
  try {
    await fetch(API_RESEND_OTP_MAIL, {
      method: "POST",
      credentials: "include",
    });
  } catch (e) {
    setMessage(GENERIC_ERROR);
  }
};

/**
 * Service to verify mail by OTP code
 *
 * @param code
 * @param setError
 * @returns
 */
export const fetchVerifySms = async (
  code: string,
  setError: Dispatch<SetStateAction<string>>,
  navigate: NavigateFunction
) => {
  try {
    const res = await fetch(API_VERIFY_OTP_SMS, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ code }),
    });

    if (!res.ok) {
      setError(INVALID_CREDENTIALS);
      return;
    }

    navigate("/account");
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 * Service to resend otp email code
 *
 * @param setError
 * @returns
 */
export const fetchResendOtpSms = async (
  setMessage: Dispatch<SetStateAction<string>>
) => {
  try {
    await fetch(API_RESEND_OTP_SMS, {
      method: "POST",
      credentials: "include",
    });
  } catch (e) {
    setMessage(GENERIC_ERROR);
  }
};
