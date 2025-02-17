import React, { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AuthProtected: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user , loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
    }
  }, [user]);

  return children;
};

export default AuthProtected;
