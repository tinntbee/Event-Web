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
  const { data } = props;
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );

  const labels = data.displayedDate;

  const dataChart = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Tổng người tham gia sự kiện",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: data.totalFromFirstDay,
      },
      {
        type: "bar",
        label: "Người tham gia sự kiện mỗi ngày",
        backgroundColor: "#348b9c",
        data: data.participantsPerDay,
        borderColor: "white",
        borderWidth: 2,
        barThickness: 50,
        barPercentage: 0.5,
      },
    ],
  };

  return (
    <div className="chart-custom">
      <Chart type="bar" data={dataChart} />;
    </div>
  );
}

export default ChartCustom;
