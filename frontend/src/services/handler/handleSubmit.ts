import { DIFFERENT_PASSWORD } from "@/constants/Constants";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { fetchLogin, fetchSignUp } from "../api/auth";

export const handleSignUpSubmit = (
  e: FormEvent<HTMLFormElement>,
  setError: Dispatch<SetStateAction<string>>,
  phone: string,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const elements = e.currentTarget.elements as unknown as HTMLFormElement;

  if (elements.password.value !== elements.password_confirm.value) {
    setError(DIFFERENT_PASSWORD);
    return;
  }

  const location = {
    address: elements.address.value,
    additional_address: elements.additional_address.value,
    city: elements.city.value,
    postal_code: elements.postal_code.value,
  };

  formData.set("phone_number", phone.trim());
  formData.set("location", JSON.stringify(location));

  fetchSignUp(formData, setError, navigate);
};

export const handleLoginSubmit = (
  e: FormEvent<HTMLFormElement>,
  setError: Dispatch<SetStateAction<string>>,
  navigate: NavigateFunction
) => {
  e.preventDefault();

  const elements = e.currentTarget.elements as unknown as HTMLFormElement;
  const email: string = elements.email.value;
  const password: string = elements.password.value;

  // if (email.trim() == "" || password.trim() == "") {
  //   setMsg(INPUT_EMPTY);
  // }

  fetchLogin(email, password, setError, navigate);
};
