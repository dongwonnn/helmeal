import React from 'react';
import './MenuCard.scss';

const MenuCard = ({ meal }) => {
  return (
    <div className="MenuCardContainer">
      <img src={meal.imgUrl} alt="MenuImage" />
      <p>
        프로틴:{meal.protein}g | 탄수화물:{meal.carb}g
      </p>
      <h2>{meal.title}</h2>
    </div>
  );
};

export default MenuCard;
