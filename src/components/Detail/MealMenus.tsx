import React, { useEffect } from 'react';
import MenuCard from './MenuCard';
import { mealInfo } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentMealInfo } from '../../reducers/food';
import { ITotalMealInfo } from '../../types/ITotalMealInfo';

import { MealMenusContainer } from './styles';

const MealMenus = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentMealInfo(mealInfo));
  }, [dispatch]);

  const { totalMealInfo } = useSelector(({ food }) => ({
    totalMealInfo: food.totalMealInfo,
  }));

  if (!totalMealInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <MealMenusContainer>
        {totalMealInfo.map((meal:ITotalMealInfo) => (
          <Link key={meal.id} to={`/menu-detail/${meal.id}`}>
            <MenuCard food={meal} />
          </Link>
        ))}
    </MealMenusContainer>
  );
};

export default MealMenus;
