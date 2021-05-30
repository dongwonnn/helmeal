import React from 'react';
import './MenuCard.scss';

const MenuCard = ({ food }) => {
  return (
    <div className="MenuCardContainer">
      <img src={food.imgUrl} alt="MenuImage" />
      <p>
        프로틴:{food.protein}g | 탄수화물:{food.carb}g
      </p>
      <h2>{food.title}</h2>
    </div>
  );
};

export default MenuCard;
