import React, { useEffect, useRef } from 'react'
import style from "./Chart.module.css"
import { Card, Flex } from 'antd'
import { DSSelect } from '../../FormComponents'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export const Chart = () => {

  // Chart data reference
  const chartRef = useRef(null);

  // Data for the balance chart
  const balanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Y-axis
    datasets: [
      {
        data: [10000, 20000, 15000, 30000, 35000, 40000, 38000, 42000, 46000, 48000, 55000, 65000], // X-axis values
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.3,
      },
    ],
  };

  // Cleanup chart instance on unmount
  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Ensure the previous chart is destroyed
      }
    };
  }, []);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        reverse: false,

      },
      y: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          callback: (value) => `${value / 1000}k`,
        },
        min: 0,
      },
    },
  };

  return (
    <Card className={style.card}>

      <div>
        <Flex justify='space-between' align='center'>
          <h3 className='fw-semibold'>Complaint List</h3>
          <div className='w-auto ms-auto'>
            <DSSelect
              className="w-100"
              defaultValue="Month"
              options={[
                { label: "Month", value: "Month" },
                { label: "Year", value: "Year" },
              ]}
            >
              View all
            </DSSelect>
          </div>

        </Flex>

        <div className={style.chart}>
          <Line ref={chartRef} data={balanceData} options={options} />
        </div>

      </div>

    </Card>
  )
}
