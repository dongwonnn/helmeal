import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mealCategories } from 'utils/data';
import { RootState } from 'reducers';
import { categoryMealInfo } from 'reducers/food';
import { MealCategoriesContainer, MealCategoryLabel } from './styles';

const MealCategories = () => {
  const [clickId, setClickId] = useState<string>('0');
  const { totalMealInfo } = useSelector(({ food }: RootState) => ({
    totalMealInfo: food.totalMealInfo,
  }));

  const dispatch = useDispatch();
  const onClickProtein = useCallback(
    (protein, id) => {
      if (protein === '골고루') {
        dispatch(categoryMealInfo(totalMealInfo));
      } else {
        const nextSortedMealInfo = totalMealInfo.filter(
          (meal) => meal.integrity === protein,
        );

        dispatch(categoryMealInfo(nextSortedMealInfo));
      }
      setClickId(id);
    },
    [totalMealInfo],
  );

  return (
    <MealCategoriesContainer>
      {mealCategories.map((category) => (
        <MealCategoryLabel
          key={category.id}
          onClick={() => onClickProtein(category.protein, category.id)}
          active={clickId === category.id}
        >
          {category.protein} 프로틴
        </MealCategoryLabel>
      ))}
    </MealCategoriesContainer>
  );
};

export default MealCategories;
