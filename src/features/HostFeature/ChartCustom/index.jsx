import React from "react";
import "./style.scss";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "faker";

ChartCustom.propTypes = {};

function ChartCustom(props) {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );

  const labels = [
    "20/09/2021",
    "21/09/2021",
    "22/09/2021",
    "23/09/2021",
    "24/09/2021",
    "25/09/2021",
    "26/09/2021",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Tổng người tham gia sự kiện",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
      {
        type: "bar",
        label: "Người tham gia sự kiện mỗi ngày",
        backgroundColor: "#348b9c",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "white",
        borderWidth: 2,
        barThickness: 50,
        barPercentage: 0.5,
      },
    ],
  };

  return (
    <div className="chart-custom">
      <Chart type="bar" data={data}/>;
    </div>
  );
}

export default ChartCustom;
