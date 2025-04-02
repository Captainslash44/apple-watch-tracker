import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";

import "./styles.css";
import React from "react";
import Button from "../Button";

import { useSelector } from "react-redux";
import { useState } from "react";
import { selectAllActivities } from "../../features/activitiesSlice";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const BarChart = ({ className }) => {
  const activities = useSelector(selectAllActivities);
  const [paginate, setPaginate] = useState(7);
  // console.log(activities);
  const data = {
    labels: [],
    datasets: [
      {
        label: "Steps",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(125, 25, 46)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const activitiesPaginated = activities.slice(paginate - 7, paginate);
  const organizeData = activitiesPaginated.map(
    (act) => (data.labels.push(act.date), data.datasets[0].data.push(act.steps))
  );
  const options = {};

  return (
    <div className={`flex ${className}`}>
      <Button
        className="chart-button"
        onClick={() => {
          setPaginate(paginate - 7);
        }}
      />
      <Bar options={options} data={data} />
      <Button
        className="chart-button"
        onClick={() => {
          setPaginate(paginate + 7);
        }}
      />
    </div>
  );
};

export default BarChart;
