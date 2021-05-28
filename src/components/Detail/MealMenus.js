import React from 'react';
import './MealMenus.scss';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';
import { mealInfo } from '../../utils/data';

const MealMenus = () => {
  if (!mealInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <div className="MealMenusContainer">
      <div className="MenuCarsdContainer">
        {mealInfo.map((meal) => {
          return (
            <Link key={meal.id} to={`/menu-detail/${meal.id}`}>
              <MenuCard>
                <img src={meal.imgUrl} alt="MenuImage" />
                <p>
                  프로틴:{meal.protein}g | 탄수화물:{meal.carb}g
                </p>
                <h2>{meal.title}</h2>
              </MenuCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MealMenus;
