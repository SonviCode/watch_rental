import { API_USER } from "@/constants/Constants";
import { User } from "@/types/userType";
import { useState } from "react";
import useFetchData from "./useFetchData";

export default function useUser() {
  const [user, setUser] = useState<User>();

  const { isLoading } = useFetchData(setUser, API_USER);

  return { isLoading, user, setUser };
}
