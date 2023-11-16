import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Win",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Loss",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  return (
    <div className="App">
      <h1>React Charts</h1>
      <div className="row">
        {["bar", "line", "area", "radar", "scatter", "heatmap"].map((chartType, index) => (
          <div className="col-4" key={index}>
            <Chart
              options={{ ...state.options, chart: { ...state.options.chart, type: chartType } }}
              series={state.series}
              type={chartType}
              width="450"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
