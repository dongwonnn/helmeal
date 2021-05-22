import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const data = {
  maintainAspectRatio: false,
  responsive: false,
  datasets: [
    {
      // 합은 50임.
      data: [36, 14],
      backgroundColor: ['rgba(255, 139, 120, 1)', 'rgba(245, 245, 245, 1)'],
      //   borderRadius: 20,
      cutout: '75%',
    },
  ],
};

const DoughnutGraph = () => {
  return <Doughnut data={data} />;
};

export default DoughnutGraph;
