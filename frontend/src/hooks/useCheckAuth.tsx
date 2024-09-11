import { API_USER } from "@/constants/Constants";
import { useEffect, useRef, useState } from "react";

export default function useCheckAuth() {
  const [authed, setAuthed] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch(API_USER, {
          credentials: "include",
        });

        setAuthed(res.ok);
      } catch (e) {
        setAuthed(false);
      } finally {
        setLoading(false);
      }
    };

    console.log(authed);

    checkAuth();

    calledOnce.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authed, isLoading };
}
