import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserCTX } from "../utilities/contexts";

export default function useSignout() {
  const { setUser } = useUserCTX();
  const nav = useNavigate();
  return () => {
    // signout user with api
    setUser({});
    localStorage.removeItem("AT");
    nav("/");
  };
}
