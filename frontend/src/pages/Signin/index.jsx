import React from "react";
import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";
import "./styles.css";

const Signin = () => {
  return (
    <div className="flex column align-center justify-center full-height mont-font">
      <div className="login-form flex column align-center space-between rounded-border">
        <header>
          <h1>Login</h1>
        </header>
        <div className="mid-container flex column align-center space-around full-height">
          <InputWithLabel labelText="Email" placeHolder="Email" type="email" />
          <InputWithLabel
            labelText="Password"
            placeHolder="Password"
            type="password"
          />
          <Button text="Signin" />
        </div>
        <footer>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signin;
