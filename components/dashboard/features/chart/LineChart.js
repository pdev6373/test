import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const LineChart = ({ graphLabels, graphData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
  );

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //       ticks: {
  //         color: "#303030",
  //         beginAtZero: true,
  //         font: {
  //           size: 14,
  //           weight: 700,
  //         },
  //       },
  //     },
  //     y: {
  //       grid: {
  //         // display: false,
  //       },
  //       ticks: {
  //         color: "#303030",
  //         beginAtZero: true,
  //         font: {
  //           size: 14,
  //           weight: 700,
  //         },
  //       },
  //     },
  //   },
  // };
  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      background: {
        color: "#303030",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#303030",
          font: {
            size: 14,
            weight: 700,
          },
        },
      },
      y: {
        ticks: {
          color: "#303030",
          font: {
            size: 14,
            weight: 700,
          },
        },
      },
    },
  };

  const chartData = {
    labels: graphLabels,
    datasets: [
      {
        data: graphData,
        pointRadius: 0,
        borderColor: ["#FF5403"],
        borderWidth: 2,
        fill: true,
        backgroundColor: "red",
        hoverBackgroundColor: "red",
      },
    ],
  };

  return (
    <div className="dashboard__linechart">
      <Line options={options} data={chartData} height="300px" />
    </div>
  );
};
