import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holdings',
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false,   // show all labels
        maxRotation: 90,   // angle labels
        minRotation: 45,   // prevent overlap
      },
    },
  },
};


export function HoldingGraph({data}){
  return <Bar options={options} data={data}  />;
}
export default HoldingGraph;