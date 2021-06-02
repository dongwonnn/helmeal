import React, { FC } from 'react';
import './MenuCard.scss';
import { ITotalMealInfo } from '../../types/ITotalMealInfo';

interface MenuCardProps{
  food: ITotalMealInfo
}

const MenuCard:FC<MenuCardProps> = ({ food }) => {
  return (
    <div className="MenuCardContainer">
      <img src={food.largeImgUrl} alt="MenuImage" />
      <p>
        프로틴:{food.protein}g | 탄수화물:{food.carb}g
      </p>
      <h2>{food.title}</h2>
    </div>
  );
};

export default MenuCard;
