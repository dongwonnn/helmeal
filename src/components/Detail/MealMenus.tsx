import React, { useEffect } from 'react';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ITotalMealInfo } from '../../types/ITotalMealInfo';

import { MealMenusContainer } from './styles';
import { RootState } from '../../reducers';

const MealMenus = () => {
  const { sortedMealInfo } = useSelector(({ food }: RootState) => ({
    sortedMealInfo: food.sortedMealInfo,
  }));

  if (!sortedMealInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <MealMenusContainer>
      {sortedMealInfo.map((meal: ITotalMealInfo) => (
        <Link key={meal.id} to={`/menu-detail/${meal.id}`}>
          <MenuCard food={meal} />
        </Link>
      ))}
    </MealMenusContainer>
  );
};

export default MealMenus;
