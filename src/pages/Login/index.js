import React from "react";
import { useHistory } from "react-router-dom";

import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="ImageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>

        <Input label="Email" placeholder="Email" type="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title=" Don't have an account yet? Register now "
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
