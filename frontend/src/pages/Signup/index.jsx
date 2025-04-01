import React from "react";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import "./styles.css";

const Signup = () => {
  return (
    <div className="flex column align-center justify-center full-height mont-font">
      <div className="register-form flex column align-center space-between rounded-border">
        <header>
          <h1>Register</h1>
        </header>
        <div className="center-container flex column align-center space-around full-height">
          <InputWithLabel
            labelText="Fullname"
            placeHolder="Fullname"
            type="text"
          />
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
            Already have an account? <a href="/login">Login</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
