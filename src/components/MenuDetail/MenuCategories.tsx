import React from 'react';
import { Link } from 'react-router-dom';
import { ITotalMealInfo } from 'types/ITotalMealInfo';
import { ITotalSnackInfo } from 'types/ITotalSnackInfo';
import { MenuCategoriesContainer } from './styles';

interface MenuCategoriesProps {
  totalMealInfo: ITotalMealInfo[];
  totalSnackInfo: ITotalSnackInfo[];
  curUrl: String;
}

const MenuCategories: import('react').FC<MenuCategoriesProps> = ({
  totalMealInfo,
  totalSnackInfo,
  curUrl,
}) => {
  return (
    <MenuCategoriesContainer>
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
      </ul>
    </MenuCategoriesContainer>
  );
};

export default MenuCategories;
