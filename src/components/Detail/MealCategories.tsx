import React, { useEffect } from 'react';
import { MealCategoriesContainer } from './styles';
import { mealCategories } from '../../utils/data';
import { useCallback } from 'react';
import { RootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMealInfo } from '../../reducers/food';

const MealCategories = () => {
  const { totalMealInfo } = useSelector(({ food }: RootState) => ({
    totalMealInfo: food.totalMealInfo,
  }));

  const dispatch = useDispatch();

  const onClickProtein = useCallback((protein) => {
    console.log(protein);
    if (protein === '골고루') {
      console.log('1');
      dispatch(categoryMealInfo(totalMealInfo));
    } else {
      const nextSortedMealInfo = totalMealInfo.filter(
        (meal) => meal.integrity === protein,
      );
      console.log(nextSortedMealInfo);
      console.log('2');

      dispatch(categoryMealInfo(nextSortedMealInfo));
    }
  }, []);

  return (
    <MealCategoriesContainer>
      {mealCategories.map((category) => (
        <label
          key={category.id}
          onClick={() => onClickProtein(category.protein)}
        >
          {category.protein} 프로틴
        </label>
      ))}
    </MealCategoriesContainer>
  );
};

export default MealCategories;
