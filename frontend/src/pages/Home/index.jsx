import React from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header user="Halim" />
      <div className="charts-container flex wrap">
        <div className="bar-chart">
          <BarChart className="div-margin" />
        </div>
        <div className="div-margin">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
