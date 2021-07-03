import React, { useState } from 'react';
import { MealCategoriesContainer, MealCategoryLabel } from './styles';
import { mealCategories } from '../../utils/data';
import { useCallback } from 'react';
import { RootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMealInfo } from '../../reducers/food';

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
