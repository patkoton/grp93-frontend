import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesAnalysis = () => {
  // Sample data for the stacked column chart
  const data = {
    labels: ['Category1', 'Category2', 'Category3'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [15, 25, 35],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className='rounded-xl bg-color11 border border-color10 shadow shadow-shadow-color p-5'>
      <h2 className='text-dark-blue text-base font-semibold mb-10'>Stacked Column Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesAnalysis;
