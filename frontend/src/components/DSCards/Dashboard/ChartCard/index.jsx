import { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import clsx from "clsx";
import { DSCard, DSSelect } from "@/components/";
import styles from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const ChartCard = ({ className }) => {
  const chartRef = useRef(null);

  const balanceData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          10000, 20000, 15000, 30000, 35000, 40000, 38000, 42000, 46000, 48000,
          55000, 65000,
        ],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      y: {
        type: "linear",
        position: "bottom",
        ticks: {
          callback: (value) => `${value / 1000}k`,
        },
        min: 0,
      },
    },
  };

  return (
    <DSCard
      size="small"
      rootClass={(styles.card, className)}
      className={clsx(styles.cardBody, "d-flex flex-column")}
      title="Balance Overview"
      headerContent={
        <DSSelect
          className="w-100"
          defaultValue="Month"
          options={[
            { label: "Month", value: "Month" },
            { label: "Year", value: "Year" },
          ]}
        />
      }
    >
      <div className={styles.chart}>
        <Line ref={chartRef} data={balanceData} options={options} />
      </div>
    </DSCard>
  );
};
