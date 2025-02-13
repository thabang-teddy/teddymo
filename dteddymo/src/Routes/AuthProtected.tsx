import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AuthProtected: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthProtected;
