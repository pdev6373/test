import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

export const Donut = ({ labels, data, title }) => {
  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        // display: false,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Doughnut chart",
        data,
        backgroundColor: [
          "#599eea",
          "#844ff6",
          "#f09468",
          "#fab70a",
          "#0fb77a",
        ],
        borderWidth: 0,
        hoverBorderWidth: 2,
        hoverBorderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  return (
    <div className="dashboard__donutWrapper">
      <div className="dashboard__donutWrapper__text">
        <h2 className="dashboard__donutWrapper__title">{title}</h2>
        <span className="dashboard__donutWrapper__report">
          View full reports
        </span>
      </div>

      {/* <div style={{ position: "relative" }}> */}
      <div>
        <span></span>
        {/* <span
          style={{
            maxWidth: "300px",
            height: "300px",
            overflow: "hidden",
            position: "absolute",
            right: "0",
          }}
        > */}
        <Doughnut
          data={chartData}
          options={options}
          width="300px"
          height="300px"
        />
        {/* </span> */}
      </div>
    </div>
  );
};
