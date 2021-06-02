import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCategories.scss';
import { ITotalMealInfo } from '../../types/ITotalMealInfo';
import { ITotalSnackInfo } from '../../types/ITotalSnackInfo';

interface MenuCategoriesProps {
  totalMealInfo: ITotalMealInfo[];
  totalSnackInfo: ITotalSnackInfo[];
  curUrl: String;
}

const MenuCategories:import('react').FC<MenuCategoriesProps> = ({ totalMealInfo, totalSnackInfo, curUrl }) => {
  console.log(totalMealInfo);
  console.log(totalSnackInfo);
  console.log(curUrl);
  return (
    <nav className="MenuCategories">
      <ul>
        {totalMealInfo.map((meal) => (
          <li
            className={
              'MenuImg' +
              (curUrl === `/menu-detail/${meal.id}` ? ' Clicked' : '')
            }
            key={meal.id}
          >
            <Link to={`/menu-detail/${meal.id}`}>
              <img src={meal.smallImgUrl} alt="Small Meal Img" />
            </Link>
          </li>
        ))}
        {totalSnackInfo.map((snack) => (
          <li
            className={
              'MenuImg' +
              (curUrl === `/menu-detail/${snack.id}` ? ' Clicked' : '')
            }
            key={snack.id}
          >
            <Link to={`/menu-detail/${snack.id}`}>
              <img src={snack.smallImgUrl} alt="Small Snack Img" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuCategories;