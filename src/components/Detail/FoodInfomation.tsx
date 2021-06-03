import React from 'react';
import { ReactComponent as BeefProtein } from '../../assets/images/ingredients/Beef_Protein.svg';
import { ReactComponent as ChickenProtein } from '../../assets/images/ingredients/Chicken_Protein.svg';
import { ReactComponent as FishProtein } from '../../assets/images/ingredients/Fish_Protein.svg';
import { ReactComponent as ForkProtein } from '../../assets/images/ingredients/Fork_Protein.svg';
import { ReactComponent as VegetableProtein } from '../../assets/images/ingredients/Vegetable_Protein.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/PlusIcon.svg';

import Snack from '../../assets/images/large/Snack_Presentation.png';
import Meal from '../../assets/images/large/Meal_Presentation.png';

import { DietComposition, FoodInfomationContainer, IngredientsGroup } from './styles';

const FoodInfomation = () => {
  return (
    <FoodInfomationContainer>
      <h2>헬밀 프로틴</h2>
      <p>당신의 운동에 최적화된 식단을 제공합니다.</p>
      <IngredientsGroup>
        <div>
          <BeefProtein />
          <p>
            소고기
            <br />
            프로틴
          </p>
        </div>
        <div>
          <ForkProtein />
          <p>
            돼지고기
            <br />
            프로틴
          </p>
        </div>
        <div>
          <ChickenProtein />
          <p>
            닭고기
            <br />
            프로틴
          </p>
        </div>
        <div>
          <FishProtein />
          <p>
            생선
            <br />
            프로틴
          </p>
        </div>
        <div>
          <VegetableProtein />
          <p>
            식물성
            <br />
            프로틴
          </p>
        </div>
      </IngredientsGroup>

      <h4>헬밀 프포틴 식단 구성</h4>

      <DietComposition>
        <div>
          <img src={Meal} alt="meal" />
        </div>
        <PlusIcon />
        <div>
          <img src={Snack} alt="snack" />
        </div>
      </DietComposition>
      <DietComposition>
        <p>메인식단 1종</p>
        <p></p>
        <p>프로틴 간식 1종</p>
      </DietComposition>
    </FoodInfomationContainer>
  );
};

export default FoodInfomation;
