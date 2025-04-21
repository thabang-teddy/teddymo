import React, { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NonAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user , loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user,loading]);

  return children;
};

export default NonAuth;
