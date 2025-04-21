import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { login } from "../../slices/Auth/Thunk.ts";
import { AppDispatch } from "../../store.ts";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((data) => {
        if (data == null) {
            setErrors((prevErrors) => [...prevErrors, "Could not Login"]);
        }
      })
      .catch(() => setErrors((prevErrors) => [...prevErrors, "Could not Login"]));
  };

  return (
    <div className="vh-100 vw-100 row m-auto">
      <div className="col-md-5 col-12 m-auto">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            {
              errors.map((item: string, key: number) =>{
                  return (<p key={key} className="text-danger">{item}</p>)
              })
            }
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
