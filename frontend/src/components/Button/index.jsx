import React from "react";
import "./styles.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="cta rounded-border mont-font" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
