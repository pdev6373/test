import { timeSort } from "./constants";
import { Chart } from "./features";

export const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__name">Dashboard</div>
      <div className="dashboard__topInfo">
        <div>
          <span className="dashboard__greeting">
            Good morning, Blessing ⛅️{" "}
          </span>
          <p className="dashboard__reminder">
            Check out your dashboard summary.
          </p>
        </div>

        <span className="dashboard__viewAnalytics">View analytics</span>
      </div>

      <div className="dashboard__timeWrapper">
        {timeSort.map((time) => (
          <div
            key={time}
            className={`${
              time === "All Time"
                ? "dashboard__time dashboard__time__active"
                : "dashboard__time"
            }`}
          >
            {time}
          </div>
        ))}
      </div>

      <Chart />
    </main>
  );
};
