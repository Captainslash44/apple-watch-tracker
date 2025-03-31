import React from "react";
import Button from "../Button";
import "./styles.css";

const Header = ({ user, className }) => {
  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Welcome {user}</h1>
      <div className="flex space-between">
        <input type="file" name="file" accept=".csv" />
        <Button text="Upload" />
      </div>
    </header>
  );
};

export default Header;
