import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserCTX } from "../../utilities/contexts";

export default function AuthWrapper({ children }) {
  const { user } = useUserCTX();

  if (user.id) {
    return <>{children}</>;
  } else {
    return <Navigate to='/' />;
  }
}
