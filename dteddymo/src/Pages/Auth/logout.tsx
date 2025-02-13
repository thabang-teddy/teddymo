import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../slices/Auth/Thunk.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store.ts";

const Logout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
