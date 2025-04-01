import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

const Header = ({ user, className }) => {
  const [jsonData, setJsonData] = useState(null);

  const convertCSVToJson = (csvData) => {
    const lines = csvData.split("\n");

    const headers = lines[0].split(",");
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }
    return result;
  };

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;

      const jsonData = convertCSVToJson(csvData);
      setJsonData(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Welcome {user}</h1>
      <div className="flex space-between">
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={handleCSVInputChange}
        />
        <Button
          text="Upload"
          onClick={() => {
            console.log(jsonData);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
