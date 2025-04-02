import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { activityAdded } from "../../features/activitiesSlice";

const Header = ({ user, className }) => {
  const [jsonData, setJsonData] = useState(null);
  const dispatch = useDispatch();

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

  const addDataToStore = () => {
    jsonData.map((jd) =>
      dispatch(
        activityAdded({
          user_id: jd.user_id,
          date: jd.date,
          steps: jd.steps,
          distance_km: jd.distance_km,
          active_minutes: jd.active_minutes,
        })
      )
    );
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
        <Button text="Upload" onClick={addDataToStore} />
      </div>
    </header>
  );
};

export default Header;
