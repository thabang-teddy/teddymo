import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loguserout } from "../../slices/Auth/Thunk.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store.ts";

const Logout: React.FC = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loguserout());

    if (!user && !loading) {
      navigate("/login");
    }
  }, [user, loading]);

  return <div className="container p-5">Logging out...</div>;
};

export default Logout;
