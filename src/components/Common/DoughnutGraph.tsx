import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutGraph.scss';

interface DoughnutProps {
  ingredient: string;
  amount: number;
}

const DoughnutGraph:FC<DoughnutProps> = ({ ingredient, amount }) => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: [amount, 50 - amount],
        backgroundColor: ['rgba(255, 139, 120, 1)', 'rgba(245, 245, 245, 1)'],
        borderRadius: 10,
        cutout: '75%',
      },
    ],
  };

  return (
    <div className="GraphContainer">
      <div className="TextContainer">
        <p>{amount}</p>
        <p>{ingredient}</p>
      </div>
      <Doughnut type data={data} />
    </div>
  );
};

export default DoughnutGraph;
