import React from "react";

import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="ImageBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full name" placeholder="Full name" type="text" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" type="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link title="Back to Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
