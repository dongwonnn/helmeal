import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { ITotalMealInfo } from 'types/ITotalMealInfo';
import { ITotalSnackInfo } from 'types/ITotalSnackInfo';
import Button from '../Common/Button';
import DoughnutGraph from '../Common/DoughnutGraph';
import {
  MenuInfoContainer,
  MainImageContainer,
  MenuDetail,
  MenuNutrient,
  DoughnutContainer,
  Gap,
  MenuProtein,
  MenuCalorie,
  MenuIntegrity,
} from './styles';

interface MenuInfopRrops {
  currentMeal: ITotalMealInfo;
}

const MenuInfo: FC<MenuInfopRrops> = ({ currentMeal }) => {
  const history = useHistory();

  const goDetailPage = useCallback(() => {
    history.push('/detail');
  }, [history]);

  return (
    <MenuInfoContainer>
      <MainImageContainer>
        <img src={currentMeal.largeImgUrl} alt="Menu Img" />
        <AiOutlineClose onClick={goDetailPage} />
      </MainImageContainer>
      <MenuDetail>
        <h3>헬밀P 프로틴</h3>
        <h2>{currentMeal.title}</h2>
        <MenuIntegrity>
          <MenuCalorie>
            <p>{currentMeal.cal}</p>
            <p>칼로리</p>
          </MenuCalorie>
          <Gap />
          <MenuProtein>
            <img src={currentMeal.proteinImgUrl} alt="Integrity" />
            <p>{currentMeal.integrity} 프로틴</p>
          </MenuProtein>
        </MenuIntegrity>
        <MenuNutrient>
          <DoughnutContainer>
            <DoughnutGraph ingredient="단백질" amount={currentMeal.protein} />
          </DoughnutContainer>
          <DoughnutContainer>
            <DoughnutGraph ingredient="지방" amount={currentMeal.fat} />
          </DoughnutContainer>
          <DoughnutContainer>
            <DoughnutGraph ingredient="탄수화물" amount={currentMeal.carb} />
          </DoughnutContainer>
        </MenuNutrient>
      </MenuDetail>
      <Button>
        <Link to="/subscribe-option">루틴 시작하기</Link>
      </Button>
    </MenuInfoContainer>
  );
};

export default MenuInfo;
