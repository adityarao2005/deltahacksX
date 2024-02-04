import React from 'react';
import Chart from "chart.js/auto"
import {CategoryScale} from "chart.js"
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale)

const generateRandomData = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10) + 1);
};

const LineChart = () => {
  // Example data for Line Chart 1 (Temperature)
  const chartData1 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Temperature',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Example data for Line Chart 2 (Sales)
  const chartData2 = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <div>
      <h2 className='text-1xl font-semibold py-4'>Magnitude</h2>
      <Line data={chartData1} />

      <h2 className='text-1xl font-semibold py-4 mt-8'>Depth</h2>
      <Line data={chartData2} />
    </div>
  );
};

export default LineChart;