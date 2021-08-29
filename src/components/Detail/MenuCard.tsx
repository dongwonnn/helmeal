import React, { FC } from 'react';
import { ITotalMealInfo } from 'types/ITotalMealInfo';
import { MenuCardContainer } from './styles';

interface MenuCardProps {
  food: ITotalMealInfo;
}

const MenuCard: FC<MenuCardProps> = ({ food }) => {
  return (
    <MenuCardContainer>
      <img src={food.largeImgUrl} alt="MenuImage" />
      <p>
        프로틴:{food.protein}g | 탄수화물:{food.carb}g
      </p>
      <h2>{food.title}</h2>
    </MenuCardContainer>
  );
};

export default MenuCard;
